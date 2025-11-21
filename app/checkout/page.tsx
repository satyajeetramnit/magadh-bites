"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Trash2, Lock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Mock Cart Data
const CART_ITEMS = [
    {
        id: "1",
        title: "Peri Peri Roasted Makhana",
        price: 249,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=200",
        variant: "100g"
    },
    {
        id: "2",
        title: "Classic Thekua",
        price: 320,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=200",
        variant: "500g"
    }
];

export default function CheckoutPage() {
    const [step, setStep] = useState<'cart' | 'shipping' | 'payment'>('cart');

    const subtotal = CART_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 49;
    const total = subtotal + shipping;

    return (
        <main className="min-h-screen bg-cream-offwhite">
            {/* Simplified Header for Checkout */}
            <header className="bg-purple-royal py-4 sticky top-0 z-50">
                <Container>
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-heading font-bold text-white-pure">
                            Magadh<span className="text-orange-brand">Bites</span>
                        </Link>
                        <div className="flex items-center text-white-pure/80 text-sm">
                            <Lock size={16} className="mr-2" />
                            Secure Checkout
                        </div>
                    </div>
                </Container>
            </header>

            <div className="py-12">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left Column: Forms / Cart Review */}
                        <div className="lg:col-span-7 order-2 lg:order-1">
                            {/* Breadcrumb / Back */}
                            <div className="mb-8">
                                <Link href="/shop" className="flex items-center text-purple-royal/60 hover:text-orange-brand transition-colors">
                                    <ArrowLeft size={16} className="mr-2" />
                                    Continue Shopping
                                </Link>
                            </div>

                            <div className="bg-white-pure p-8 rounded-xl shadow-lg border border-purple-secondary/10">
                                <h2 className="text-2xl font-bold text-purple-royal mb-8">Shipping Details</h2>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input label="First Name" id="firstName" />
                                        <Input label="Last Name" id="lastName" />
                                    </div>
                                    <Input label="Email Address" id="email" type="email" />
                                    <Input label="Phone Number" id="phone" type="tel" />
                                    <Input label="Address Line 1" id="address1" />
                                    <Input label="Apartment, Suite, etc. (Optional)" id="address2" />
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <Input label="City" id="city" />
                                        <Input label="State" id="state" />
                                        <Input label="PIN Code" id="pincode" />
                                    </div>

                                    <div className="pt-6">
                                        <Button className="w-full md:w-auto">Continue to Payment</Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="lg:col-span-5 order-1 lg:order-2">
                            <div className="bg-purple-royal text-white-pure p-8 rounded-xl shadow-2xl sticky top-24">
                                <h3 className="text-xl font-bold mb-6 border-b border-white-pure/10 pb-4">Order Summary</h3>

                                <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    {CART_ITEMS.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="relative w-16 h-16 rounded-md overflow-hidden bg-white-pure flex-shrink-0">
                                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                                                <span className="absolute top-0 right-0 bg-orange-brand text-xs font-bold px-1.5 py-0.5 rounded-bl-md">
                                                    {item.quantity}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-sm line-clamp-1">{item.title}</h4>
                                                <p className="text-xs text-cream-offwhite/60">{item.variant}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">₹{item.price * item.quantity}</p>
                                                <button className="text-xs text-red-400 hover:text-red-300 flex items-center justify-end mt-1">
                                                    <Trash2 size={12} className="mr-1" /> Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 border-t border-white-pure/10 pt-4 text-sm">
                                    <div className="flex justify-between text-cream-offwhite/80">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-cream-offwhite/80">
                                        <span>Shipping</span>
                                        <span>₹{shipping}</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-xl pt-4 border-t border-white-pure/10 text-gold-highlight">
                                        <span>Total</span>
                                        <span>₹{total}</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center justify-center text-xs text-cream-offwhite/40 mb-4">
                                        <Lock size={12} className="mr-1" />
                                        Guaranteed Safe Checkout
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Footer />
        </main>
    );
}
