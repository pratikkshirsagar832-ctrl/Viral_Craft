"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Activity,
  Calendar,
  Download,
  Inbox,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import CustomCursor from "@/components/custom-cursor";

type Lead = {
  id: string;
  type: "lead" | "activity";
  kind?: string;
  name?: string;
  email?: string;
  phone?: string;
  brand?: string;
  service?: string;
  budget?: string;
  message?: string;
  page?: string;
  data?: Record<string, unknown>;
  createdAt: string;
};

const STORE_KEY = "vc-admin-key";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function LeadRow({ lead }: { lead: Lead }) {
  const rows: [string, string][] = [];
  if (lead.name) rows.push(["Name", lead.name]);
  if (lead.email) rows.push(["Email", lead.email]);
  if (lead.phone) rows.push(["Phone", lead.phone]);
  if (lead.brand) rows.push(["Brand", lead.brand]);
  if (lead.service) rows.push(["Service", lead.service]);
  if (lead.budget) rows.push(["Budget", lead.budget]);
  if (lead.message) rows.push(["Message", lead.message]);
  if (lead.page) rows.push(["Source", lead.page]);

  return (
    <div className="rounded-2xl glass-card-dark border border-white/10 p-5 flex flex-col gap-4 hover:border-[#FF5722]/50 transition-colors">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="w-9 h-9 rounded-xl bg-[#FF5722]/15 flex items-center justify-center shrink-0">
            <User className="w-4 h-4 text-[#FF5722]" />
          </span>
          <div className="min-w-0">
            <p className="font-bold text-white text-sm truncate">
              {lead.name || "—"}
            </p>
            <p className="text-[10px] text-white/50 font-mono">{lead.id.slice(0, 8)}</p>
          </div>
        </div>
        <span className="text-[10px] text-white/50 font-medium shrink-0">
          {formatDate(lead.createdAt)}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {rows.map(([k, v]) => (
          <div
            key={k}
            className="flex items-start gap-2 rounded-xl bg-white/5 border border-white/5 px-3 py-2 min-w-0"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5722] shrink-0 pt-0.5">
              {k}
            </span>
            <span className="text-xs text-white/80 break-words min-w-0">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [activities, setActivities] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [stats, setStats] = useState({ today: 0, week: 0 });

  const fetchData = useCallback(async (adminKey: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        headers: { "x-admin-key": adminKey },
      });
      if (!res.ok) throw new Error("unauthorized");
      const data = (await res.json()) as { leads: Lead[]; activities: Lead[] };
      setLeads(data.leads);
      setActivities(data.activities);
      const todayStr = new Date().toDateString();
      const weekAgo = Date.now() - 7 * 86400000;
      setStats({
        today: data.leads.filter(
          (l) => new Date(l.createdAt).toDateString() === todayStr,
        ).length,
        week: data.leads.filter(
          (l) => new Date(l.createdAt).getTime() >= weekAgo,
        ).length,
      });
      setAuthed(true);
    } catch {
      setError("Access denied — wrong password. Try again.");
      setAuthed(false);
      sessionStorage.removeItem(STORE_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = sessionStorage.getItem(STORE_KEY);
    if (saved) {
      const raf = requestAnimationFrame(() => {
        setKey(saved);
        fetchData(saved);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [fetchData]);

  const login = () => {
    sessionStorage.setItem(STORE_KEY, key);
    fetchData(key);
  };

  const logout = () => {
    sessionStorage.removeItem(STORE_KEY);
    setAuthed(false);
    setKey("");
  };

  const exportCsv = () => {
    const header = [
      "Type",
      "Kind",
      "Name",
      "Email",
      "Phone",
      "Brand",
      "Service",
      "Budget",
      "Message",
      "Page",
      "Created",
    ];
    const rows = [...leads, ...activities].map((l) =>
      [
        l.type,
        l.kind ?? "",
        l.name ?? "",
        l.email ?? "",
        l.phone ?? "",
        l.brand ?? "",
        l.service ?? "",
        l.budget ?? "",
        (l.message ?? "").replace(/[\r\n]+/g, " "),
        l.page ?? "",
        l.createdAt,
      ]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(","),
    );
    const blob = new Blob([[header.join(","), ...rows].join("\n")], {
      type: "text/csv",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `viralcraft-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const filtered = leads.filter((l) =>
    [l.name, l.email, l.phone, l.brand, l.service, l.budget, l.message, l.page]
      .filter(Boolean)
      .some((v) => String(v).toLowerCase().includes(search.toLowerCase())),
  );

  if (!authed) {
    return (
      <main className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 relative overflow-hidden">
        <CustomCursor />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5722]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-md relative z-10">
          <div className="rounded-3xl glass-card-dark border border-white/10 p-8 flex flex-col gap-6 text-center">
            <span className="mx-auto w-16 h-16 rounded-2xl bg-white p-1.5 shadow-xl">
              <img
                src="/logo.jpeg"
                alt="ViralCraft Media"
                className="w-full h-full object-contain"
              />
            </span>
            <div className="flex flex-col gap-1">
              <h1 className="font-heading font-bold text-2xl text-white flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#FF5722]" />
                Admin Panel
              </h1>
              <p className="text-sm text-white/60 font-body">
                Leads &amp; activity dashboard — authorized access only.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-left">
              <label className="text-xs font-bold uppercase tracking-widest text-white/50 font-heading">
                Admin Password
              </label>
              <div className="relative">
                <LockKeyhole className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="password"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && login()}
                  placeholder="Enter admin password"
                  className="w-full rounded-xl bg-white/10 border border-white/15 text-white text-sm px-10 py-3.5 outline-none focus:border-[#FF5722] transition-colors placeholder:text-white/30"
                />
              </div>
              {error && <p className="text-xs text-red-400">{error}</p>}
              <button
                type="button"
                onClick={login}
                disabled={!key || loading}
                className="orange-gradient-btn orange-glow text-white font-bold py-3.5 rounded-xl text-sm mt-1 transition-all hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Verifying..." : "Unlock Dashboard"}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F172A] text-white pb-16 relative overflow-hidden">
      <CustomCursor />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5722]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-white p-1.5 shadow-lg">
              <img
                src="/logo.jpeg"
                alt="ViralCraft Media"
                className="w-full h-full object-contain"
              />
            </span>
            <div>
              <h1 className="font-heading font-bold text-xl flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-[#FF5722]" />
                Admin Dashboard
              </h1>
              <p className="text-xs text-white/50 font-body">
                ViralCraft Media — leads &amp; website activity
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fetchData(key)}
              className="p-2.5 rounded-xl bg-white/10 border border-white/10 hover:border-[#FF5722]/50 transition-colors cursor-pointer"
              aria-label="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              type="button"
              onClick={exportCsv}
              className="p-2.5 rounded-xl bg-white/10 border border-white/10 hover:border-[#FF5722]/50 transition-colors cursor-pointer"
              aria-label="Export CSV"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={logout}
              className="p-2.5 rounded-xl bg-white/10 border border-white/10 hover:border-red-500/50 transition-colors cursor-pointer"
              aria-label="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6">
          {[
            { label: "Total Leads", value: leads.length, icon: Inbox, tint: "text-[#FF5722] bg-[#FF5722]/10" },
            { label: "Leads Today", value: stats.today, icon: Calendar, tint: "text-emerald-400 bg-emerald-400/10" },
            { label: "Leads (7 Days)", value: stats.week, icon: TrendingUp, tint: "text-amber-400 bg-amber-400/10" },
            { label: "Activities", value: activities.length, icon: Activity, tint: "text-sky-400 bg-sky-400/10" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl glass-card-dark border border-white/10 p-5 flex flex-col gap-3"
            >
              <span className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.tint}`}>
                <s.icon className="w-4 h-4" />
              </span>
              <span className="text-3xl font-bold font-heading">{s.value}</span>
              <span className="text-[11px] text-white/50 uppercase tracking-widest font-bold font-heading">
                {s.label}
              </span>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-3 py-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="font-heading font-bold text-lg flex items-center gap-2">
              <Inbox className="w-5 h-5 text-[#FF5722]" />
              Leads ({filtered.length})
            </h2>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, phone, brand, service..."
              className="w-full sm:w-80 rounded-xl bg-white/10 border border-white/15 text-white text-sm px-4 py-2.5 outline-none focus:border-[#FF5722] transition-colors placeholder:text-white/30"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.length === 0 ? (
              <div className="md:col-span-2 rounded-2xl glass-card-dark border border-white/10 p-10 text-center flex flex-col items-center gap-3">
                <Inbox className="w-10 h-10 text-white/20" />
                <p className="text-white/50 text-sm">
                  No leads yet. When visitors fill the contact form or booking
                  modal, they&apos;ll appear here instantly.
                </p>
              </div>
            ) : (
              filtered.map((l) => <LeadRow key={l.id} lead={l} />)
            )}
          </div>
        </section>

        <section className="flex flex-col gap-3 py-6">
          <h2 className="font-heading font-bold text-lg flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#FF5722]" />
            Website Activity ({activities.length})
          </h2>
          <div className="rounded-2xl glass-card-dark border border-white/10 divide-y divide-white/5">
            {activities.length === 0 && (
              <p className="p-6 text-white/50 text-sm text-center">
                No activity tracked yet.
              </p>
            )}
            {[...activities].reverse().map((a) => (
              <div key={a.id} className="p-4 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="w-8 h-8 rounded-xl bg-[#FF5722]/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-white/90 capitalize">
                      {String(a.kind ?? "event").replace(/_/g, " ")}
                    </p>
                    <p className="text-xs text-white/50 break-words">
                      {a.data ? JSON.stringify(a.data) : a.service || a.page || "—"}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-white/40 shrink-0">
                  {formatDate(a.createdAt)}
                </span>
              </div>
            ))}
          </div>
        </section>

        <footer className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ViralCraft Media Admin
          </p>
          <Link
            href="/"
            className="text-xs font-semibold text-[#FF5722] hover:underline"
          >
            ← Back to website
          </Link>
        </footer>
      </div>
    </main>
  );
}