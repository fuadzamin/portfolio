import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projectData = [
  {
    title: 'Website jayabersama.my.id',
    description: 'A company profile website with a focus on branding and search engine optimization to increase online visibility.',
    image: 'https://placehold.co/600x400.png',
    tags: ['WordPress', 'SEO', 'Branding'],
    link: '#',
    aiHint: 'corporate website'
  },
  {
    title: 'Sistem Pakan Ikan Otomatis IoT',
    description: 'An IoT-based system for automatic fish feeding using ESP32 and various sensors, manageable via Blynk.',
    image: 'https://placehold.co/600x400.png',
    tags: ['ESP32', 'Blynk', 'IoT'],
    link: '#',
    aiHint: 'iot project'
  },
  {
    title: 'Website Kopi Kuy',
    description: 'A simple and elegant landing page for a coffee shop, integrated with the WhatsApp API for easy ordering.',
    image: 'https://placehold.co/600x400.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    link: '#',
    aiHint: 'coffee shop'
  },
  {
    title: 'Sistem Rental & Travel Mobil',
    description: 'A comprehensive web application for car rental management, featuring a powerful admin dashboard.',
    image: 'https://placehold.co/600x400.png',
    tags: ['PHP', 'MySQL', 'Dashboard'],
    link: '#',
    aiHint: 'dashboard travel'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">My Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
            Here are some of the projects I've worked on, showcasing my skills and passion.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projectData.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold font-headline">{project.title}</h3>
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <p className="mb-6 flex-1 text-muted-foreground font-body">{project.description}</p>
                <Button asChild variant="outline">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
