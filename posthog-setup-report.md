# PostHog post-wizard report
The wizard has completed a deep integration of your Next.js App Router project with PostHog analytics. The integration uses the modern `instrumentation-client.ts` approach (recommended for Next.js 15.3+) with a reverse proxy setup to improve tracking reliability and avoid ad blockers.

## Events Instrumented

| Event Name | Description | File |
|------------|-------------|------|
| `nav_link_clicked` | Tracks navigation link clicks with link name and href | `components/Navbar.tsx` |
| `event_card_clicked` | Tracks when users click on event cards with event details | `components/EventCard.tsx` |
| `explore_events_clicked` | Tracks clicks on the Explore Events button | `components/ExploreBtn.tsx` |
| `featured_events_viewed` | Tracks when users scroll to view the featured events section | `app/page.tsx` |

### Event Properties

**nav_link_clicked:**
- `link_name` - Name of the navigation link clicked
- `link_href` - Destination URL of the link

**event_card_clicked:**
- `event_title` - Title of the clicked event
- `event_slug` - URL slug of the event
- `event_location` - Location of the event

**featured_events_viewed:**
- `events_count` - Number of events displayed in the section

## Configuration Files

- **`instrumentation-client.ts`** - PostHog client initialization with exception capture and debug mode
- **`next.config.ts`** - Reverse proxy rewrites for PostHog ingestion
- **`.env.local`** - Environment variables for PostHog API key and host

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/292932/dashboard/1076306)

### Insights
- [Navigation Link Clicks](https://us.posthog.com/project/292932/insights/zuG9ro8Y) - Tracks navigation usage by link name
- [Event Card Clicks](https://us.posthog.com/project/292932/insights/5qfPKWp8) - Shows which events generate the most interest
- [Explore Events Button Clicks](https://us.posthog.com/project/292932/insights/Un8D4I9L) - Measures CTA engagement
- [Featured Events Section Views](https://us.posthog.com/project/292932/insights/Hn2c4mVo) - Tracks scroll depth and section visibility
- [Explore to Event Card Conversion](https://us.posthog.com/project/292932/insights/RaHthfiZ) - Conversion funnel from exploration to engagement

### Verify Integration

1. Run `npm run dev` to start the development server
2. Open http://localhost:3000
3. Open PostHog (https://us.i.posthog.com) and go to Activity > Live Events
4. Interact with the website and verify events appear in real-time

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
