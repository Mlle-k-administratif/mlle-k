'use client';

import { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { client } from '@/sanity/lib/client';

export default function CalendlyPopup({
  outline = false,
}: {
  outline?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [calendlyUrl, setCalendlyUrl] = useState<string | null>(null);

  const fetchCalendlyUrl = async () => {
    const data = await client.fetch(`*[_type == "information"][0]{
      calendlyUrl
    }`);
    setCalendlyUrl(data.calendlyUrl);
  };

  useEffect(() => {
    fetchCalendlyUrl();
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant={outline ? 'outline' : 'default'}>
          Réserver un appel
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-6xl w-full h-max p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-semibold text-gray-900 flex items-center justify-between">
            Réservez votre rendez-vous
          </DialogTitle>
        </DialogHeader>
        <InlineWidget
          url={calendlyUrl || ''}
          styles={{
            height: '600px',
            width: '100%',
          }}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '2563eb',
            textColor: '1f2937',
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
