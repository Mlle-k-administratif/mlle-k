import { Container } from '@/components/shared';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main role="main">
      {/* Hero Section Skeleton */}
      <section className="min-h-[60vh] bg-white">
        <section className="relative h-[70vh] flex items-center">
          <div className="absolute inset-0 bg-gray-100" />
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <Skeleton className="h-16 w-3/4 mb-6" />
            <Skeleton className="h-8 w-1/2 mb-8" />
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </section>
      </section>

      <Container className="py-16 space-y-16 relative">
        {/* About Section Skeleton */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          <Skeleton className="w-[90%] h-[400px] rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-48 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-8" />
            <Skeleton className="h-12 w-48" />
          </div>
        </section>

        {/* Services Section Skeleton */}
        <section className="space-y-16 relative z-10">
          <Skeleton className="h-12 w-3/4 mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* Testimonials Section Skeleton */}
      <Container className="md:py-16 space-y-16 px-0 py-0">
        <div className="space-y-4 bg-muted p-10 md:rounded-4xl">
          <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Calendly Block Skeleton */}
      <div className="py-16">
        <Skeleton className="h-[400px] w-full" />
      </div>
    </main>
  );
}
