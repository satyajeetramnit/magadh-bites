import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Container } from '@/components/ui/Container';

export function Footer() {
    return (
        <footer className="bg-maroon-deep text-white-pure pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="text-3xl font-bold font-heading">
                            Magadh Bites
                        </Link>
                        <p className="text-cream-offwhite/80 max-w-md">
                            Authentic, handcrafted snacks made from centuries-old recipes.
                            Experience the royal taste of Magadh, delivered to your doorstep.
                        </p>
                        <div className="space-y-4">
                            <h4 className="font-heading font-semibold text-lg">Join our Royal Court</h4>
                            <div className="flex gap-2 max-w-md">
                                <Input
                                    label="Email Address"
                                    id="newsletter-email"
                                    type="email"
                                    containerClassName="flex-1 pt-0"
                                    className="border-white-pure/20 focus:border-orange-brand text-white-pure"
                                />
                                <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-6 text-orange-brand">Shop</h4>
                        <ul className="space-y-3">
                            <li><Link href="/shop" className="text-cream-offwhite/80 hover:text-orange-brand transition-colors">All Products</Link></li>
                            <li><Link href="/shop?category=sweet" className="text-cream-offwhite/80 hover:text-orange-brand transition-colors">Sweet Traditions</Link></li>
                            <li><Link href="/shop?category=savory" className="text-cream-offwhite/80 hover:text-orange-brand transition-colors">Savory Crunch</Link></li>
                            <li><Link href="/shop?category=gift-boxes" className="text-cream-offwhite/80 hover:text-orange-brand transition-colors">Gift Boxes</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-6 text-orange-brand">Support</h4>
                        <ul className="space-y-3">
                            <li><Link href="/contact" className="text-cream-offwhite/80 hover:text-orange-brand transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping" className="text-cream-offwhite/80 hover:text-orange-brand transition-colors">Shipping Policy</Link></li>
                            <li><Link href="/returns" className="text-cream-offwhite/80 hover:text-orange-brand transition-colors">Returns & Refunds</Link></li>
                            <li><Link href="/privacy" className="text-cream-offwhite/80 hover:text-orange-brand transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white-pure/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-cream-offwhite/60">
                        © {new Date().getFullYear()} Magadh Bites. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-orange-brand hover:text-white-pure transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-orange-brand hover:text-white-pure transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-orange-brand hover:text-white-pure transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-orange-brand hover:text-white-pure transition-colors"><Youtube size={20} /></a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
