import type { Metadata } from "next";
import { postBlog } from "./actions";
import { initAuth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Hero from "@/components/Hero";
import PostForm from "@/components/PostForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "New Post | My Blog",
  description:
    "You can create, customize, and post new blog posts on this page once you sign in.",
};

async function Page() {
  const auth = await initAuth();
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin");

  return (
    <>
      <div className="px-30">
        <Hero
          title="New Post"
          description="You can create, customize, and post new blog posts on this page once you sign in."
        />
        <PostForm postBlog={postBlog} />
      </div>
      <Footer />
    </>
  );
}
export default Page;
