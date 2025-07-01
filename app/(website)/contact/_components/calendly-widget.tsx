'use client'

import { InlineWidget } from 'react-calendly'

export default function CalendlyWidget({ url }: { url: string }) {
  return (
    <InlineWidget
    url={url}
    pageSettings={{
      hideEventTypeDetails: true,
      hideGdprBanner: true,

    }}
    className="w-full max-w-3xl mx-auto h-[700px] "
  />
  )
}
