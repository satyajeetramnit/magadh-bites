"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ui/ProductCard';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

// Mock Data
const PRODUCTS = [
    {
        id: "1",
        title: "Peri Peri Roasted Makhana",
        price: 249,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800",
        slug: "peri-peri-makhana",
        category: "makhana"
    },
    {
        id: "2",
        title: "Classic Thekua",
        price: 320,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
        slug: "classic-thekua",
        category: "sweet"
    },
    {
        id: "3",
        title: "Spicy Mathri",
        price: 199,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
        slug: "spicy-mathri",
        category: "savory"
    },
    {
        id: "4",
        title: "Gur Makhana",
        price: 299,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
        slug: "gur-makhana",
        category: "makhana"
    },
    {
        id: "5",
        title: "Sattu Ladoo",
        price: 349,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
        slug: "sattu-ladoo",
        category: "sweet"
    },
    {
        id: "6",
        title: "Nimki",
        price: 149,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
        slug: "nimki",
        category: "savory"
    }
];

const FILTERS = [
    { label: "Category", options: ["All", "Makhana", "Sweet", "Savory"] },
    { label: "Price Range", options: ["All", "Under ₹200", "₹200 - ₹500", "Above ₹500"] },
    { label: "Dietary", options: ["All", "Gluten Free", "Vegan", "Sugar Free"] }
];

export default function ShopPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Banner */}
            <section className="relative h-[400px] flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-purple-royal/80 z-10" />
                    <div
                        className="w-full h-full bg-[url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"
                    />
                </div>
                <div className="relative z-20 text-center">
                    <span className="text-gold-highlight font-bold tracking-widest uppercase text-sm mb-4 block">
                        Home / Snacks / All
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white-pure mb-4">
                        Our Collection
                    </h1>
                    <p className="text-cream-offwhite/80 max-w-xl mx-auto text-lg">
                        Explore our range of authentic, handcrafted Bihari snacks and sweets.
                    </p>
                </div>
            </section>

            {/* Filter & Sort Bar */}
            <div className="sticky top-[72px] z-30 bg-purple-secondary border-y border-white-pure/10 shadow-lg">
                <Container className="py-4">
                    <div className="flex items-center justify-between">
                        {/* Desktop Filters */}
                        <div className="hidden md:flex items-center space-x-4">
                            {FILTERS.map((filter) => (
                                <div key={filter.label} className="relative group">
                                    <button className="flex items-center space-x-2 text-white-pure hover:text-orange-brand transition-colors px-4 py-2 border border-white-pure/20 rounded-md">
                                        <span>{filter.label}</span>
                                        <ChevronDown size={16} />
                                    </button>
                                    {/* Dropdown would go here */}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Filter Button */}
                        <button
                            className="md:hidden flex items-center space-x-2 text-white-pure bg-orange-brand px-6 py-2 rounded-md font-bold uppercase tracking-wider w-full justify-center"
                            onClick={() => setIsFilterOpen(true)}
                        >
                            <Filter size={18} />
                            <span>Filter & Sort</span>
                        </button>

                        {/* Sort Dropdown */}
                        <div className="hidden md:block">
                            <button className="flex items-center space-x-2 text-white-pure hover:text-orange-brand transition-colors">
                                <span>Sort By</span>
                                <ChevronDown size={16} />
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Product Grid */}
            <section className="py-12">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                        {PRODUCTS.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 text-center">
                        <Button size="lg" className="min-w-[200px]">
                            Load More Products
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Mobile Filter Drawer */}
            <AnimatePresence>
                {isFilterOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                            onClick={() => setIsFilterOpen(false)}
                        />
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed bottom-0 left-0 right-0 bg-purple-royal z-50 rounded-t-2xl p-6 shadow-xl md:hidden max-h-[80vh] overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white-pure">Filters</h3>
                                <button onClick={() => setIsFilterOpen(false)} className="text-orange-brand">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="space-y-6">
                                {FILTERS.map((filter) => (
                                    <div key={filter.label} className="border-b border-white-pure/10 pb-4">
                                        <h4 className="font-bold text-gold-highlight mb-3">{filter.label}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {filter.options.map((option) => (
                                                <button
                                                    key={option}
                                                    className="px-3 py-1 rounded-full border border-white-pure/20 text-sm text-cream-offwhite hover:border-orange-brand hover:text-orange-brand transition-colors"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-4 border-t border-white-pure/10">
                                <Button className="w-full" onClick={() => setIsFilterOpen(false)}>
                                    Apply Filters
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
