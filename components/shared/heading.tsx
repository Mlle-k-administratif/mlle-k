import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import { z } from '@zod/mini';
import { cn } from '@/lib/utils';

const HeadingSchema = z.object({
  title: z.optional(z.string()),
  className: z.optional(z.string()),
  eyebrow: z.optional(z.string()),
  children: z.optional(z.any()),
});

type HeadingProps = z.infer<typeof HeadingSchema>;

const HeadingWithShape: React.FC<HeadingProps> = (props) => {
  const { title } = HeadingSchema.parse(props);

  return (
    <div className="relative flex items-center gap-4 justify-center">
      <div className="w-32 h-32 relative hidden md:block">
        <Image
          src="/illustration/heading-shape-primary.svg"
          alt="Decorative shape"
          fill
          className="object-cover"
        />
      </div>

      <Image
        src="/illustration/heading-shape-primary.svg"
        alt="Decorative shape"
        width={50}
        height={50}
        className="absolute md:hidden top-0 left-0"
      />

      <h2 className="z-10 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold font-epilogue text-black max-w-2xl text-center leading-tight">
        {title}
      </h2>
    </div>
  );
};

const HeadingWithShapeAndEyebrow: React.FC<HeadingProps> = (props) => {
  const { title, eyebrow, className, children } = HeadingSchema.parse(props);

  return (
    <div className={cn('relative  h-full', className)}>
      {/* Desktop layout with absolute positioning */}
      <div className="hidden md:block absolute -top-4 -left-4 w-12 h-12">
        <Image
          src="/illustration/background-shape.svg"
          alt="Decorative shape"
          fill
          className="object-cover"
        />
      </div>
      <div className="border-none md:border-l-4 border-gradient h-full md:pl-16 pl-0">
        {/* Mobile layout with flex */}
        <div className="flex items-center space-x-3 mb-3 sm:mb-4 md:hidden">
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image
              src="/illustration/background-shape.svg"
              alt="Decorative shape"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-primary text-md font-semibold uppercase tracking-wide">
            {eyebrow}
          </span>
        </div>
        {/* Desktop eyebrow */}
        <span className="hidden md:block text-primary text-md font-semibold uppercase tracking-wide mb-3 sm:mb-4">
          {eyebrow}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-gray-900 mb-4 sm:mb-6 leading-tight max-w-4xl">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

const Heading: React.FC<HeadingProps> = (props) => {
  const { title, className } = HeadingSchema.parse(props);

  return (
    <h2
      className={cn(
        'z-10 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black max-w-2xl text-center leading-tight',
        className
      )}>
      {title}
    </h2>
  );
};

export { HeadingWithShape, HeadingWithShapeAndEyebrow, Heading };
