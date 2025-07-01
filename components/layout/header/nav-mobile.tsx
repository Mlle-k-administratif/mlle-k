'use client';

import React, { useEffect, useState } from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui';
import { CgMenuRight } from 'react-icons/cg';
import Link from 'next/link';
import Image from 'next/image';
import { CalendlyPopup } from '@/components/shared';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationItems } from './data';

export default function NavMobile() {
  const pathname = usePathname();



  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <CgMenuRight className="w-6 h-6 text-primary" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent
        side="top"
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between mt-4">
            <div className="relative h-18 w-18">
              <SheetClose asChild>
                <Link href="/" aria-label="Aller à l'accueil">
                  <Image
                    src="/logo.png"
                    alt="Logo de l'entreprise"
                    layout="fill"
                    objectFit="contain"
                  />
                </Link>
              </SheetClose>
            </div>

            <CalendlyPopup />
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Navigation mobile">
          <ul className="flex flex-col gap-4 p-4" role="menu">
            {navigationItems.map((item) => (
              <li key={item.href} role="none">
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      pathname === item.href && 'text-primary font-bold',
                      'focus:outline-none focus:ring-2 focus:ring-primary'
                    )}
                    role="menuitem"
                    aria-current={pathname === item.href ? 'page' : undefined}>
                    {item.title}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
