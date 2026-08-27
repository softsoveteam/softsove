"use client";

import { useEffect, useState } from "react";
import { apiGet, type Job } from "@/lib/api";

export function JobsBoard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    apiGet<Job[]>("/jobs")
      .then(setJobs)
      .catch((err: Error) => setError(err.message || "Could not load open roles."))
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return <p className="tt-anim-fadeinup">Looking for open mischief...</p>;
  }

  if (error) {
    return <p className="tt-anim-fadeinup">{error} Start the Softsove API on port 8000.</p>;
  }

  if (!jobs.length) {
    return (
      <p className="tt-anim-fadeinup">
        No open desks right now. Drop a line on Let&apos;s Get Weird and we will keep you in mind.
      </p>
    );
  }

  return (
    <div className="tt-pricing-container tt-ppl-boxed">
      <div className="tt-pricing-plan-list">
        <div className="tt-row">
          {jobs.map((job, index) => (
            <div key={job.id} className="tt-col-md-6 tt-col-xxl-4 margin-bottom-40">
              <div className={`tt-pricing-plan tt-job-card tt-anim-fadeinup ${index % 2 ? "tt-ppl-tilted-2" : "tt-ppl-tilted-1"}`}>
                {job.experience_badge ? <span className="tt-job-badge">{job.experience_badge}</span> : null}
                <div className="tt-ppl-header">
                  <h3 className="tt-ppl-name">{job.title}</h3>
                  <div className="tt-ppl-description">{job.short_intro}</div>
                </div>
                <ul className="tt-list margin-bottom-30">
                  {job.department ? <li>{job.department}</li> : null}
                  {job.location ? <li>{job.location}</li> : null}
                  {job.employment_type ? <li>{job.employment_type}</li> : null}
                </ul>
                <div className="tt-ppl-button">
                  <a href={`/lets-get-hired/${job.slug}`} className="tt-btn tt-btn-secondary tt-btn-full">
                    <span data-hover="Apply Weirdly">Apply Weirdly</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
