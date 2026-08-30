"use client";

import { useCallback, useEffect, useState } from "react";
import { apiGet, type Job } from "@/lib/api";

export function useOpenJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loaded, setLoaded] = useState(false);

  const refresh = useCallback(() => {
    apiGet<Job[]>("/jobs")
      .then((rows) => setJobs(Array.isArray(rows) ? rows : []))
      .catch(() => setJobs([]))
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    refresh();
    const timer = window.setInterval(refresh, 20000);
    return () => window.clearInterval(timer);
  }, [refresh]);

  return { jobs, loaded, refresh };
}

export function HiredMega({
  pathname,
  jobs,
  loaded,
}: {
  pathname: string;
  jobs: Job[];
  loaded: boolean;
}) {
  return (
    <div className="tt-submenu tt-plot-mega tt-hired-mega">
      <div className="tt-plot-mega-inner">
        <div className="tt-plot-mega-shot">
          <span className="tt-text-image tt-timg-boxed tt-timg-tilted-2">
            <img src="/assets/img/terrains/memes/hired.gif" alt="" />
          </span>
          <p className="tt-plot-mega-caught">Pull up a weird chair.</p>
        </div>
        <div className="tt-plot-mega-copy">
          <p className="tt-plot-mega-eyebrow">( No boring desks )</p>
          <p className="tt-plot-mega-kicker">
            {loaded
              ? `${jobs.length} open seat${jobs.length === 1 ? "" : "s"}. Closed to beige.`
              : "Open seats. Closed to beige."}
          </p>
          <ul className="tt-plot-mega-list">
            {!loaded ? (
              <li>
                <span className="tt-plot-mega-card">
                  <span className="tt-plot-mega-card-label">Live from the API</span>
                  <span className="tt-plot-mega-card-title">Sniffing for open mischief</span>
                  <span className="tt-plot-mega-card-note">One second. The board is waking up.</span>
                </span>
              </li>
            ) : null}
            {jobs.map((job) => (
              <li key={job.id} className={pathname === `/lets-get-hired/${job.slug}` ? "active" : undefined}>
                <a href={`/lets-get-hired/${job.slug}`} className="tt-plot-mega-card">
                  <span className="tt-plot-mega-card-label">
                    {[job.experience_badge, job.location].filter(Boolean).join(" · ") || "Open seat"}
                  </span>
                  <span className="tt-plot-mega-card-title">{job.title}</span>
                  <span className="tt-plot-mega-card-note">{job.short_intro || job.department || job.employment_type}</span>
                </a>
              </li>
            ))}
            <li className={pathname === "/lets-get-hired" ? "active" : undefined}>
              <a href="/lets-get-hired" className="tt-plot-mega-card">
                <span className="tt-plot-mega-card-label">The whole board</span>
                <span className="tt-plot-mega-card-title">See every open seat</span>
                <span className="tt-plot-mega-card-note">
                  {jobs.length ? "Same list as the API. No fake desks." : "Nothing open right now. Poke Let's Get Weird anyway."}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
