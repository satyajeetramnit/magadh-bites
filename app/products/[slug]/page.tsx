"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Minus, Plus, Check, ShieldCheck, Leaf, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

// Mock Data for a single product
const PRODUCT = {
    id: "1",
    title: "Peri Peri Roasted Makhana",
    price: 249,
    description: "Evocative body copy is the me of the sensory experience, and conchaddling nosees with high-resolution, shrimity the opicx, melenbe ancemsent maknoo. The roasting process of the Madhubani roasted, this maisep e a renesniy from bortling process, some of the favor and with natuxl packaging, with selular and leworus exite flavor with cext flavor notes.",
    images: [
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&q=80&w=1200"
    ],
    variants: ["100g", "250g"],
    nutrition: [
        { label: "Energy", value: "178 kJ / 45kcal" },
        { label: "Protein", value: "14 g" },
        { label: "Saturated Fat", value: "6 g" },
        { label: "Carbohydrate", value: "17 g" },
        { label: "Sugar", value: "0 g" },
        { label: "Salt", value: "0.5 mg" }
    ]
};

export default function ProductPage({ params }: { params: { slug: string } }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(PRODUCT.variants[0]);
    const [quantity, setQuantity] = useState(1);
    const [showStickyAtc, setShowStickyAtc] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const buyBox = document.getElementById('buy-box');
            if (buyBox) {
                const rect = buyBox.getBoundingClientRect();
                setShowStickyAtc(rect.bottom < 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen">
            <Header />

            <div className="pt-24 pb-12 lg:pt-32">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Image Gallery - Left Side (55%) */}
                        <div className="lg:col-span-7 space-y-4">
                            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white-pure/10 bg-purple-secondary">
                                <Image
                                    src={PRODUCT.images[selectedImage]}
                                    alt={PRODUCT.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {PRODUCT.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={cn(
                                            "relative aspect-square rounded-lg overflow-hidden border-2 transition-all",
                                            selectedImage === idx ? "border-orange-brand" : "border-transparent hover:border-white-pure/30"
                                        )}
                                    >
                                        <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Buy Box - Right Side (45%) */}
                        <div className="lg:col-span-5 relative">
                            <div className="lg:sticky lg:top-32 space-y-8" id="buy-box">
                                <div>
                                    <span className="text-gold-highlight font-bold tracking-widest uppercase text-sm mb-2 block">
                                        Home / Snacks / {PRODUCT.title}
                                    </span>
                                    <h1 className="text-3xl md:text-4xl font-bold text-white-pure mb-2">{PRODUCT.title}</h1>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <span className="text-3xl font-bold text-orange-brand">₹{PRODUCT.price}</span>
                                        <div className="flex items-center text-gold-highlight">
                                            <Star size={16} fill="currentColor" />
                                            <Star size={16} fill="currentColor" />
                                            <Star size={16} fill="currentColor" />
                                            <Star size={16} fill="currentColor" />
                                            <Star size={16} fill="currentColor" />
                                            <span className="ml-2 text-sm text-cream-offwhite/60">(128 Reviews)</span>
                                        </div>
                                    </div>
                                    <p className="text-cream-offwhite/80 leading-relaxed">
                                        {PRODUCT.description}
                                    </p>
                                </div>

                                {/* Variants */}
                                <div>
                                    <label className="block text-sm font-bold text-cream-offwhite mb-3">Variant</label>
                                    <div className="flex flex-wrap gap-3">
                                        {PRODUCT.variants.map((variant) => (
                                            <button
                                                key={variant}
                                                onClick={() => setSelectedVariant(variant)}
                                                className={cn(
                                                    "px-6 py-2 rounded-full border-2 font-semibold transition-all",
                                                    selectedVariant === variant
                                                        ? "bg-orange-brand border-orange-brand text-white-pure"
                                                        : "border-white-pure/20 text-cream-offwhite hover:border-orange-brand"
                                                )}
                                            >
                                                {variant}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity & ATC */}
                                <div className="flex gap-4">
                                    <div className="flex items-center border-2 border-white-pure/20 rounded-md">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="p-3 text-white-pure hover:text-orange-brand transition-colors"
                                        >
                                            <Minus size={20} />
                                        </button>
                                        <span className="w-12 text-center font-bold text-lg text-white-pure">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="p-3 text-white-pure hover:text-orange-brand transition-colors"
                                        >
                                            <Plus size={20} />
                                        </button>
                                    </div>
                                    <Button className="flex-1 py-4 text-lg">Add to Cart</Button>
                                </div>

                                {/* Trust Badges */}
                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white-pure/10">
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <Leaf className="text-orange-brand" size={24} />
                                        <span className="text-xs text-cream-offwhite/60">Authentic Bihari Recipe</span>
                                    </div>
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <Clock className="text-orange-brand" size={24} />
                                        <span className="text-xs text-cream-offwhite/60">Ships in 24 Hrs</span>
                                    </div>
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <ShieldCheck className="text-orange-brand" size={24} />
                                        <span className="text-xs text-cream-offwhite/60">Secure Checkout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Ingredients & Nutrition */}
            <section className="py-24 bg-cream-offwhite text-purple-royal">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Wholesome Ingredients</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Check className="text-orange-brand mt-1 mr-3" size={20} />
                                    <div>
                                        <strong className="block text-lg">No Artificial Preservatives</strong>
                                        <span className="text-purple-royal/70">Just pure, natural goodness.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-orange-brand mt-1 mr-3" size={20} />
                                    <div>
                                        <strong className="block text-lg">Roasted, Not Fried</strong>
                                        <span className="text-purple-royal/70">A healthier alternative to traditional snacks.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-orange-brand mt-1 mr-3" size={20} />
                                    <div>
                                        <strong className="block text-lg">Direct Sourcing</strong>
                                        <span className="text-purple-royal/70">We work directly with farmers in Bihar.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Nutritional Facts</h2>
                            <div className="bg-white-pure p-6 rounded-xl shadow-sm border border-purple-secondary/10">
                                <h3 className="font-bold border-b border-purple-secondary/10 pb-2 mb-4">Nutritional Facts</h3>
                                <div className="space-y-3">
                                    {PRODUCT.nutrition.map((item) => (
                                        <div key={item.label} className="flex justify-between text-sm">
                                            <span className="text-purple-royal/70">{item.label}</span>
                                            <span className="font-semibold">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Sticky Mobile ATC */}
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: showStickyAtc ? 0 : '100%' }}
                transition={{ type: 'tween' }}
                className="fixed bottom-0 left-0 right-0 bg-purple-royal border-t border-white-pure/10 p-4 z-40 md:hidden shadow-2xl"
            >
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h4 className="font-bold text-white-pure text-sm line-clamp-1">{PRODUCT.title}</h4>
                        <span className="text-orange-brand font-bold">₹{PRODUCT.price}</span>
                    </div>
                    <Button size="sm" className="px-8">Add</Button>
                </div>
            </motion.div>

            <Footer />
        </main>
    );
}
