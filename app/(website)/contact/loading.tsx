import { Container } from '@/components/shared';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ContactLoading() {
  return (
    <Container className="flex flex-col min-h-screen pt-10">
      {/* Hero Section Skeleton */}
      <section className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center">
        <Skeleton className="absolute inset-0 rounded-2xl" />
        <div className="relative z-10 text-white px-4 text-left w-full px-10">
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-8 w-96 mb-2" />
        </div>
      </section>

      {/* Contact Info + Form Skeleton */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4">
        {/* Contact Info Skeleton */}
        <Card className="bg-neutral-900">
          <CardContent className="p-6">
            <Skeleton className="h-7 w-48 mb-4" />
            <div className="space-y-4">
              <div>
                <Skeleton className="h-5 w-20 mb-2" />
                <Skeleton className="h-6 w-48" />
              </div>
              <div>
                <Skeleton className="h-5 w-20 mb-2" />
                <Skeleton className="h-6 w-48" />
              </div>
              <div>
                <Skeleton className="h-5 w-20 mb-2" />
                <Skeleton className="h-6 w-48" />
              </div>
              <div>
                <Skeleton className="h-5 w-20 mb-2" />
                <Skeleton className="h-6 w-48" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Skeleton */}
        <Card>
          <CardContent className="p-6">
            <Skeleton className="h-7 w-48 mb-4" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-10 w-32" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Schedule a Consultation Skeleton */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <Skeleton className="h-8 w-64 mx-auto mb-2" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <Skeleton className="h-[600px] w-full max-w-4xl mx-auto rounded-lg" />
      </section>
    </Container>
  );
}
