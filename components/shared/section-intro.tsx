import { cn } from '@/lib/utils';
import { z } from '@zod/mini';
import React from 'react';

const SectionIntroSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  className: z.optional(z.string()),
});

export default function SectionIntro({ eyebrow, title, className }: z.infer<typeof SectionIntroSchema>) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center gap-4">
        <span className="text-primary text-lg tracking-wide">
          {eyebrow}
        </span>
        <div className="h-px bg-primary w-16"></div>
      </div>

      <h2 className="text-2xl lg:text-4xl max-w-xl font-semibold text-black leading-tight">
        {title}
      </h2>
    </div>
  );
}
