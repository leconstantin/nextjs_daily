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

export default function Sidebar() {
  return (
    <div>
      <div className="max-h-screen overflow-y-auto">
        {/* Brand */}
        <div className="justify-between">
          <Link
            className="inline-flex items-center space-x-3 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring xl:p-0"
            href="/"
          >
            <BookmarkIcon size={20} />
            <span>Next Daily</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
