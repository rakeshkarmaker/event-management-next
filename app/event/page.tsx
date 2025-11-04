import EventCard from "@/components/EventCard";
import { IEvent } from "@/db/event.model";
import { connectToDatabase } from "@/lib/mongodb";
import Event from "@/db/event.model";
import { Suspense } from "react";

const sanitizeDoc = (doc: any) => {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : null,
    updatedAt: doc.updatedAt ? new Date(doc.updatedAt).toISOString() : null,
  };
};


export default async function Events() {
  await connectToDatabase();
  const eventsFromDb = await Event.find({}).lean();
  
  // Sanitize each event object to plain JS object
  const events = eventsFromDb.map(sanitizeDoc);

  return (
    
    <section>
      <h1 className="text-center">View All Events</h1>

      <div className="mt-20 space-y-7">

        <Suspense fallback={<div>Loading...</div>}>
          <ul className="events">
            {events && events.length > 0 && events.map((event) => (
              <li key={event.title} className="list-none">

                <EventCard {...event} />
                
              </li>
            ))}
          </ul>
          </Suspense>

      </div>
    </section>
  )

}