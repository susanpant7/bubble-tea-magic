"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const session = useSession();
  console.log("the session is ");
  console.log(session);
  if (session.status == "loading") {
    return <div>Loading....</div>;
  }
  if (session.status == "authenticated") {
    return (
      <div>
        <button onClick={() => signOut("google")}>Sign out with Google</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
};

export default Login;
