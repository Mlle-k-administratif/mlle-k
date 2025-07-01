import { CalendlyPopup, Container } from '@/components/shared';
import React from 'react';

import NavHeader from './nav-header';
import Image from 'next/image';
import NavMobile from './nav-mobile';

export default function Header() {
  return (
    <Container as="header" className="py-4 flex items-center justify-between">
      <div className="relative h-18 w-18 ">
        <Image src="/logo.png" alt="logo" layout="fill" objectFit="contain" />
      </div>
      <NavHeader className="hidden" />
      <div className="flex items-center gap-4">
        <CalendlyPopup />
        <NavMobile />
      </div>
    </Container>
  );
}
