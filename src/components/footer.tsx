import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 px-4 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © 2025 Fuadz Misbahul Amin. All rights reserved.
        </p>
        <div className="flex space-x-2">
            <Button asChild variant="ghost" size="icon">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href="mailto:fuadz.misbahul.amin@example.com" aria-label="Email">
                    <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.print()} aria-label="Export as PDF">
                Export as PDF
            </Button>
        </div>
      </div>
    </footer>
  );
}
