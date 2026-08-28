export function track(type: "activity" | "lead", payload: Record<string, unknown>) {
  try {
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, ...payload }),
    }).catch(() => {});
  } catch {
    // tracking must never break the UI
  }
}
