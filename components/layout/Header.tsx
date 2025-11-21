"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/shop', label: 'Shop' },
        { href: '/about', label: 'Our Story' },
        { href: '/process', label: 'Process' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-purple-secondary shadow-lg py-2" : "bg-transparent py-4"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-orange-brand"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu size={28} />
                </button>

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold font-heading text-white-pure">
                    Magadh Bites
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white-pure hover:text-orange-brand transition-colors font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <Link href="/cart" className="text-orange-brand hover:text-white-pure transition-colors relative">
                        <ShoppingCart size={24} />
                        <span className="absolute -top-2 -right-2 bg-white-pure text-purple-royal text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </Link>
                    <div className="hidden lg:block">
                        <Button size="sm">Shop Now</Button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-purple-royal z-50 p-6 shadow-xl lg:hidden"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-2xl font-bold font-heading text-white-pure">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-orange-brand"
                                >
                                    <X size={28} />
                                </button>
                            </div>
                            <nav className="flex flex-col space-y-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-xl text-white-pure font-medium hover:text-orange-brand transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                                    Shop Now
                                </Button>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
