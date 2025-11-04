'use server';

import { connectToDatabase } from "@/lib/mongodb";
import Event, { IEvent } from "@/db/event.model";

/**
 * Server Action to fetch all events from the database
 * Runs entirely on the server – no network call needed
 */

// GET ALL
export async function getEvents() {
  try {
    await connectToDatabase();
    // const events = await Event.find({}).lean(); // old!
    const events = await Event.find({}).lean();

    return { success: true, events };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { success: false, error: "Internal Server Error" };
  }
}

// GET ONE
export async function getEventBySlug(slug: string): Promise<{
  success: boolean;
  event?: IEvent;
  error?: string;
}> {
  try {
    await connectToDatabase();

    // Input validation & sanitization
    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      return { success: false, error: "Invalid slug parameter" };
    }

    const sanitizedSlug = slug.toLowerCase().trim();

    // Query database (lean() for plain JS object)
    const event = (await Event.findOne({ slug: sanitizedSlug }).lean()) as IEvent | null;

    if (!event) {
      return { success: false, error: "Event not found" };
    }

    return { success: true, event };
  } catch (error) {
    console.error("Error fetching event by slug:", error);
    return { success: false, error: "Internal Server Error" };
  }
}

