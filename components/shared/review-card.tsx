import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Separator } from '../ui/separator';
import { z } from '@zod/mini';
import { SanityImageAsset } from '@/sanity.types';
import { urlForImage } from '@/sanity/lib/image';

const ReviewSchema = z.object({
  rating: z.number(),
  title: z.string(),
  description: z.string(),
  authorName: z.string(),
  authorRole: z.string(),
  authorImage: z.optional(z.custom<SanityImageAsset>()),
});

type ReviewCardProps = z.infer<typeof ReviewSchema>;

export default function ReviewCard(props: ReviewCardProps) {
  const { rating, title, description, authorName, authorRole, authorImage } =
    ReviewSchema.parse(props);
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        {/* Stars */}
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <CardTitle className="text-xl font-bold">"{title}"</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-base font-dm-sans">
          {description}
        </CardDescription>
      </CardContent>

      <div className="mx-4">
        <Separator className="my-4 mt-8" />
        <div className="flex items-center gap-4">
          {authorImage && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={urlForImage(authorImage)}
                alt={authorName}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-medium">{authorName}</h4>
            <p className="text-sm text-muted-foreground font-dm-sans">
              {authorRole}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
