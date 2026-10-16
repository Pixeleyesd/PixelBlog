import type { Metadata } from "next";
import { initAuth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Hero from "@/components/Hero";
import SignInForm from "@/components/SignInForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sign In | My Blog",
  description: "Sign in or sign up for an account on this page.",
};

async function Page() {
  const auth = await initAuth();
  const session = await auth.api.getSession({ headers: await headers() });
  if (session) redirect("/");

  return (
    <>
      <div className="px-30">
        <Hero
          title="Sign In"
          description="Sign in or sign up for an account on this page."
        />
        <SignInForm />
      </div>
      <Footer />
    </>
  );
}
export default Page;