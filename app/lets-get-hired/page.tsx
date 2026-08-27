import type { Metadata } from "next";
import { JobsBoard } from "@/components/JobsBoard";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Let's Get Hired",
  description: "Open roles at Softsove. Time to Make Boring Illegal — come make with us.",
};

export default function LetsGetHiredPage() {
  return (
    <>
      <PageHero
        subtitle="( No boring desks )"
        title="Let's Get Hired"
        description={
          <>
            Time to Make Boring Illegal.
            <br /> Open roles, weird people, real work.
          </>
        }
      />
      <div id="tt-page-content">
        <div className="tt-section padding-top-40 padding-bottom-120">
          <div className="tt-section-inner tt-wrap">
            <JobsBoard />
          </div>
        </div>
      </div>
    </>
  );
}
