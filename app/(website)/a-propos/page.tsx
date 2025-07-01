import {
  CalendlyBlock,
  Container,
  CustomCard,
  HeadingWithShapeAndEyebrow,
} from '@/components/shared';
import { ImageWithShape2 } from '@/components/ui';
import { urlForImage } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { getAboutSEO, generateMetadata as generateSEOMetadata } from '@/sanity/lib/seo';
import { PortableText } from 'next-sanity';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/animation';
import { Metadata } from 'next';

type Value = {
  _key: string;
  title: string;
  description: string;
  icon: { asset: { _ref: string; _type: string } };
};

type Experience = {
  _key: string;
  title: string;
  description: string;
  company: string;
  date: string;
};


export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getAboutSEO();
  
  return generateSEOMetadata(
    seoData,
    'MlleK - À propos',
    'Découvrez l\'histoire et les valeurs de MlleK, une experte en développement web et design. Son parcours, son expertise et sa vision pour créer des expériences numériques exceptionnelles.'
  );
}

export default async function About() {
  const { data: about } = await sanityFetch({
    query: `*[_type == "about"][0]{
      introduction,
      story,
      values,
      experience
    }`,
  });

  if (!about) {
    throw new Error('Pas de données trouvées');
  }

  const { introduction, story, values, experience } = about;

  return (
    <main className="py-12 space-y-32">
      <Container className="flex flex-col-reverse md:grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        <FadeIn direction="left" delay={0.2}>
          <HeadingWithShapeAndEyebrow
            className="md:col-span-1 md:row-span-1"
            title={introduction.sectionHeading.title}
            eyebrow={introduction.sectionHeading.eyebrow}>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {introduction.description}
            </p>
          </HeadingWithShapeAndEyebrow>
        </FadeIn>

        <ScaleIn delay={0.4}>
          <ImageWithShape2
            className="md:col-start-2 md:col-span-3"
            src={urlForImage(introduction.image)}
          />
        </ScaleIn>
      </Container>

      <Container className="flex flex-col md:grid lg:grid-cols-2 gap-8 lg:gap-8 md:items-center">
        <FadeIn direction="right" delay={0.2}>
          <HeadingWithShapeAndEyebrow
            className="md:col-span-1 md:row-span-1"
            eyebrow={story.title}>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed hidden md:block">
              <PortableText value={story.description} />
            </div>
          </HeadingWithShapeAndEyebrow>
        </FadeIn>

        <ScaleIn delay={0.4}>
          <ImageWithShape2
            withoutBackground
            className="md:col-start-2 md:col-span-3"
            src={urlForImage(story.image)}
          />
        </ScaleIn>
        <FadeIn direction="up" delay={0.6}>
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed md:hidden">
            <PortableText value={story.description} />
          </div>
        </FadeIn>
      </Container>

      <Container className="flex flex-col md:grid lg:grid-cols-2 gap-8 lg:gap-8 md:items-center">
        <FadeIn direction="up" delay={0.2}>
          <HeadingWithShapeAndEyebrow
            className="md:col-span-1 md:row-span-1"
            eyebrow={values.title}>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[80vw]">
              {values.valuesList.map((value: Value) => (
                <StaggerItem key={value._key}>
                  <CustomCard
                    title={value.title}
                    description={value.description}
                    icon={value.icon}
                    className="max-w-none w-full"
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </HeadingWithShapeAndEyebrow>
        </FadeIn>
      </Container>

      <Container className="flex flex-col md:grid lg:grid-cols-2 gap-8 lg:gap-8 md:items-center">
        <FadeIn direction="up" delay={0.2}>
          <HeadingWithShapeAndEyebrow
            className="md:col-span-1 md:row-span-1"
            eyebrow="My Experience">
            <StaggerContainer className="space-y-6">
              {experience.map((experience: Experience) => (
                <StaggerItem key={experience._key}>
                  <li className="grid grid-cols-[20px_1fr] gap-1.5 items-start">
                    {/* Big Dot */}
                    <div className="w-4 h-4 bg-primary rounded-full mt-1" />

                    {/* Content */}
                    <section className="space-y-4">
                      <div className="flex flex-col-reverse md:flex-row items-baseline gap-36">
                        <div className="space-y-1 md:space-y-0">
                          <h3 className="font-semibold text-lg">
                            {experience.title}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {experience.company}
                          </p>
                        </div>
                        <p className="text-primary text-sm text-md font-semibold mb-3 md:mb-0">
                          {experience.date}
                        </p>
                      </div>
                      <div className="text-gray-600 mt-1 font-dm-sans w-[60vw]">
                        {experience.description}
                      </div>
                    </section>
                  </li>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </HeadingWithShapeAndEyebrow>
        </FadeIn>
      </Container>

      <ScaleIn delay={0.2}>
        <CalendlyBlock />
      </ScaleIn>
    </main>
  );
}
