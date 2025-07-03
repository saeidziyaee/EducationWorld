'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Apple } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const AndroidIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" />
      <path d="M12 18h.01" />
    </svg>
);
  

const sliderItems = [
    {
        title: "یادگیری را به دنیای خود بیاورید",
        description: "مقالات آموزشی ما را در هر زمان و هر مکان مطالعه کنید.",
        image: "https://placehold.co/1200x600.png",
        imageHint: "learning mobile app",
    },
    {
        title: "دانش خود را عمیق‌تر کنید",
        description: "با تکنیک‌های مطالعه و تمرکز، بازدهی خود را چند برابر کنید.",
        image: "https://placehold.co/1200x600.png",
        imageHint: "deep knowledge brain",
    },
    {
        title: "برای موفقیت آماده شوید",
        description: "با استراتژی‌های کاهش استرس و تست‌زنی، در امتحانات بدرخشید.",
        image: "https://placehold.co/1200x600.png",
        imageHint: "success exam celebration",
    },
];

export function HeroSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <Carousel 
            plugins={[plugin.current]}
            className="w-full rounded-lg overflow-hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            dir="ltr"
        >
            <CarouselContent>
                {sliderItems.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="relative h-[400px] md:h-[500px] w-full">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                data-ai-hint={item.imageHint}
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-headline" dir="rtl">
                                    {item.title}
                                </h2>
                                <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mb-8" dir="rtl">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Button size="lg" variant="secondary">
                                        <AndroidIcon className="ml-2 h-5 w-5" />
                                        دانلود اندروید
                                    </Button>
                                    <Button size="lg" variant="secondary">
                                        <Apple className="ml-2 h-5 w-5" />
                                        دانلود iOS
                                    </Button>
                                    <Button size="lg" asChild>
                                        <Link href="/login">ورود</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 border-none" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 border-none" />
        </Carousel>
    );
}
