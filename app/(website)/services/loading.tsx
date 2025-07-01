import { Container } from '@/components/shared';
import { Skeleton } from '@/components/ui/skeleton';

export default function ServicesLoading() {
  return (
    <main className="py-12 space-y-32">
      <Container className="flex flex-col-reverse md:grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        <div className="space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-full max-w-md" />
        </div>

        <Skeleton className="w-full aspect-square rounded-lg" />
      </Container>

      {[1, 2].map((index) => (
        <Container
          key={index}
          className="flex flex-col md:grid lg:grid-cols-2 gap-8 lg:gap-8 md:items-center">
          <div className="space-y-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-64" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[80vw]">
              {[1, 2, 3].map((cardIndex) => (
                <div key={cardIndex} className="space-y-4 p-4 border rounded-lg">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      ))}
    </main>
  );
}
