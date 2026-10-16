"use client";

import type { PostType } from "../post/actions";
import { useState } from "react";
import Post from "@/components/Post";
import Link from "next/link";

function Posts({ posts }: { posts: PostType[] }) {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex flex-col items-center gap-y-10">
      <input
        placeholder="Search blog posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white border-2 border-[#1f2d3d] px-3 text-base py-1.5 text-[#1f2d3d] outline-none"
      />
      <div className="flex flex-wrap justify-center gap-5">
        {posts.length > 0 ? (
          posts
            .filter((p) =>
              p.title.toLowerCase().includes(search.trim().toLowerCase()),
            )
            .map((post) => <Post key={post.id} post={post} />)
        ) : (
          <Link href="/post" className="text-[#1f2d3d] font-bold hover:underline">No blogs yet, create one here!</Link>
        )}
      </div>
    </div>
  );
}

export default Posts;