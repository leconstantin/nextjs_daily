"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { PaneContainer, PaneContent, PaneHeader } from "@/components/pane";
import { SidebarToggle } from "@/components/sidebar-toggle";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const layoutSegment = useSelectedLayoutSegment();

  return (
    <aside
      className={cn(
        `w-full border-r lg:flex lg:max-w-sm`,
        layoutSegment === "resources" && "hidden"
      )}
    >
      cccccccccccc
      <PaneContainer>
        <PaneHeader>
          <SidebarToggle />
          <h1 className="capitalize">Feed</h1>
        </PaneHeader>
        <PaneContent>{children}</PaneContent>
      </PaneContainer>
    </aside>
  );
}
