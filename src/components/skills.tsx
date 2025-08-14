import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillsData = {
  "Pemrograman Web": ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  "Framework & Tools": ["Laravel (dasar)", "Next.js (dasar)", "GitHub"],
  "IoT & Embedded System": ["ESP32", "Blynk", "RTC DS3231", "Load Cell", "Sensor Ultrasonik", "Servo", "Motor DC"],
  "Keterampilan Tambahan": ["Pemecahan masalah", "Kerja tim", "Komunikasi"],
};

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-card py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">Keahlian Saya</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
            Kumpulan teknologi, alat, dan kemampuan yang saya miliki.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-wrap content-start gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-body text-sm">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
