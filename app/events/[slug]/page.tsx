import EventDetails from '@/components/EventDetails';
import { Suspense } from 'react'

const EventDetailsPage = ({ params }: { params: Promise<{slug: string}> }) => {
  const slug = params
  return (
    <Suspense fallback={<div>loading...</div>}>
      <EventDetails params={slug}/>
    </Suspense>
  )
}

export default EventDetailsPage;