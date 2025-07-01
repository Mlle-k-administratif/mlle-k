import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { z } from '@zod/mini';
import { urlForImage } from '@/sanity/lib/image';
import { cn } from '@/lib/utils';

const CustomCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.optional(
    z.object({
      asset: z.object({
        _ref: z.string(),
        _type: z.string(),
      }),
    })
  ),
  className: z.optional(z.string()),
});

type CustomCardProps = z.infer<typeof CustomCardSchema>;

export default function CustomCard({
  title,
  description,
  icon,
  className,
}: CustomCardProps) {
  return (
    <Card className={cn('w-full max-w-md h-full drop-shadow-md', className)}>
      <CardHeader className="space-y-4">
        {icon && (
          <Image
            src={urlForImage(icon)}
            alt={`Custom Card ${title}`}
            width={40}
            height={40}
          />
        )}

        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
