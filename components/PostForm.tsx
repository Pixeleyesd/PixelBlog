"use client";

import type { PostType } from "@/app/post/actions";
import { useState } from "react";
import { redirect } from "next/navigation";
import Btn from "./Btn";

const inputStyles =
  "bg-zinc-900 rounded px-3 text-base py-1.5 text-zinc-300 outline-none";

function PostForm({
  postBlog,
}: {
  postBlog: (post: PostType) => Promise<void>;
}) {
  const [newPost, setNewPost] = useState<PostType>({
    id: crypto.randomUUID(),
    date: new Date(),
    title: "",
    content: [""],
  });

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    await postBlog(newPost);
    redirect("/blogs/" + newPost.id);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-5 w-130 mx-auto"
    >
      <label className="text-sm text-zinc-300 flex flex-col gap-y-1.5">
        Post title
        <input
          type="text"
          placeholder="My first blog post!"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className={inputStyles}
        />
      </label>
      {newPost.content.map((paragraph, i) => (
        <label
          key={i}
          className="text-sm text-zinc-300 flex flex-col gap-y-1.5"
        >
          <div className="flex justify-between">
            Paragraph {i + 1}
            {newPost.content.length > 1 && (
              <span
                className="text-red-500 cursor-pointer hover:underline"
                onClick={() =>
                  setNewPost({
                    ...newPost,
                    content: [
                      ...newPost.content.slice(0, i),
                      ...newPost.content.slice(i + 1),
                    ],
                  })
                }
              >
                Remove
              </span>
            )}
          </div>
          <textarea
            placeholder="Put your blog post's actual paragraph content here"
            value={paragraph}
            onChange={(e) => {
              const content = [...newPost.content];
              content[i] = e.target.value;
              setNewPost({ ...newPost, content: content });
            }}
            className={inputStyles + " resize-y min-h-20"}
          ></textarea>
        </label>
      ))}
      <Btn
        text="Add paragraph"
        onclick={() =>
          setNewPost({ ...newPost, content: [...newPost.content, ""] })
        }
      />
      <Btn text="Submit post" styles="mt-5" primary submit />
    </form>
  );
}

export default PostForm;
