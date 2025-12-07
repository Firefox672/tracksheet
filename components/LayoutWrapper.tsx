"use client";
import { ReactNode } from "react";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  // TopBar and AnnouncementBox are designed to be used within specific pages
  // rather than globally in layout, since dashboards have their own headers
  return <main className="min-h-screen">{children}</main>;
}
