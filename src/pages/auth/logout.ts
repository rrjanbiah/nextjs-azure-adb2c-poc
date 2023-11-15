import { signOut } from "next-auth/react";

export default function Logout() {
  signOut({ callbackUrl: process.env.NEXTAUTH_URL });

  return null;
}
