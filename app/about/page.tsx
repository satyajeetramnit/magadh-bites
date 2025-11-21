"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-20 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-purple-royal/60 z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1200"
                        alt="Magadh Heritage"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <Container className="relative z-20 text-center text-white-pure">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold-highlight font-bold tracking-widest uppercase text-sm mb-4 block">
                            Our Story
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                            Preserving the <br /> Royal Taste of Magadh
                        </h1>
                        <p className="text-xl md:text-2xl text-cream-offwhite/90 max-w-3xl mx-auto font-light">
                            A journey back to the roots of Bihar's culinary excellence.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Founders Section */}
            <section className="py-24 bg-cream-offwhite text-purple-royal">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-8 border-white-pure shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
                                    alt="Founders"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-orange-brand text-white-pure p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
                                <p className="font-heading font-bold text-xl italic">
                                    "We wanted to bring the taste of our grandmother's kitchen to the world."
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Meet the Makers</h2>
                            <p className="text-lg text-purple-royal/80 mb-6 leading-relaxed">
                                Magadh Bites was founded by two siblings who grew up in the heart of Patna, surrounded by the aroma of roasting spices and freshly made snacks.
                            </p>
                            <p className="text-lg text-purple-royal/80 mb-6 leading-relaxed">
                                Realizing that authentic Bihari snacks were hard to find outside the region, they set out on a mission to document, preserve, and share these centuries-old recipes.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-brand mb-2">Ravi Kumar</h3>
                                    <p className="text-sm font-bold uppercase tracking-wider opacity-70">Co-Founder & Head Chef</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-brand mb-2">Priya Singh</h3>
                                    <p className="text-sm font-bold uppercase tracking-wider opacity-70">Co-Founder & Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Heritage Triptych */}
            <section className="py-24 text-white-pure">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Heritage</h2>
                        <p className="text-cream-offwhite/60 max-w-2xl mx-auto">
                            Every bite tells a story of culture, tradition, and craftsmanship.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Ancient Grains",
                                desc: "We use indigenous grains like Makhana and Sattu that have been staples in Magadh for millennia.",
                                img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600"
                            },
                            {
                                title: "Traditional Methods",
                                desc: "Slow-roasting in iron woks and sun-drying ingredients ensures the authentic texture and flavor.",
                                img: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&q=80&w=600"
                            },
                            {
                                title: "Community First",
                                desc: "We empower local women artisans who handcraft our snacks using skills passed down through generations.",
                                img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-xl bg-purple-secondary border border-white-pure/10">
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4 text-gold-highlight">{item.title}</h3>
                                    <p className="text-cream-offwhite/80 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Process Summary */}
            <section className="py-24 bg-maroon-deep text-white-pure">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4">
                            <h2 className="text-4xl font-bold mb-6">From Farm to Royal Plate</h2>
                            <p className="text-cream-offwhite/80 mb-8">
                                Our process is a labor of love, ensuring that every packet of Magadh Bites delivers the same freshness and taste as a home-cooked snack.
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { step: "01", title: "Sourcing", desc: "Direct from farmers" },
                                    { step: "02", title: "Roasting", desc: "Slow & traditional" },
                                    { step: "03", title: "Seasoning", desc: "Hand-mixed spices" },
                                    { step: "04", title: "Packing", desc: "Sealed for freshness" }
                                ].map((item) => (
                                    <div key={item.step} className="bg-white-pure/5 p-6 rounded-lg border border-white-pure/10">
                                        <span className="text-4xl font-bold text-orange-brand opacity-50 mb-2 block">{item.step}</span>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-sm text-cream-offwhite/60">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
