import type { PostType } from "@/app/post/actions";
import Link from "next/link";

function Post({ post }: { post: PostType }) {
  return (
    <Link
      href={`/blogs/${post.id}`}
      className="border-2 border-zinc-700 rounded hover:bg-zinc-900 flex flex-col items-center gap-y-3 p-5 w-50"
    >
      <h2 className="text-xl font-bold text-white text-center">{post.title}</h2>
      <div className="text-xs text-zinc-300" title={post.date.toISOString()}>
        {post.date.toLocaleDateString()}
      </div>
    </Link>
  );
}

export default Post;
