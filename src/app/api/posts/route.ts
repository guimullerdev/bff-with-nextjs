import { NextRequest, NextResponse } from "next/server";

import { fetchPosts } from "@/app/lib/api";

export async function GET(req: NextRequest) {
  try {
    const posts = await fetchPosts();
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
