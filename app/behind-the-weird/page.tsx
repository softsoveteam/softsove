import type { Metadata } from "next";
import { AdminDesk } from "@/components/AdminDesk";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Behind the Weird",
  description: "Add open positions, ask for experience, and read applications.",
};

export default function BehindTheWeirdPage() {
  return (
    <>
      <PageHero
        subtitle="( The desk )"
        title="Behind the Weird"
        description={
          <>
            Add available positions.
            <br /> Toggle experience. Read the inbox.
          </>
        }
      />
      <div id="tt-page-content">
        <div className="tt-section padding-top-40 padding-bottom-120">
          <div className="tt-section-inner tt-wrap">
            <AdminDesk />
          </div>
        </div>
      </div>
    </>
  );
}
