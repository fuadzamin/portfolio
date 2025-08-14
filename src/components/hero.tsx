import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none font-headline">
                Hi, I'm Fuadz – Junior Web Developer
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 font-body">
                Membuat website yang responsif, cepat, dan fungsional.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="glowing-btn">
                <Link href="#projects">Lihat Portofolio</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Hubungi Saya</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/image/profil.png"
              alt="Fuadz Misbahul Amin"
              width={400}
              height={400}
              priority
              className="h-auto w-full max-w-[250px] sm:max-w-xs rounded-full object-cover shadow-2xl lg:max-w-md"
              data-ai-hint="developer avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
