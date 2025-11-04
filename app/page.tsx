import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/db/event.model";
import { cacheLife } from 'next/cache';
import { getEvents } from "./actions/eventsDB";


export default async function Home() {
  'use cache'; // Enable caching for this fetch operation (Constant data refetching is not logical for a homepage right!)
  cacheLife('hours'); // Cache for 1 hour
  const { success, events, error } = await getEvents();
  const plainEvents = events ? events.map(event => JSON.parse(JSON.stringify(event))) : [];
  

  if(!success){ return(
        <section>
      <h1 className="text-center">Welcome to the Event Management System</h1>
      <p className="text-center mt-5">Manage your events efficiently and effortlessly.</p>

      <ExploreBtn />
      
      <div className="h2 text-center text-red-800">Failed to load events: {error}</div>
    </section>

  )
  }

  if(!success){ return(
        <section>
      <h1 className="text-center">Welcome to the Event Management System</h1>
      <p className="text-center mt-5">Manage your events efficiently and effortlessly.</p>

      <ExploreBtn />
      
      <div className="h2 text-center text-red-800">No Events Found!</div>
    </section>

  )
  }
  return (
    <section>
      <h1 className="text-center">Welcome to the Event Management System</h1>
      <p className="text-center mt-5">Manage your events efficiently and effortlessly.</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3 className="text-center">Featured Events</h3>

        <ul className="events">
           {plainEvents.map(event => (
      <li key={event._id} className="list-none">
        <EventCard {...event} /> {/* completely plain object */}
      </li>
    ))}
        </ul>
      </div>
    </section>
  );
}
