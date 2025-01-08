import type { Metadata } from "next";

import { EmptyPage } from "@/components/empty-page";

import { toCapitalize } from "@/lib/utils";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: toCapitalize((await params).slug),
  };
}

export default function Page() {
  return <EmptyPage />;
}
