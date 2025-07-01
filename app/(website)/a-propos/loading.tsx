import { Container } from '@/components/shared';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className="py-12 space-y-32">
      <Container className="flex flex-col-reverse md:grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        <div className="md:col-span-1 md:row-span-1 space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-64" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        <Skeleton className="md:col-start-2 md:col-span-3 h-[400px] w-full rounded-lg" />
      </Container>

      <Container className="flex flex-col md:grid lg:grid-cols-2 gap-8 lg:gap-8 md:items-center">
        <div className="md:col-span-1 md:row-span-1 space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-64" />
          <div className="space-y-2 hidden md:block">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        <Skeleton className="md:col-start-2 md:col-span-3 h-[400px] w-full rounded-lg" />
        <div className="space-y-2 md:hidden">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </Container>

      <Container className="flex flex-col md:grid lg:grid-cols-2 gap-8 lg:gap-8 md:items-center">
        <div className="md:col-span-1 md:row-span-1 space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-64" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[80vw]">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4 p-6 border rounded-lg">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="flex flex-col md:grid lg:grid-cols-2 gap-8 lg:gap-8 md:items-center">
        <div className="md:col-span-1 md:row-span-1 space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-64" />
          <ul className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="grid grid-cols-[20px_1fr] gap-1.5 items-start">
                <Skeleton className="w-4 h-4 rounded-full" />
                <div className="space-y-4">
                  <div className="flex flex-col-reverse md:flex-row items-baseline gap-36">
                    <div className="space-y-1">
                      <Skeleton className="h-6 w-48" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-4 w-[60vw]" />
                  <Skeleton className="h-4 w-[60vw]" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container>
        <Skeleton className="h-[600px] w-full rounded-lg" />
      </Container>
    </main>
  );
}
