import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cardsData } from "@/utils/homeCardsData";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Kit de ferramentas para desenvolvedores
        </h1>
        <p className="text-lg text-muted-foreground">
          Economize tempo e melhore sua produtividade com nossas ferramentas
          criadas especialmente para desenvolvedores.
        </p>
        <Button size="lg" className="mt-4">
          <Link href="/ferramentas">Explore Ferramentas</Link>
        </Button>
      </section>

      <Carousel className="mt-8" opts={{ loop: true }}>
        <CarouselContent>
          {cardsData.map(({ id, title, description, href }) => (
            <CarouselItem key={id} className="basis-1/3">
              <Link href={href}>
                <Card className="h-40 flex flex-col gap-2 justify-center items-center">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
