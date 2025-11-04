// lib/events.ts
import Event from "@/db/event.model";
import { connectToDatabase } from "@/lib/mongodb";
import { cacheLife } from "next/cache";

export async function getEvents() {
  'use cache';       // Next.js 16 cache directive
  cacheLife('hours'); // cache for 1 hour
  await connectToDatabase();
  return Event.find({}).lean();
}
