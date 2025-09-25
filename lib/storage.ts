import { promises as fs } from "fs"

// On Vercel/serverless, we can only write to /tmp (ephemeral storage).
// This resets on every new deployment, but works fine for a demo dashboard.
const TMP_DIR = "/tmp"

async function ensureFile(path: string, defaultData: any) {
  try {
    await fs.access(path)
  } catch {
    await fs.writeFile(path, JSON.stringify(defaultData, null, 2), "utf-8")
  }
}

export async function readJson<T>(filename: string, fallback: T): Promise<T> {
  const path = `${TMP_DIR}/${filename}`
  await ensureFile(path, fallback)
  const raw = await fs.readFile(path, "utf-8")
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export async function writeJson<T>(filename: string, data: T): Promise<void> {
  const path = `${TMP_DIR}/${filename}`
  await fs.writeFile(path, JSON.stringify(data, null, 2), "utf-8")
}
