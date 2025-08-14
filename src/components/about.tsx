import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full bg-card py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">
                About Me
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed font-body">
                Mahasiswa semester 7 Informatika yang memiliki minat besar di pengembangan Web dan IoT. Berpengalaman membuat website dan aplikasi berbasis PHP, MySQL, serta proyek IoT dengan ESP32.
            </p>
            <Button asChild variant="secondary" size="lg">
                <a href="/cv-placeholder.pdf" download="CV-Fuadz-Misbahul-Amin.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
