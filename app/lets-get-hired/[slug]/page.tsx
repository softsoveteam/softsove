"use client";

import { useParams } from "next/navigation";
import { ApplyForm } from "@/components/ApplyForm";
import { PageHero } from "@/components/PageHero";

export default function LetsGetHiredApplyPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || "";

  return (
    <>
      <PageHero
        subtitle="( No boring desks )"
        title="Let's Get Hired"
        description={
          <>
            Drop a CV. If we asked for experience, tell us the years.
            <br /> Our team will get back shortly.
          </>
        }
      />
      <div id="tt-page-content">
        <div className="tt-section padding-top-40 padding-bottom-120">
          <div className="tt-section-inner tt-wrap">{slug ? <ApplyForm slug={slug} /> : null}</div>
        </div>
      </div>
    </>
  );
}
