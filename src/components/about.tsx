import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full bg-card py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">
                Tentang Saya
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed font-body">
                Saya adalah seorang mahasiswa semester 7 di Universitas Putra Bangsa Kebumen dengan minat yang kuat dalam pengembangan web dan Internet of Things (IoT). Saya sedang mencari kesempatan magang untuk menerapkan dan mengembangkan keterampilan teknis saya dalam proyek-proyek nyata.
            </p>
            <Button asChild variant="secondary" size="lg">
                <a href="/cv.pdf" download="CV-Fuadz-Misbahul-Amin.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Unduh CV
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
