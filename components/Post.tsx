import type { PostType } from "@/app/post/actions";
import Link from "next/link";

function Post({ post }: { post: PostType }) {
  return (
    <Link
      href={`/blogs/${post.id}`}
      className="border-2 border-[#1f2d3d] bg-[lightblue] hover:bg-[#aee2e2] flex flex-col items-center gap-y-3 p-5 w-50"
    >
      <h2 className="text-xl font-bold text-[#1f2d3d] text-center">{post.title}</h2>
      <div className="text-xs text-[#1f2d3d]" title={post.date.toISOString()}>
        {post.date.toLocaleDateString()}
      </div>
    </Link>
  );
}

export default Post;