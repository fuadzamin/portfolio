'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      let currentSection = 'home';
      for (const sectionId of sections) {
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl && window.scrollY >= sectionEl.offsetTop - 150) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onLinkClick}
          className={`transition-colors hover:text-primary ${
            activeSection === href.substring(1) ? 'text-primary font-semibold' : 'text-muted-foreground'
          }`}
        >
          {label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary">
          Fuadz Misbahul Amin
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <NavContent />
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex h-full flex-col items-center justify-center space-y-8">
                <NavContent onLinkClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
