import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { sanityFetch } from '@/sanity/lib/live';
import { urlForImage } from '@/sanity/lib/image';
import { getHomeSEO, generateMetadata as generateSEOMetadata } from '@/sanity/lib/seo';
import type { Home, Testimonial, SanityImageAsset } from '@/sanity.types';

import {
  CalendlyPopup,
  Container,
  SectionIntro,
  HeadingWithShape,
  CustomCard,
  Heading,
  ReviewCard,
  CalendlyBlock,
} from '@/components/shared';
import {
  Button,
  ImageWithShape,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animation';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getHomeSEO();
  
  return generateSEOMetadata(
    seoData,
    'MlleK - Accueil',
    'Découvrez MlleK, votre partenaire de confiance pour la création de sites web et applications sur mesure. Expert en développement web, design UX/UI et solutions digitales innovantes pour propulser votre présence en ligne.'
  );
}

type ServiceCard = {
  _key: string;
  title: string;
  description: string;
  icon: { asset: { _ref: string; _type: string } };
};

type TestimonialWithAsset = Omit<Testimonial, 'authorImage'> & {
  authorImage?: {
    asset: SanityImageAsset;
    _type: 'image';
  };
};

export default async function Home() {
  const { data } = await sanityFetch({
    query: `*[_type == "home"]{
      ...,
      "testimonials": {
        ...testimonials,
        "reviews": testimonials.reviews[]->{
          ...,
          authorImage{
            ...,
            asset->
          }
        }
      }
    }`,
  });
  let reviews: TestimonialWithAsset[] = [];

  if (!data || data.length === 0) {
    throw new Error('Aucune donnée trouvée');
  }

  const { hero, about, services, testimonials } = data[0];

  if (testimonials?.displayAll) {
    const { data: reviewsData } = await sanityFetch({
      query: `*[_type == "testimonial"]{
        ...,
        authorImage{
          ...,
          asset->
        }
      }`,
    });
    reviews = reviewsData;
  }

  const reviewsToDisplay = testimonials?.displayAll
    ? reviews
    : testimonials?.reviews ?? [];

  return (
    <main role="main">
      <section
        className="min-h-[60vh] bg-white"
        role="banner"
        aria-label="Bannière du service d'assistant personnel">
        {/* Hero Section */}
        <section
          className="relative h-[70vh] flex items-center"
          aria-label="Section héro">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${urlForImage(hero.backgroundImage)})`,
            }}
            aria-hidden="true">
            {/* Gradient Overlay - Left to Right 40% */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent"
              style={{
                background:
                  'linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 30%, transparent 100%)',
              }}
              aria-hidden="true"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <FadeIn direction="up" delay={0.2}>
              <header>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
                  {hero.title}
                </h1>
              </header>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
                {hero.description}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div
                className="flex flex-col sm:flex-row gap-4"
                role="group"
                aria-label="Boutons d'action">
                <Button size="lg" aria-label="Voir nos services" asChild>
                  <Link href={'/services'}>{hero.primaryButton}</Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  aria-label="Contactez-nous pour discuter de vos besoins"
                  asChild>
                  <Link href={'/contact'}>
                    {hero.secondaryButton}
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </section>

      <Container className="py-16 space-y-16 relative">
        <div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/10 to-transparent"
          aria-hidden="true"
        />

        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10"
          aria-labelledby="section-about">
          <FadeIn direction="left" delay={0.2} className="md:hidden">
            <SectionIntro
              title={about.sectionHeading.title}
              eyebrow={about.sectionHeading.eyebrow}
            />
          </FadeIn>

          <ScaleIn
            delay={0.4}
            className="relative w-[90%] h-[90%] flex items-center justify-center">
            <ImageWithShape
              src={urlForImage(about.image)}
              className="w-full h-full"
            />
          </ScaleIn>

          <div className="space-y-4">
            <FadeIn direction="right" delay={0.2}>
              <SectionIntro
                title={about.sectionHeading.title}
                eyebrow={about.sectionHeading.eyebrow}
                className="hidden md:block"
              />
            </FadeIn>
            <FadeIn direction="right" delay={0.4} className="space-y-4">
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                {about.description}
              </p>

              <CalendlyPopup />
            </FadeIn>
          </div>
        </section>

        <section
          className="space-y-16 relative z-10"
          aria-labelledby="section-services">
          <FadeIn direction="up" delay={0.2}>
            <HeadingWithShape title={services.title} />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative">
            <Image
              src="/illustration/image-background-shape.svg"
              alt="Forme décorative"
              width={160}
              height={160}
              className="absolute top-2/4 -translate-y-1/2 right-3/12 hidden lg:block"
              aria-hidden="true"
            />
            <Image
              src="/illustration/heading-shape.svg"
              alt="Forme décorative"
              width={180}
              height={180}
              className="absolute bottom-0 left-3/12 hidden lg:block"
              aria-hidden="true"
            />
            {services.servicesList?.map((card: ServiceCard) => (
              <StaggerItem key={card._key} className="z-10 h-full">
                <CustomCard {...card} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </Container>

      <Container className="md:py-16 space-y-16 px-0 py-0">
        <FadeIn direction="up" delay={0.2}>
          <div
            className="space-y-4 bg-muted p-10 md:rounded-4xl"
            role="region"
            aria-label="Témoignages">
            <Heading title={testimonials.title} className="max-w-3xl mx-auto" />
            <p className="text-muted-foreground text-center max-w-xl mx-auto">
              {testimonials.subtitle}
            </p>

            <Carousel
              className="space-y-4 mt-10"
              aria-label="Carrousel de témoignages">
              <CarouselContent className="gap-4">
                {reviewsToDisplay.map(
                  (review: TestimonialWithAsset | Testimonial) => (
                    <CarouselItem
                      key={review._id}
                      className="md:basis-1/3 lg:basis-1/4 pb-4"
                      role="group"
                      aria-label="Témoignage 1">
                      <ReviewCard
                        rating={review.rating ?? 0}
                        title={review.title ?? ''}
                        description={review.review ?? ''}
                        authorName={review.authorName ?? ''}
                        authorRole={review.authorRole ?? ''}
                        authorImage={
                          (review as TestimonialWithAsset).authorImage?.asset
                        }
                      />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <div className="flex justify-center gap-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </FadeIn>
      </Container>

      <ScaleIn delay={0.2}>
        <CalendlyBlock />
      </ScaleIn>
    </main>
  );
}
