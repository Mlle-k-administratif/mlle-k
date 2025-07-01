'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full space-y-8 p-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Une erreur est survenue</AlertTitle>
          <AlertDescription className="space-y-2">
            <p>Désolé, quelque chose s'est mal passé. Veuillez réessayer.</p>
            <div className="mt-2 text-sm">
              <p className="font-medium">Message d'erreur :</p>
              <p className="text-muted-foreground">{error.message}</p>
            </div>
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <Button onClick={() => reset()} className="w-full" variant="default">
            Réessayer
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
