"use client";

import { FormEvent, useEffect, useState } from "react";
import { API_URL, apiGet, apiSend, type Application, type Job, type JobWrite } from "@/lib/api";

const EMPTY: JobWrite = {
  title: "",
  slug: "",
  department: "",
  location: "",
  employment_type: "Full-time",
  short_intro: "",
  description: "",
  requirements: "",
  experience_badge: "",
  ask_experience: false,
  is_open: true,
};

const TOKEN_KEY = "softsove-admin-token";

export function AdminDesk() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [apps, setApps] = useState<Application[]>([]);
  const [form, setForm] = useState<JobWrite>(EMPTY);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [notice, setNotice] = useState("");
  const [tab, setTab] = useState<"roles" | "inbox">("roles");

  useEffect(() => {
    const saved = window.sessionStorage.getItem(TOKEN_KEY) || "";
    if (saved) setToken(saved);
  }, []);

  useEffect(() => {
    if (!token) return;
    refresh(token).catch(() => {
      setToken("");
      window.sessionStorage.removeItem(TOKEN_KEY);
    });
  }, [token]);

  async function refresh(auth = token) {
    const [nextJobs, nextApps] = await Promise.all([
      apiGet<Job[]>("/admin/jobs", auth),
      apiGet<Application[]>("/admin/applications", auth),
    ]);
    setJobs(nextJobs);
    setApps(nextApps);
  }

  async function login(event: FormEvent) {
    event.preventDefault();
    setNotice("");
    try {
      const result = await apiSend<{ token: string }>("/admin/login", {
        json: { password },
      });
      window.sessionStorage.setItem(TOKEN_KEY, result.token);
      setToken(result.token);
      setPassword("");
    } catch (err) {
      setNotice(err instanceof Error ? err.message : "Login failed.");
    }
  }

  function startEdit(job: Job) {
    setEditingId(job.id);
    setForm({
      title: job.title,
      slug: job.slug,
      department: job.department,
      location: job.location,
      employment_type: job.employment_type,
      short_intro: job.short_intro,
      description: job.description,
      requirements: job.requirements,
      experience_badge: job.experience_badge,
      ask_experience: job.ask_experience,
      is_open: job.is_open,
    });
    setTab("roles");
  }

  async function saveJob(event: FormEvent) {
    event.preventDefault();
    setNotice("");
    try {
      if (editingId) {
        await apiSend(`/admin/jobs/${editingId}`, { method: "PATCH", token, json: form });
      } else {
        await apiSend("/admin/jobs", { token, json: form });
      }
      setForm(EMPTY);
      setEditingId(null);
      await refresh();
      setNotice("Role saved.");
    } catch (err) {
      setNotice(err instanceof Error ? err.message : "Could not save role.");
    }
  }

  async function closeOrOpen(job: Job) {
    await apiSend(`/admin/jobs/${job.id}`, {
      method: "PATCH",
      token,
      json: { is_open: !job.is_open },
    });
    await refresh();
  }

  async function removeJob(job: Job) {
    if (!window.confirm(`Delete ${job.title}? Applications go with it.`)) return;
    await apiSend(`/admin/jobs/${job.id}`, { method: "DELETE", token });
    if (editingId === job.id) {
      setEditingId(null);
      setForm(EMPTY);
    }
    await refresh();
  }

  async function downloadCv(app: Application) {
    const response = await fetch(`${API_URL}/admin/applications/${app.id}/cv`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      setNotice("Could not download that CV.");
      return;
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = app.cv_filename || "cv.pdf";
    link.click();
    URL.revokeObjectURL(url);
  }

  if (!token) {
    return (
      <form className="tt-form tt-form-lg tt-form-creative max-width-700" onSubmit={login}>
        <div className="tt-form-group">
          <label htmlFor="desk-pass">
            Password <span className="required">*</span>
          </label>
          <input
            className="tt-form-control"
            id="desk-pass"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        {notice ? <p className="margin-bottom-30">{notice}</p> : null}
        <button type="submit" className="tt-btn tt-btn-secondary">
          <span data-hover="Open the desk">Open the desk</span>
        </button>
      </form>
    );
  }

  return (
    <div>
      <div className="margin-bottom-40">
        <a
          href="#roles"
          className="tt-btn tt-btn-secondary margin-right-20"
          onClick={(event) => {
            event.preventDefault();
            setTab("roles");
          }}
        >
          <span data-hover="Open roles">Open roles</span>
        </a>
        <a
          href="#inbox"
          className="tt-btn tt-btn-secondary"
          onClick={(event) => {
            event.preventDefault();
            setTab("inbox");
          }}
        >
          <span data-hover="Applications">Applications</span>
        </a>
      </div>

      {notice ? <p className="margin-bottom-30">{notice}</p> : null}

      {tab === "roles" ? (
        <div className="tt-row">
          <div className="tt-col-xl-5">
            <div className="tt-heading tt-heading-sm margin-bottom-30">
              <h2 className="tt-heading-title">{editingId ? "Edit this desk" : "Add a position"}</h2>
            </div>
            <form className="tt-form tt-form-creative" onSubmit={saveJob}>
              <div className="tt-form-group">
                <label htmlFor="job-title">
                  Title <span className="required">*</span>
                </label>
                <input
                  className="tt-form-control"
                  id="job-title"
                  value={form.title}
                  onChange={(event) => setForm({ ...form, title: event.target.value })}
                  required
                />
              </div>
              <div className="tt-form-group">
                <label htmlFor="job-slug">Slug</label>
                <input
                  className="tt-form-control"
                  id="job-slug"
                  value={form.slug}
                  onChange={(event) => setForm({ ...form, slug: event.target.value })}
                  placeholder="auto from title"
                />
              </div>
              <div className="tt-form-group">
                <label htmlFor="job-dept">Department</label>
                <input
                  className="tt-form-control"
                  id="job-dept"
                  value={form.department}
                  onChange={(event) => setForm({ ...form, department: event.target.value })}
                />
              </div>
              <div className="tt-form-group">
                <label htmlFor="job-loc">Location</label>
                <input
                  className="tt-form-control"
                  id="job-loc"
                  value={form.location}
                  onChange={(event) => setForm({ ...form, location: event.target.value })}
                />
              </div>
              <div className="tt-form-group">
                <label htmlFor="job-type">Employment type</label>
                <select
                  className="tt-form-control"
                  id="job-type"
                  value={form.employment_type}
                  onChange={(event) => setForm({ ...form, employment_type: event.target.value })}
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
              <div className="tt-form-group">
                <label htmlFor="job-badge">Experience badge</label>
                <input
                  className="tt-form-control"
                  id="job-badge"
                  value={form.experience_badge}
                  onChange={(event) => setForm({ ...form, experience_badge: event.target.value })}
                  placeholder="2+ years"
                />
              </div>
              <div className="tt-form-check margin-bottom-20">
                <input
                  type="checkbox"
                  id="job-ask-exp"
                  checked={form.ask_experience}
                  onChange={(event) => setForm({ ...form, ask_experience: event.target.checked })}
                />
                <label htmlFor="job-ask-exp">Ask years of experience on the apply form</label>
              </div>
              <div className="tt-form-check margin-bottom-20">
                <input
                  type="checkbox"
                  id="job-open"
                  checked={form.is_open}
                  onChange={(event) => setForm({ ...form, is_open: event.target.checked })}
                />
                <label htmlFor="job-open">Position is available</label>
              </div>
              <div className="tt-form-group">
                <label htmlFor="job-intro">Short intro</label>
                <input
                  className="tt-form-control"
                  id="job-intro"
                  value={form.short_intro}
                  onChange={(event) => setForm({ ...form, short_intro: event.target.value })}
                />
              </div>
              <div className="tt-form-group">
                <label htmlFor="job-desc">Description</label>
                <textarea
                  className="tt-form-control"
                  id="job-desc"
                  rows={4}
                  value={form.description}
                  onChange={(event) => setForm({ ...form, description: event.target.value })}
                />
              </div>
              <div className="tt-form-group">
                <label htmlFor="job-req">Requirements</label>
                <textarea
                  className="tt-form-control"
                  id="job-req"
                  rows={4}
                  value={form.requirements}
                  onChange={(event) => setForm({ ...form, requirements: event.target.value })}
                />
              </div>
              <button type="submit" className="tt-btn tt-btn-secondary tt-btn-full">
                <span data-hover={editingId ? "Update role" : "Add position"}>{editingId ? "Update role" : "Add position"}</span>
              </button>
              {editingId ? (
                <button
                  type="button"
                  className="tt-btn tt-btn-full margin-top-20"
                  onClick={() => {
                    setEditingId(null);
                    setForm(EMPTY);
                  }}
                >
                  <span data-hover="Cancel edit">Cancel edit</span>
                </button>
              ) : null}
            </form>
          </div>

          <div className="tt-col-xl-7">
            <div className="tt-heading tt-heading-sm margin-bottom-30">
              <h2 className="tt-heading-title">Positions</h2>
            </div>
            {jobs.map((job) => (
              <div key={job.id} className="tt-contact-info tt-ci-boxed margin-bottom-30">
                <div className="tt-contact-info-inner">
                  {job.experience_badge ? <span className="tt-job-badge tt-job-badge-inline">{job.experience_badge}</span> : null}
                  <h3>{job.title}</h3>
                  <p>
                    {job.department} · {job.location} · {job.employment_type} · {job.is_open ? "Open" : "Closed"}
                    {job.ask_experience ? " · Asks experience" : ""}
                  </p>
                  <a
                    href="#edit"
                    className="tt-link margin-right-20"
                    onClick={(event) => {
                      event.preventDefault();
                      startEdit(job);
                    }}
                  >
                    Edit
                  </a>
                  <a
                    href="#toggle"
                    className="tt-link margin-right-20"
                    onClick={(event) => {
                      event.preventDefault();
                      void closeOrOpen(job);
                    }}
                  >
                    {job.is_open ? "Close" : "Reopen"}
                  </a>
                  <a
                    href="#delete"
                    className="tt-link"
                    onClick={(event) => {
                      event.preventDefault();
                      void removeJob(job);
                    }}
                  >
                    Delete
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="tt-heading tt-heading-sm margin-bottom-30">
            <h2 className="tt-heading-title">Applications</h2>
          </div>
          {!apps.length ? <p>No applications yet.</p> : null}
          {apps.map((app) => (
            <div key={app.id} className="tt-contact-info tt-ci-boxed margin-bottom-30">
              <div className="tt-contact-info-inner">
                <h3>
                  {app.name} → {app.job_title}
                </h3>
                <ul className="tt-list">
                  <li>
                    <a href={`mailto:${app.email}`} className="tt-link">
                      {app.email}
                    </a>
                  </li>
                  {app.phone ? <li>{app.phone}</li> : null}
                  {app.experience_years ? <li>Experience: {app.experience_years} years</li> : null}
                  {app.message ? <li>{app.message}</li> : null}
                  <li>
                    <a
                      href="#cv"
                      className="tt-link"
                      onClick={(event) => {
                        event.preventDefault();
                        void downloadCv(app);
                      }}
                    >
                      Download {app.cv_filename}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
