'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const CalEmbed = dynamic(() => import("@calcom/embed-react").then((mod) => mod.default), {
  ssr: false,
})

interface CalendarBookingProps {
  calLink: string;
}

export function CalendarBooking({ calLink }: CalendarBookingProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    (async function () {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  if (!isMounted) {
    return null;
  }

  return <CalEmbed calLink={calLink} style={{width:"100%",height:"100%",overflow:"scroll"}} />;
}

