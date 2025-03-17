import { NextResponse } from "next/server";
import { getImages } from "@/data/images";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("_page") || "1";
    const limit = searchParams.get("_limit") || "20";

    const start = (Number(page) - 1) * Number(limit);
    const end = start + Number(limit);

    const images = getImages(Number(start), Number(end));

    return NextResponse.json(images);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
