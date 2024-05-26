import { signIn, signOut } from "next-auth/react";

const Login = async () => {
  const result = await signIn("google", { callbackUrl: "/" });
  console.log("signing with google", result);
  if (result?.error) {
    console.error(result.error);
    return;
  }
};

const Logout = async () => {
  await signOut("google", { callbackUrl: "/" });
};

export { Login, Logout };
