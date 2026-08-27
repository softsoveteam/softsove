export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export type Job = {
  id: number;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  short_intro: string;
  description: string;
  requirements: string;
  experience_badge: string;
  ask_experience: boolean;
  is_open: boolean;
};

export type Application = {
  id: number;
  job_id: number;
  job_title: string;
  job_slug: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  experience_years: string;
  cv_filename: string;
  created_at?: string;
};

export type JobWrite = {
  title: string;
  slug?: string;
  department: string;
  location: string;
  employment_type: string;
  short_intro: string;
  description: string;
  requirements: string;
  experience_badge: string;
  ask_experience: boolean;
  is_open: boolean;
};

function detailMessage(payload: unknown, fallback: string) {
  if (payload && typeof payload === "object") {
    const data = payload as { message?: string; detail?: unknown };
    if (typeof data.message === "string") return data.message;
    if (typeof data.detail === "string") return data.detail;
    if (Array.isArray(data.detail) && data.detail[0]?.msg) return String(data.detail[0].msg);
  }
  return fallback;
}

export async function apiGet<T>(path: string, token?: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    cache: "no-store",
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(detailMessage(payload, "Request failed."));
  }
  return payload as T;
}

export async function apiSend<T>(
  path: string,
  options: { method?: string; token?: string; json?: unknown; form?: FormData },
): Promise<T> {
  const headers: Record<string, string> = {};
  if (options.token) headers.Authorization = `Bearer ${options.token}`;
  if (options.json) headers["Content-Type"] = "application/json";

  const response = await fetch(`${API_URL}${path}`, {
    method: options.method || "POST",
    headers,
    body: options.form ? options.form : options.json ? JSON.stringify(options.json) : undefined,
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(detailMessage(payload, "Request failed."));
  }
  return payload as T;
}
