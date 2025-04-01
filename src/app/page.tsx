"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = true;
  if (isAuthenticated) router.replace("/home");
  else router.replace("/login");
  return null;
}
