"use server";

import Post from "@/lib/PostModel";
import dbConnect from "@/lib/mongoose";

export interface PostType {
  id: string;
  date: Date;
  title: string;
  content: string[];
}

export async function postBlog(post: PostType) {
  try {
    await dbConnect();
    await Post.create(post);
  } catch (error) {
    console.error("Error: " + error);
  }
}
