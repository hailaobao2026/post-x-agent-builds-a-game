// Entry program for the make.fun video-on-X bounty "The agent builds a game
// from one prompt" (Node 22, standard library only).
//
// The entry is the X post itself: a short video of an AI agent building the
// tiny browser game in game/index.html from one prompt, ending with make.fun's
// referral end card. This program only copies POST.json — the file that names
// the post — from the repository root to /output/POST.json, where the house
// reads it. Nothing this program writes about the post is scored.
//
// Local check (the way the grader runs it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
const postPath = join(BOT_DIR, "POST.json");
try {
  // Refuse a malformed POST.json instead of copying a file the gate cannot read.
  const parsed = JSON.parse(readFileSync(postPath, "utf8")) as unknown;
  if (typeof parsed !== "object" || parsed === null ||
      typeof (parsed as { url?: unknown }).url !== "string") {
    throw new Error("POST.json is not an object with a string url");
  }
  copyFileSync(postPath, join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
