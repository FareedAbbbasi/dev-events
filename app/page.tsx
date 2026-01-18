'use client';

import { useRef, useEffect } from "react";
import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import events from "@/lib/constants";
import posthog from "posthog-js";

const Home = () => {
    const featuredEventsRef = useRef<HTMLDivElement>(null);
    const hasTrackedView = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTrackedView.current) {
                        hasTrackedView.current = true;
                        posthog.capture('featured_events_viewed', {
                            events_count: events.length,
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (featuredEventsRef.current) {
            observer.observe(featuredEventsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section>
            <h1 className="text-center">The Hub for Every Dev <br /> Event You Can&apos;t Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

            <ExploreBtn />

            <div ref={featuredEventsRef} id="events" className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events.map((event) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
}

export default Home;