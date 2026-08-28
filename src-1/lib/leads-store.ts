import "server-only";

import { promises as fs } from "fs";
import os from "os";
import path from "path";
import { randomUUID } from "crypto";

export type Lead = {
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

let storageDir: string | null | undefined;
let memoryStore: Lead[] = [];
let writeChain: Promise<unknown> = Promise.resolve();

function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const next = writeChain.then(fn, fn);
  writeChain = next.catch(() => undefined);
  return next;
}

async function resolveDir(): Promise<string | null> {
  if (storageDir !== undefined) return storageDir;
  const candidates = [
    path.join(process.cwd(), "data"),
    path.join(os.tmpdir(), "viralcraft-data"),
  ];
  for (const dir of candidates) {
    try {
      await fs.mkdir(dir, { recursive: true });
      const probe = path.join(dir, `.probe-${Date.now()}`);
      await fs.writeFile(probe, "ok", "utf8");
      await fs.unlink(probe);
      storageDir = dir;
      return dir;
    } catch {
      continue;
    }
  }
  storageDir = null;
  return null;
}

async function readAll(): Promise<Lead[]> {
  const dir = await resolveDir();
  if (!dir) return memoryStore;
  try {
    const raw = await fs.readFile(path.join(dir, "leads.json"), "utf8");
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

async function writeAll(items: Lead[]) {
  const dir = await resolveDir();
  if (!dir) {
    memoryStore = items;
    return;
  }
  await fs.writeFile(path.join(dir, "leads.json"), JSON.stringify(items, null, 2), "utf8");
}

export async function addEntry(entry: Omit<Lead, "id" | "createdAt">): Promise<Lead> {
  return withLock(async () => {
    const items = await readAll();
    const item: Lead = {
      ...entry,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
    };
    items.push(item);
    await writeAll(items);
    return item;
  });
}

export async function getAllEntries(): Promise<Lead[]> {
  return withLock(async () => readAll());
}
