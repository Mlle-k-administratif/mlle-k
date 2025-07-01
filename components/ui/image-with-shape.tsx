import { z } from '@zod/mini';
import React from 'react';

const ImageWithShapeSchema = z.object({
  src: z.string(),
  backgroundImage: z.optional(z.string()),
  className: z.optional(z.string()),
  withoutBackground: z.optional(z.boolean()),
});

type ImageWithShapeProps = z.infer<typeof ImageWithShapeSchema>;

export function ImageWithShape(props: ImageWithShapeProps) {
  const { src, className } = ImageWithShapeSchema.parse(props);

  return (
    <div
      className={`relative w-full h-full aspect-[323/312] md:aspect-[523/512] ml-auto ${className}`}>
      {/* Background shape */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: 'url("/illustration/yellow-shape.svg")',
        }}
      />
      <div className="relative w-full h-full">
        {/* The shape mask */}
        <div
          className="absolute inset-0 md:top-10 md:-left-12 w-[95%] h-[95%] bg-cover bg-center z-10"
          style={{
            backgroundImage: `url(${src})`,
            WebkitMaskImage: 'url("/illustration/background-shape.svg")',
            maskImage: 'url("/illustration/background-shape.svg")',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        />

        {/* Blue overlay shape */}
        <div
          className="absolute z-20 bg-[url('/illustration/shape-primary.svg')] bg-contain bg-no-repeat md:-left-1/12 md:top-2/6 left-0 top-26"
          style={{
            width: '18%',
            height: '17%',
          }}
        />
      </div>
    </div>
  );
}

export function ImageWithShape2(props: ImageWithShapeProps) {
  const { src, className, withoutBackground } =
    ImageWithShapeSchema.parse(props);

  return (
    <div
      className={`relative w-[80%] h-full aspect-[123/112] md:aspect-[223/212] ml-auto ${className}`}>
      {/* Background shape */}

      <div className="relative w-full h-full">
        {/* The shape mask */}
        <div
          className="absolute inset-0 md:top-10 md:-left-12 w-[90%] h-[90%] bg-cover bg-center z-10"
          style={{
            backgroundImage: `url(${src})`,
            WebkitMaskImage: 'url("/illustration/background-shape.svg")',
            maskImage: 'url("/illustration/background-shape.svg")',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        />

        {/* Blue overlay shape */}
        <div
          className="absolute z-20 bg-[url('/illustration/background-shape.svg')] bg-contain bg-no-repeat md:right-2/3 md:top-1/12 right-2/4 -top-4"
          style={{
            width: '25%',
            height: '25%',
          }}
        />
        {!withoutBackground && (
          <>
            <div
              className="absolute z-20 bg-[url('/illustration/linear-shape.svg')] bg-contain bg-no-repeat md:right-1/2 md:bottom-1/6 right-2/4 bottom-1/12"
              style={{
                width: '18%',
                height: '18%',
              }}
            />
            <div
              className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-contain"
              style={{
                backgroundImage: 'url("/illustration/yellow-shape.svg")',
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
