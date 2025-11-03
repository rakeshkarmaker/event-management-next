// app/event/[slug]/page.tsx

import EventDetails from "@/components/EventDetails";

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params; // ✅ fix: unwrapping the promise

  return (
    <main>
      <EventDetails slug={slug} />
    </main>
  );
};

export default EventDetailsPage;
