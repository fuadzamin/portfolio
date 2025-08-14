import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projectData = [
  {
    title: 'Website jayabersama.my.id',
    description: 'Membangun website profil perusahaan Jaya Bersama menggunakan WordPress. Mendesain dan menyesuaikan tema agar sesuai dengan identitas brand, serta mengoptimalkan SEO dan kecepatan website.',
    image: '/image/jaya.png',
    tags: ['WordPress', 'SEO', 'Branding'],
    link: 'https://jayabersama.my.id',
    aiHint: 'corporate website'
  },
  {
    title: 'Sistem Pakan Ikan Otomatis IoT',
    description: 'Mengembangkan sistem pemberian pakan ikan otomatis berbasis ESP32. Sistem ini dapat mengatur takaran, jadwal, dan penyebaran pakan, serta dapat dipantau melalui aplikasi Blynk.',
    image: '/image/pakan.png',
    tags: ['ESP32', 'Blynk', 'IoT'],
    link: 'https://www.tiktok.com/@_fuadz_/video/7524647599240924423?is_from_webapp=1&sender_device=pc&web_id=7402249237452572161',
    aiHint: 'iot project'
  },
  {
    title: 'Website Kopi Kuy',
    description: 'Membuat landing page interaktif untuk brand kopi fiktif. Menampilkan menu, profil tim, testimoni, dan integrasi WhatsApp untuk pemesanan.',
    image: '/image/cafe.png', // Image for the "Website Kopi Kuy" project
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    link: 'cafe-mauve-delta.vercel.app',
    aiHint: 'coffee shop'
  },
  {
    title: 'Sistem Rental & Travel Mobil',
    description: 'Membangun website pemesanan rental dan travel mobil dengan fitur booking, pembayaran, dan histori transaksi. Dilengkapi dashboard admin untuk pengelolaan data.',
    image: '/image/travel.png',
    tags: ['PHP', 'MySQL', 'Dashboard'],
    link: 'https://github.com/fuadzamin/rental-travel-mobil.git',
    aiHint: 'dashboard travel'
  },
    {
    title: 'Website Manajemen Turnamen',
    description: 'Membangun website CRUD sederhana menggunakan PHP dan MySQL untuk mengelola data turnamen, termasuk data peserta dan berita.',
    image:'/image/turnamen.png',
    tags: ['PHP', 'MySQL', 'CRUD'],
    link: 'https://github.com/fuadzamin/website-Esport.git',
    aiHint: 'tournament management'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">Proyek Saya</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
            Berikut adalah beberapa proyek yang pernah saya kerjakan, menunjukkan keahlian dan minat saya.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projectData.map((project, index) => (
            <Card key={index} className="project-card-hover flex flex-col overflow-hidden bg-card">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="project-image aspect-video w-full object-cover transition-transform duration-300"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold font-headline">{project.title}</h3>
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <p className="mb-6 flex-1 text-muted-foreground font-body">{project.description}</p>
                <Button asChild variant="outline">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">Lihat Proyek</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
