import React from 'react';
import { Container } from '../shared';
import Link from 'next/link';
import { navigationItems } from '../layout/header/data';
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { Button } from '../ui';
import { sanityFetch } from '@/sanity/lib/live';
import { FooterAnimation } from '../animation';

export default async function Footer() {
  const { data } = await sanityFetch({
    query: `*[_type == "footer"][0]{
      about,
      socialLinks,
      legalLinks[]{
        title,
        "fileUrl": file.asset->url
      },
      "information": *[_type == "information"][0]
    }`,
  });

  if (!data) throw new Error('Aucune donnée trouvée dans le footer');

  const { about, socialLinks, legalLinks, information } = data;

  // Données par défaut si information n'existe pas
  const defaultInformation = {
    contactInfo: {
      email: 'contact@mllek.com',
      phone: '+33 1 23 45 67 89',
      location: 'Paris, France'
    }
  };

  const contactInfo = information?.contactInfo || defaultInformation.contactInfo;

  return (
    <Container
      className="md:mt-16 sm:px-0 px-0"
      as="footer"
      role="contentinfo"
      aria-label="Footer">
      <div className="py-16 px-4 md:px-10 bg-black text-white md:rounded-3xl">
        <nav aria-label="Navigation du footer">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* About */}
            <FooterAnimation index={0}>
              <section aria-labelledby="about-heading">
                <h3 id="about-heading" className="text-xl font-semibold mb-4">
                  {about.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed max-w-md">
                  {about.description}
                </p>
              </section>
            </FooterAnimation>

            {/* Quick Links */}
            <FooterAnimation index={1}>
              <section aria-labelledby="quick-links-heading">
                <h3
                  id="quick-links-heading"
                  className="text-xl font-semibold mb-4">
                  Liens rapides
                </h3>
                <ul
                  className="space-y-2 text-gray-300 list-disc ml-4"
                  role="list">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="hover:text-white transition-colors duration-200"
                        aria-label={`Aller à ${item.title}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </FooterAnimation>

            {/* Contact Info */}
            <FooterAnimation index={2}>
              <section aria-labelledby="contact-heading">
                <h3 id="contact-heading" className="text-xl font-semibold mb-4">
                  Informations de contact
                </h3>
                <ul className="space-y-2 text-gray-300 text-base" role="list">
                  <li className="flex items-start gap-2">
                    <MapPin
                      className="w-5 h-5 mt-1 text-primary"
                      aria-hidden="true"
                    />
                    <div className="mb-3 flex gap-1">
                      <span className="font-medium">Basé à</span>
                      <address>{contactInfo.location}</address>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                    <Link
                      href={`tel:${contactInfo.phone}`}
                      className="hover:text-white">
                      {contactInfo.phone}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                    <Link
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-white">
                      {contactInfo.email}
                    </Link>
                  </li>
                </ul>
              </section>
            </FooterAnimation>

            {/* Connect Us */}
            <FooterAnimation index={3}>
              <section aria-labelledby="social-heading">
                <h3 id="social-heading" className="text-xl font-semibold mb-4">
                  Connectez-vous
                </h3>
                <div
                  className="flex gap-4 mt-2 text-black"
                  role="list"
                  aria-label="Liens réseaux sociaux">
                  {socialLinks.facebook && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={socialLinks.facebook} target="_blank">
                        <Facebook className="w-6 h-6" aria-hidden="true" />
                      </Link>
                    </Button>
                  )}
                  {socialLinks.twitter && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={socialLinks.twitter} target="_blank">
                        <Twitter className="w-6 h-6" aria-hidden="true" />
                      </Link>
                    </Button>
                  )}
                  {socialLinks.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={socialLinks.linkedin} target="_blank">
                        <Linkedin className="w-6 h-6" aria-hidden="true" />
                      </Link>
                    </Button>
                  )}
                  {socialLinks.instagram && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={socialLinks.instagram} target="_blank">
                        <Instagram className="w-6 h-6" aria-hidden="true" />
                      </Link>
                    </Button>
                  )}
                </div>
              </section>
            </FooterAnimation>
          </div>
        </nav>
        <FooterAnimation index={4}>
          <div className="border-t border-white/30 mt-10 pt-6 text-center text-gray-400 text-sm flex flex-col md:flex-row-reverse gap-4 justify-between items-center">
            <ul className="flex justify-center gap-4">
              {legalLinks.map((link: { title: string; fileUrl: string }) => (
                <li key={link.title}>
                  <Link href={link.fileUrl}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <p>
              &copy; {new Date().getFullYear()} MlleK. All rights reserved. par{' '}
              <Link
                href="https://www.tuumagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary hover:underline hover:underline-offset-4 hover:font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                Tuum Agency
              </Link>
            </p>
          </div>
        </FooterAnimation>
      </div>
    </Container>
  );
}
