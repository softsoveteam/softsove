"use client";

import { FormEvent, useEffect, useState } from "react";
import { apiGet, apiSend, type Job } from "@/lib/api";

export function ApplyForm({ slug }: { slug: string }) {
  const [job, setJob] = useState<Job | null>(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    apiGet<Job>(`/jobs/${slug}`)
      .then(setJob)
      .catch((err: Error) => setError(err.message || "This role is not open."))
      .finally(() => setLoaded(true));
  }, [slug]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!job) return;
    setSending(true);
    setStatus("");
    const form = new FormData(event.currentTarget);
    try {
      const result = await apiSend<{ success: boolean; message: string }>(`/jobs/${job.slug}/apply`, {
        form,
      });
      setStatus(result.message);
      event.currentTarget.reset();
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Could not send your application.");
    } finally {
      setSending(false);
    }
  }

  if (!loaded) {
    return <p className="tt-anim-fadeinup">Pulling this role...</p>;
  }

  if (error || !job) {
    return <p className="tt-anim-fadeinup">{error || "This role is not open."}</p>;
  }

  const reqs = job.requirements
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="tt-row tt-xl-row-reverse">
      <div className="tt-col-xl-5 tt-contact-info-col">
        <div className="tt-contact-info margin-bottom-80">
          <div className="tt-contact-info-inner padding-left-xlg-7-p">
            {job.experience_badge ? <span className="tt-job-badge tt-job-badge-inline">{job.experience_badge}</span> : null}
            <div className="tt-heading tt-heading-lg">
              <h2 className="tt-heading-title tt-anim-lines">{job.title}</h2>
            </div>
            <div className="margin-bottom-30">
              <p className="tt-anim-lines">{job.description || job.short_intro}</p>
            </div>
            <div className="margin-bottom-30 tt-anim-fadeinup">
              <h3 className="tt-contact-info-heading">The desk</h3>
              <ul className="tt-list">
                {job.department ? <li>{job.department}</li> : null}
                {job.location ? <li>{job.location}</li> : null}
                {job.employment_type ? <li>{job.employment_type}</li> : null}
              </ul>
            </div>
            {reqs.length ? (
              <div className="margin-bottom-30 tt-anim-fadeinup">
                <h3 className="tt-contact-info-heading">You bring</h3>
                <ul className="tt-list">
                  {reqs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="tt-col-xl-7 tt-contact-form-col">
        <form className="tt-form tt-form-lg tt-form-creative tt-form-tilted" onSubmit={onSubmit}>
          <div className="tt-form-group tt-anim-fadeinup">
            <label htmlFor="apply-name">
              What&apos;s your name? <span className="required">*</span>
            </label>
            <input className="tt-form-control" id="apply-name" name="name" type="text" placeholder="Jane Weird" required />
          </div>
          <div className="tt-form-group tt-anim-fadeinup">
            <label htmlFor="apply-email">
              What&apos;s your email? <span className="required">*</span>
            </label>
            <input className="tt-form-control" id="apply-email" name="email" type="email" placeholder="jane@weird.com" required />
          </div>
          <div className="tt-form-group tt-anim-fadeinup">
            <label htmlFor="apply-phone">Phone</label>
            <input className="tt-form-control" id="apply-phone" name="phone" type="tel" placeholder="+91 ..." />
          </div>
          {job.ask_experience ? (
            <div className="tt-form-group tt-anim-fadeinup">
              <label htmlFor="apply-exp">
                Years of experience <span className="required">*</span>
              </label>
              <input
                className="tt-form-control"
                id="apply-exp"
                name="experience_years"
                type="number"
                min={0}
                step="0.5"
                placeholder="2"
                required
              />
            </div>
          ) : null}
          <div className="tt-form-group tt-anim-fadeinup">
            <label htmlFor="apply-message">Why this desk?</label>
            <textarea className="tt-form-control" id="apply-message" name="message" rows={5} placeholder="I make boring illegal by..." />
          </div>
          <div className="tt-form-group tt-anim-fadeinup">
            <label htmlFor="apply-cv">
              Upload CV <span className="required">*</span>
            </label>
            <input className="tt-form-control" id="apply-cv" name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf" required />
          </div>
          {status ? <p className="margin-bottom-30">{status}</p> : null}
          <button type="submit" className="tt-btn tt-btn-secondary tt-btn-full tt-anim-fadeinup" disabled={sending}>
            <span data-hover={sending ? "Sending..." : "Send Application"}>{sending ? "Sending..." : "Send Application"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
