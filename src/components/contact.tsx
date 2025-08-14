'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    const { toast } = useToast();
 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
 
        const form = event.target as HTMLFormElement;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
 
        const subject = encodeURIComponent('Pesan dari Formulir Kontak');
        const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
        const mailtoLink = `mailto:fuadzmisbahulamin@gmail.com?subject=${subject}&body=${body}`;
 
        window.location.href = mailtoLink;
 
        toast({
            title: "Pesan Terkirim!",
            // Note: This toast appears immediately, but the email might not be sent until the user confirms in their email client.
            description: "Terima kasih telah menghubungi. Saya akan segera membalasnya.",
        });
        (event.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" className="w-full py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">Hubungi Saya</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed font-body">
                            Punya proyek atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk mendiskusikan peluang baru.
                        </p>
                        <div className="flex space-x-4">
                             <Button asChild variant="ghost" size="icon" className="h-10 w-10">
                                <Link href="https://www.linkedin.com/in/fuadz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                                </Link>
                             </Button>
                             <Button asChild variant="ghost" size="icon" className="h-10 w-10">
                                <Link href="https://github.com/fuadzamin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                                </Link>
                             </Button>
                              <Button asChild variant="ghost" size="icon" className="h-10 w-10">
                                <Link href="mailto:fuadzmisbahulamin@gmail.com" aria-label="Email">
                                    <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                                </Link>
                             </Button>
                             <Button asChild variant="ghost" size="icon" className="h-10 w-10">
                                <Link href="https://www.instagram.com/fuadz_amin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                                </Link>
                             </Button>

                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="font-body">Nama</Label>
                            <Input id="name" type="text" placeholder="Nama Anda" required className="font-body" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="font-body">Email</Label>
                            <Input id="email" type="email" placeholder="Email Anda" required className="font-body"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="font-body">Pesan</Label>
                            <Textarea id="message" placeholder="Pesan Anda" required className="font-body min-h-[120px]" />
                        </div>
                        <Button type="submit" size="lg" className="glowing-btn w-full font-body">Kirim Pesan</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
