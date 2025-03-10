import { NextResponse } from "next/server";

export async function GET() {
  console.log("Fetching images with force-cache...");
  const response = await fetch("https://picsum.photos/v2/list?limit=6", {
    cache: "force-cache", 
    next: { tags: ["force-cache"] }, 
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }

  const images = await response.json();
  return NextResponse.json(images, { status: 200 });
}
