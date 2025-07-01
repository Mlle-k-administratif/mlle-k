import {
  Container,
  HeadingWithShapeAndEyebrow,
  ServiceCard,
} from '@/components/shared';
import { ImageWithShape2 } from '@/components/ui';
import { ServiceItem } from '@/sanity.types';
import { urlForImage } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import {
  getServiceSEO,
  generateMetadata as generateSEOMetadata,
} from '@/sanity/lib/seo';
import React from 'react';
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animation';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getServiceSEO();

  return generateSEOMetadata(
    seoData,
    'MlleK - Services',
    'Découvrez les services de MlleK, une experte en développement web et design. Son parcours, son expertise et sa vision pour créer des expériences numériques exceptionnelles.'
  );
}

export default async function Services() {
  const { data } = await sanityFetch({
    query: `*[_type == "service"][0]`,
  });

  if (!data) throw new Error('Aucun service trouvé');

  const { sectionHeading, image, description, services } = data;

  return (
    <main className="py-12 space-y-32">
      <Container className="flex flex-col-reverse md:grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        <FadeIn direction="left" delay={0.2}>
          <HeadingWithShapeAndEyebrow
            className="md:col-span-1 md:row-span-1"
            title={sectionHeading.title}
            eyebrow={sectionHeading.eyebrow}>
            {description && <p className="text-gray-500">{description}</p>}
          </HeadingWithShapeAndEyebrow>
        </FadeIn>

        <ScaleIn delay={0.4}>
          <ImageWithShape2
            className="md:col-start-2 md:col-span-3"
            src={urlForImage(image)}
          />
        </ScaleIn>
      </Container>

      {services.map((service: ServiceItem, index: number) => (
        <Container
          key={index}
          className="flex flex-col md:grid lg:grid-cols-2 gap-8 lg:gap-8 md:items-center">
          <FadeIn direction="up" delay={0.2 * (index + 1)}>
            <HeadingWithShapeAndEyebrow
              className="md:col-span-1 md:row-span-1"
              eyebrow={'Administrative Support'}>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[80vw]">
                {service?.taskList?.map((task) => (
                  <StaggerItem key={task.title}>
                    <ServiceCard
                      icon={task.icon ? urlForImage(task.icon) : undefined}
                      title={task.title || ''}
                      description={task.description || ''}
                      list={task.list || []}
                    />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </HeadingWithShapeAndEyebrow>
          </FadeIn>
        </Container>
      ))}
    </main>
  );
}
