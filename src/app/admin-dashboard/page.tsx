"use client";

import { useEffect, useMemo, useState } from "react";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  treatment: string;
  preferredDate: string | null;
  source: string | null;
  status: "new" | "contacted" | "scheduled" | "converted" | "lost";
  telecrmSynced: boolean;
  telecrmId?: string | null;
  telecrmError?: string | null;
  createdAt: string;
  updatedAt: string;
};

const statuses: Lead["status"][] = [
  "new",
  "contacted",
  "scheduled",
  "converted",
  "lost",
];

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [treatmentFilter, setTreatmentFilter] = useState("all");
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchLeads() {
    setLoading(true);
    setErrorMessage("");

    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set("search", search.trim());
      if (statusFilter !== "all") params.set("status", statusFilter);
      if (treatmentFilter !== "all") params.set("treatment", treatmentFilter);

      const response = await fetch(`/api/leads?${params.toString()}`, {
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to load leads");
      }

      setLeads(data.leads || []);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to load leads"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const treatmentOptions = useMemo(
    () => Array.from(new Set(leads.map((lead) => lead.treatment))).sort(),
    [leads]
  );

  const stats = useMemo(() => {
    return {
      total: leads.length,
      synced: leads.filter((lead) => lead.telecrmSynced).length,
      pending: leads.filter((lead) => !lead.telecrmSynced).length,
      newLeads: leads.filter((lead) => lead.status === "new").length,
    };
  }, [leads]);

  async function updateLeadStatus(leadId: string, status: Lead["status"]) {
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to update lead status");
      }

      setLeads((current) =>
        current.map((lead) =>
          lead.id === leadId ? { ...lead, status } : lead
        )
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to update lead status"
      );
    }
  }

  function formatLeadDate(dateString: string) {
    const date = new Date(dateString);

    return {
      date: date.toLocaleDateString("en-IN"),
      time: date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  }

  return (
    <main className="min-h-screen bg-slate-50 px-3 py-4 text-slate-900 sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-4 sm:space-y-6">
        <header className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Admin Dashboard
              </p>
              <h1 className="mt-2 font-headline text-2xl font-black text-slate-900 sm:text-3xl">
                Physio Shine Leads
              </h1>
              {/* <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Manage booking requests coming from the current homepage form and
                track whether each lead synced to TeleCRM.
              </p> */}
            </div>
            <button
              type="button"
              onClick={fetchLeads}
              className="btn-premium w-full rounded-full bg-primary px-6 py-3 text-sm font-bold text-white sm:w-auto"
            >
              {loading ? "Refreshing..." : "Refresh Leads"}
            </button>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Total Leads", value: stats.total, tone: "text-slate-900" },
            { label: "New Leads", value: stats.newLeads, tone: "text-primary" },
            { label: "TeleCRM Synced", value: stats.synced, tone: "text-emerald-600" },
            { label: "Sync Pending", value: stats.pending, tone: "text-amber-600" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-5"
            >
              <p className="text-xs font-semibold text-slate-500 sm:text-sm">{stat.label}</p>
              <p className={`mt-2 text-2xl font-black sm:mt-3 sm:text-3xl ${stat.tone}`}>{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-5">
          <div className="grid grid-cols-1 gap-3 min-[900px]:hidden">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, phone, email, or treatment"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="all">All statuses</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-700">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </span>
            </div>
            <div className="relative">
              <select
                value={treatmentFilter}
                onChange={(event) => setTreatmentFilter(event.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="all">All treatments</option>
                {treatmentOptions.map((treatment) => (
                  <option key={treatment} value={treatment}>
                    {treatment}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-700">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </span>
            </div>
            <button
              type="button"
              onClick={fetchLeads}
              className="btn-premium rounded-xl bg-secondary-fixed px-5 py-3 text-sm font-bold text-on-secondary-fixed"
            >
              Apply Filters
            </button>
          </div>

          <div className="hidden min-[900px]:grid min-[900px]:grid-cols-4 min-[900px]:items-center min-[900px]:gap-3">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, phone, email, or treatment"
              className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="all">All statuses</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-700">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </span>
            </div>
            <div className="relative">
              <select
                value={treatmentFilter}
                onChange={(event) => setTreatmentFilter(event.target.value)}
                className="w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="all">All treatments</option>
                {treatmentOptions.map((treatment) => (
                  <option key={treatment} value={treatment}>
                    {treatment}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-700">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </span>
            </div>
            <button
              type="button"
              onClick={fetchLeads}
              className="btn-premium w-full justify-center whitespace-nowrap rounded-xl bg-secondary-fixed px-5 py-3 text-sm font-bold text-on-secondary-fixed"
            >
              Apply Filters
            </button>
          </div>
          {errorMessage ? (
            <p className="mt-4 text-sm font-medium text-error">{errorMessage}</p>
          ) : null}
        </section>

        <section className="space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:hidden">
            {loading ? (
              <div className="rounded-3xl bg-white px-4 py-10 text-center text-slate-500 shadow-sm ring-1 ring-slate-200">
                Loading leads...
              </div>
            ) : leads.length === 0 ? (
              <div className="rounded-3xl bg-white px-4 py-10 text-center text-slate-500 shadow-sm ring-1 ring-slate-200">
                No leads found.
              </div>
            ) : (
              leads.map((lead) => {
                const formatted = formatLeadDate(lead.createdAt);

                return (
                  <article
                    key={lead.id}
                    className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-base font-black text-slate-900">
                          {lead.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {lead.source || "website"}
                        </p>
                      </div>
                      <p
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                          lead.telecrmSynced
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {lead.telecrmSynced ? "Synced" : "Pending"}
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Contact
                        </p>
                        <p className="mt-1 font-medium text-slate-800">{lead.phone}</p>
                        <p className="mt-1 break-all text-xs text-slate-500">
                          {lead.email || "No email provided"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Treatment
                        </p>
                        <p className="mt-1 font-medium text-slate-800">{lead.treatment}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Preferred Date
                        </p>
                        <p className="mt-1 text-slate-700">
                          {lead.preferredDate || "Not selected"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Created
                        </p>
                        <p className="mt-1 text-slate-700">{formatted.date}</p>
                        <p className="mt-1 text-xs text-slate-500">{formatted.time}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr),auto] sm:items-end">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Status
                        </p>
                        <select
                          value={lead.status}
                          onChange={(event) =>
                            updateLeadStatus(
                              lead.id,
                              event.target.value as Lead["status"]
                            )
                          }
                          className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </div>
                      {lead.telecrmError ? (
                        <p className="text-xs text-red-600 sm:max-w-[16rem]">
                          {lead.telecrmError}
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              })
            )}
          </div>

          <div className="hidden overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 lg:block">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {[
                    "Lead",
                    "Contact",
                    "Treatment",
                    "Preferred Date",
                    "Status",
                    "TeleCRM",
                    "Created",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-4 py-3 font-bold uppercase tracking-wide text-slate-500"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
                      Loading leads...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => {
                    const formatted = formatLeadDate(lead.createdAt);

                    return (
                    <tr key={lead.id} className="align-top">
                      <td className="px-4 py-4">
                        <p className="font-bold text-slate-900">{lead.name}</p>
                        <p className="mt-1 text-xs text-slate-500">{lead.source || "website"}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p>{lead.phone}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {lead.email || "No email provided"}
                        </p>
                      </td>
                      <td className="px-4 py-4 font-medium text-slate-700">
                        {lead.treatment}
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        {lead.preferredDate || "Not selected"}
                      </td>
                      <td className="px-4 py-4">
                        <select
                          value={lead.status}
                          onChange={(event) =>
                            updateLeadStatus(
                              lead.id,
                              event.target.value as Lead["status"]
                            )
                          }
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4">
                        <p
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                            lead.telecrmSynced
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {lead.telecrmSynced ? "Synced" : "Pending"}
                        </p>
                        {lead.telecrmError ? (
                          <p className="mt-2 max-w-[16rem] text-xs text-red-600">
                            {lead.telecrmError}
                          </p>
                        ) : null}
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        {formatted.date}
                        <p className="mt-1 text-xs text-slate-500">
                          {formatted.time}
                        </p>
                      </td>
                    </tr>
                  )})
                )}
              </tbody>
            </table>
          </div>
          </div>
        </section>
      </div>
    </main>
  );
}
