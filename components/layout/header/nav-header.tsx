'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navigationItems } from './data';

function NavHeader({ className }: { className?: string }) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const pathname = usePathname();

  const updatePosition = useCallback((element: Element | null) => {
    if (!element) return;

    const { width } = element.getBoundingClientRect();
    setPosition({
      width,
      opacity: 1,
      left: (element as HTMLElement).offsetLeft,
    });
  }, []);

  useEffect(() => {
    const activeTab = document.querySelector('[aria-current="page"]')
      ?.parentElement as Element | null;
    if (activeTab) {
      updatePosition(activeTab);
    }
  }, [pathname, updatePosition]);

  return (
    <nav aria-label="Navigation principale">
      <ul
        className={cn(
          'relative mx-auto md:flex w-fit rounded-full bg-muted p-1',
          className
        )}
        role="menubar"
        aria-orientation="horizontal"
        onMouseLeave={() => {
          const activeTab = document.querySelector(
            '[aria-current="page"]'
          )?.parentElement;
          if (activeTab) {
            updatePosition(activeTab);
          } else {
            setPosition((pv) => ({ ...pv, opacity: 0 }));
          }
        }}>
        {navigationItems.map((item) => (
          <Tab
            key={item.href}
            setPosition={updatePosition}
            href={item.href}
            title={item.title}>
            {item.title}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
}

interface TabProps {
  children: React.ReactNode;
  setPosition: (element: Element | null) => void;
  href: string;
  title: string;
}

const Tab = React.memo(({ children, setPosition, href, title }: TabProps) => {
  const router = useRouter();
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const isActive = pathname === href;

  useEffect(() => {
    if (isActive && ref.current) {
      setPosition(ref.current);
    }
  }, [isActive, setPosition]);

  return (
    <li
      onClick={() => router.replace(href)}
      ref={ref}
      role="none"
      onMouseEnter={() => setPosition(ref.current)}
      className={cn(
        'relative z-10 block  cursor-pointer hover:text-primary-foreground px-3 py-1.5 text-xs text-black md:px-5 md:py-2 md:text-base',
        isActive && ' text-primary-foreground'
      )}>
      <Link
        href={href}
        role="menuitem"
        aria-current={isActive ? 'page' : undefined}
        aria-label={title}
        className={cn(
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
        )}>
        {children}
      </Link>
    </li>
  );
});

Tab.displayName = 'Tab';

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor = React.memo(({ position }: CursorProps) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-primary text-primary-foreground md:h-10"
      aria-hidden="true"
      role="presentation"
    />
  );
});

Cursor.displayName = 'Cursor';

export default NavHeader;
