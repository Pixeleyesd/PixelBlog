"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Btn from "./Btn";

interface UserType {
  email: string;
  name: string;
  password: string;
  signUp: boolean;
}

const inputStyles =
  "bg-white border-2 border-[#1f2d3d] px-3 text-base py-1.5 text-[#1f2d3d] outline-none";

function SignInForm() {
  const [user, setUser] = useState<UserType>({
    email: "",
    name: "",
    password: "",
    signUp: false,
  });

  async function handleSignIn(e: React.SubmitEvent) {
    e.preventDefault();
    if (user.signUp) {
      await authClient.signUp.email(
        { ...user },
        {
          onSuccess: () => {
            setTimeout(() => {
              window.location.reload();
            }, 300);
          },
        },
      );
    } else {
      await authClient.signIn.email(
        { ...user },
        {
          onSuccess: () => {
            setTimeout(() => {
              window.location.reload();
            }, 300);
          },
        },
      );
    }
  }

  return (
    <form
      onSubmit={handleSignIn}
      className="flex flex-col gap-y-5 w-130 mx-auto bg-[lightblue] p-6 m-10"
    >
      <label className="text-sm text-[#1f2d3d] flex flex-col gap-y-1.5 font-bold">
        Email
        <input
          placeholder="hello@example.com"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className={inputStyles}
        />
      </label>
      {user.signUp && (
        <label className="text-sm text-[#1f2d3d] flex flex-col gap-y-1.5 font-bold">
          Display name
          <input
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className={inputStyles}
          />
        </label>
      )}
      <label className="text-sm text-[#1f2d3d] flex flex-col gap-y-1.5 font-bold">
        Password
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className={inputStyles}
        />
      </label>
      <label className="cursor-pointer flex gap-x-3 items-center text-[#1f2d3d] font-bold">
        <input
          type="checkbox"
          checked={user.signUp}
          onChange={(e) => setUser({ ...user, signUp: e.target.checked })}
        />
        Sign up
      </label>
      <Btn text="Submit" submit primary />
    </form>
  );
}

export default SignInForm;