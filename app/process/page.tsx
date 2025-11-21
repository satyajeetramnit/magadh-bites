"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

export default function ProcessPage() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <main className="min-h-screen">
            <Header />

            {/* Video Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-purple-royal/50 z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://cdn.coverr.co/videos/coverr-spices-on-a-spoon-5386/1080p.mp4" type="video/mp4" />
                        {/* Fallback image if video fails */}
                        <Image
                            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200"
                            alt="Spices"
                            fill
                            className="object-cover"
                        />
                    </video>
                </div>
                <Container className="relative z-20 text-center text-white-pure">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight">
                            The Art of <br /> <span className="text-orange-brand">Slow</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-cream-offwhite/90 max-w-2xl mx-auto font-light">
                            We don't rush nature. We just help it shine.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Sourcing Section - Zig Zag */}
            <section className="py-24 bg-cream-offwhite text-purple-royal">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                            <Image
                                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"
                                alt="Sourcing Spices"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-orange-brand font-bold tracking-widest uppercase text-sm mb-4 block">
                                Step 01: Sourcing
                            </span>
                            <h2 className="text-4xl font-bold mb-6">It Starts with the Soil.</h2>
                            <p className="text-lg text-purple-royal/80 mb-6 leading-relaxed">
                                We source our Makhana directly from the wetlands of Darbhanga and Madhubani. The farmers we work with have been cultivating these lotus seeds for generations.
                            </p>
                            <p className="text-lg text-purple-royal/80 leading-relaxed">
                                No middlemen. No compromises. Just pure, farm-fresh ingredients that support the local economy.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1">
                            <span className="text-orange-brand font-bold tracking-widest uppercase text-sm mb-4 block">
                                Step 02: Roasting
                            </span>
                            <h2 className="text-4xl font-bold mb-6">The Iron Wok Magic.</h2>
                            <p className="text-lg text-purple-royal/80 mb-6 leading-relaxed">
                                Unlike modern industrial processing, we slow-roast our snacks in traditional heavy iron woks (kadhai). This ensures even heat distribution and that perfect crunch.
                            </p>
                            <p className="text-lg text-purple-royal/80 leading-relaxed">
                                It takes 3x longer than machine roasting, but the taste is worth every second.
                            </p>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl order-2">
                            <Image
                                src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&q=80&w=800"
                                alt="Roasting Process"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Timeline Core */}
            <section className="py-32 relative overflow-hidden" ref={timelineRef}>
                <Container className="relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold text-white-pure mb-6">The Journey of a Bite</h2>
                        <p className="text-cream-offwhite/60 max-w-2xl mx-auto">
                            From the farm to your fingertips, trace the path of purity.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line for Mobile / Desktop */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white-pure/10 -translate-x-1/2">
                            <motion.div
                                style={{ height: lineHeight }}
                                className="w-full bg-orange-brand origin-top"
                            />
                        </div>

                        <div className="space-y-24">
                            {[
                                { title: "Harvesting", desc: "Farmers collect the lotus seeds from the ponds at dawn.", icon: "🌅" },
                                { title: "Popping", desc: "The seeds are heated and popped manually using wooden mallets.", icon: "🔥" },
                                { title: "Grading", desc: "Only the perfectly round and white makhanas make the cut.", icon: "✨" },
                                { title: "Seasoning", desc: "Tossed with our secret blend of spices and ghee.", icon: "🧂" }
                            ].map((item, idx) => (
                                <div key={idx} className={cn(
                                    "relative flex items-center gap-8 md:gap-16",
                                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                )}>
                                    {/* Timeline Node */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-purple-royal border-4 border-orange-brand flex items-center justify-center text-2xl z-10 shadow-[0_0_20px_rgba(248,156,28,0.5)]">
                                        {item.icon}
                                    </div>

                                    {/* Content */}
                                    <div className={cn(
                                        "w-full md:w-[calc(50%-4rem)] pl-24 md:pl-0",
                                        idx % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                                    )}>
                                        <div className="bg-purple-secondary p-8 rounded-xl border border-white-pure/10 hover:border-orange-brand/50 transition-colors">
                                            <h3 className="text-2xl font-bold text-white-pure mb-3">{item.title}</h3>
                                            <p className="text-cream-offwhite/80">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Empty space for the other side */}
                                    <div className="hidden md:block w-[calc(50%-4rem)]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
