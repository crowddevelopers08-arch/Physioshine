import { notFound } from "next/navigation";

// The /wp pages are hidden for now. Delete this file to bring them back.
export default function WpLayout({ children }: { children: React.ReactNode }) {
  notFound();
  return children;
}
