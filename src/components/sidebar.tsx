import Image from "next/image";
import Link from "next/link";

import {
  BookmarkIcon,
  BracesIcon,
  CalendarIcon,
  ExternalLinkIcon,
  LayoutTemplateIcon,
  LogOutIcon,
  MegaphoneIcon,
  MonitorSmartphoneIcon,
  Package2Icon,
  PanelTopIcon,
  PinIcon,
  PlusIcon,
  StickyNoteIcon,
} from "lucide-react";
import { SidebarClient } from "./sidebar-client";
import { PaneContainer, PaneContent, PaneHeader } from "./pane";
import { SidebarToggle } from "./sidebar-toggle";

export default function Sidebar() {
  return (
    <SidebarClient>
      <PaneContainer className="max-h-screen overflow-y-auto">
        {/* Brand */}
        <PaneHeader className="justify-between">
          <Link
            className="inline-flex items-center space-x-3 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring xl:p-0"
            href="/"
          >
            <BookmarkIcon size={20} />
            <span>Next Daily</span>
          </Link>
          <SidebarToggle />
        </PaneHeader>
        <PaneContent></PaneContent>
      </PaneContainer>
    </SidebarClient>
  );
}
