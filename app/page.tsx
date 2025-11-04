import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/db/event.model";
import { cacheLife } from 'next/cache';
import events from "@/lib/constants"

// Base URL for API requests
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';


export default async function Home() {
  // Fetch operation for events from the API
  'use cache'; // Enable caching for this fetch operation (Constant data refetching is not logical for a homepage right!)
  cacheLife('hours'); // Cache for 1 hour
  // const response = await fetch(`${BASE_URL}/api/events`, { next: { revalidate: 3600 } }); // Revalidate every hour! This means the data will be fresh within an hour.
  // const {events} = await response.json(); // Parse the JSON response
  
  // const events: Event[] = data.events; // Extract events array from the response

  return (
    <section>
      <h1 className="text-center">Welcome to the Event Management System</h1>
      <p className="text-center mt-5">Manage your events efficiently and effortlessly.</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3 className="text-center">Featured Events</h3>

        <ul className="events">
          {events && events.length > 0 && events.map((event) => ( // Type assertion to IEvent, why? Because fetched data is of type any by default.
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
