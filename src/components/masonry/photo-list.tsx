"use client";

import { useInView } from "react-intersection-observer";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import MasonryLayout from "@/components/masonry/masonry-layout";
import Photo from "@/components/masonry/photo";

const LIMIT = 20;

export default function PhotoList() {
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

  const skeleton = Array.from({ length: LIMIT });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading && !isError) {
    return (
      <MasonryLayout
        breakpointCols={{
          default: 5,
          1536: 4,
          1024: 3,
          768: 2,
          480: 1
        }}
        className="masonry pl-4 lg:pt-4"
        columnClassName="masonry-column"
      >
        {skeleton.map((_, index) => {
          const height = Math.floor(Math.random() * 330) + 200;

          return (
            <div
              key={index}
              className="mb-4 w-full animate-pulse rounded-[10px] bg-gray-300"
              style={{ height: `${height}px` }}
            />
          );
        })}
      </MasonryLayout>
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
    <MasonryLayout
      breakpointCols={{
        default: 5,
        1536: 4,
        1024: 3,
        768: 2,
        480: 1
      }}
      className="masonry px-4 lg:pt-4"
      columnClassName="masonry-column"
    >
      {images.map((image) => (
        <Photo key={image.id} {...image} slides={images} />
      ))}

      <div ref={ref} />
    </MasonryLayout>
  );
}
