import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import { sanityFetch } from '@/sanity/lib/live';
import { urlForImage } from '@/sanity/lib/image';
import {
  getContactSEO,
  generateMetadata as generateSEOMetadata,
} from '@/sanity/lib/seo';
import { FadeIn, ScaleIn, SlideIn } from '@/components/animation';
import { Container } from '@/components/shared';
import { Card, CardContent } from '@/components/ui/card';
import CalendlyWidget from './_components/calendly-widget';
import { ContactForm } from './_components/contact-form';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getContactSEO();

  return generateSEOMetadata(
    seoData,
    'MlleK - Contact',
    'Contactez MlleK pour discuter de vos besoins en développement web et design.'
  );
}

export default async function ContactPage() {
  const { data } = await sanityFetch({
    query: `*[_type == "contact"]{
           ...,
           "information": *[_type == "information"][0]
        }`,
  });

  if (!data) throw new Error('Aucune donnée trouvée');

  const { hero, information } = data[0];

  return (
    <Container className="flex flex-col min-h-screen pt-10">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center">
        <ScaleIn delay={0.2}>
          <Image
            src={urlForImage(hero.heroImage)}
            alt="Contact Hero"
            fill
            className="object-cover object-center rounded-2xl opacity-90"
          />
        </ScaleIn>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 rounded-2xl" />
        <div className="absolute inset-0 bg-black/20 rounded-2xl" />
        <div className="relative z-10 text-white px-4 text-left w-full px-10">
          <FadeIn direction="up" delay={0.2}>
            <p className="text-sm md:text-base font-semibold text-yellow-300 mb-2">
              {hero.subtitle}
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 max-w-2xl">
              {hero.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        {/* Contact Info */}
        <SlideIn direction="left" delay={0.2}>
          <Card className="bg-neutral-900 text-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Informations de contact
              </h2>
              <div className="mb-3">
                <span className="text-primary font-medium block">Email</span>
                <Link href={`mailto:${information.contactInfo.email}`}>
                  {information.contactInfo.email}
                </Link>
              </div>
              <div className="mb-3">
                <span className="text-primary font-medium block">Phone</span>
                <Link href={`tel:${information.contactInfo.phone}`}>
                  {information.contactInfo.phone}
                </Link>
              </div>
              <div className="mb-3">
                <span className="text-primary font-medium">Basé à</span>
                <address>{information.contactInfo.location}</address>
              </div>
              <div>
                <span className="text-primary font-medium">Disponibilités</span>
                <div>
                  {information.availability.weekdays}
                  <br />
                  {information.availability.weekends}
                </div>
              </div>
            </CardContent>
          </Card>
        </SlideIn>

        {/* Contact Form */}
        <SlideIn direction="right" delay={0.4}>
          <ContactForm to={information.contactInfo.email} />
        </SlideIn>
      </section>

      {/* Schedule a Consultation */}
      <section className="bg-gray-50 py-12 px-4 rounded-2xl">
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Prendre rendez-vous
            </h2>
            <p className="text-gray-600">
              Prendre rendez-vous pour discuter de vos besoins en détail
            </p>
          </div>
        </FadeIn>

        <ScaleIn delay={0.4}>
          <CalendlyWidget url="https://calendly.com/momoseck8/30min" />
        </ScaleIn>
      </section>
    </Container>
  );
}
