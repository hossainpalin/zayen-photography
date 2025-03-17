"use client";

import Photo from "@/components/masonry/photo";
import { useInView } from "react-intersection-observer";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Masonry from "react-masonry-css";

const LIMIT = 20;

export default function PhotoLayout() {
  const { ref, inView } = useInView();

  const { data, isLoading, isError, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `/api/get-images?_limit=${LIMIT}&_page=${pageParam}`
      );
      return response.json();
    },
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      if (allPages.length < LIMIT) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
    staleTime: 1000 * 60 * 60 // 1 hour
  });

  const breakpointColumns = {
    default: 5,
    1536: 4,
    1024: 3,
    768: 2,
    480: 1
  };

  const skeleton = Array.from({ length: LIMIT });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading && !isError) {
    return (
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry"
        columnClassName="masonry-column"
      >
        {skeleton.map((_, index) => {
          const height = Math.floor(Math.random() * 330) + 200;

          return (
            <div
              key={index}
              className="mb-4 w-full animate-pulse rounded-[10px] bg-gray-300"
              style={{ height }}
            />
          );
        })}
      </Masonry>
    );
  }

  if (!isLoading && isError) {
    return (
      <div className="flex size-full items-center justify-center p-4">
        {error instanceof Error ? error.message : "An unknown error occurred"}
      </div>
    );
  }

  const images = data?.pages.flatMap((page) => page) || [];

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="masonry"
      columnClassName="masonry-column"
    >
      {images.map((image) => (
        <Photo key={image.id} {...image} slides={images} />
      ))}

      <div ref={ref} />
    </Masonry>
  );
}
