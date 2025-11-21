"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="pt-32 pb-24">
                <Container>
                    <div className="text-center mb-16">
                        <span className="text-gold-highlight font-bold tracking-widest uppercase text-sm mb-4 block">
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white-pure mb-6">
                            We'd Love to Hear from You
                        </h1>
                        <p className="text-xl text-cream-offwhite/80 max-w-2xl mx-auto">
                            Whether you have a question about our products, a bulk order inquiry, or just want to say hello.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="bg-purple-secondary p-8 rounded-xl border border-white-pure/10">
                                <h3 className="text-2xl font-bold text-white-pure mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-royal flex items-center justify-center text-orange-brand shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-cream-offwhite/60 mb-1">Email Us</p>
                                            <a href="mailto:hello@magadhbites.com" className="text-lg font-semibold text-white-pure hover:text-orange-brand transition-colors">
                                                hello@magadhbites.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-royal flex items-center justify-center text-orange-brand shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-cream-offwhite/60 mb-1">Call Us</p>
                                            <a href="tel:+919876543210" className="text-lg font-semibold text-white-pure hover:text-orange-brand transition-colors">
                                                +91 98765 43210
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-royal flex items-center justify-center text-orange-brand shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-cream-offwhite/60 mb-1">Visit Us</p>
                                            <p className="text-lg font-semibold text-white-pure">
                                                123, Heritage Lane, <br />
                                                Patna, Bihar - 800001
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-brand p-8 rounded-xl text-white-pure">
                                <h3 className="text-2xl font-bold mb-4">Wholesale Inquiries?</h3>
                                <p className="mb-6 opacity-90">
                                    Looking to stock Magadh Bites in your store? We offer special rates for bulk orders.
                                </p>
                                <Button variant="secondary" className="w-full border-white-pure text-white-pure hover:bg-white-pure hover:text-orange-brand">
                                    Partner with Us
                                </Button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white-pure p-8 md:p-12 rounded-xl shadow-2xl">
                                <h3 className="text-2xl font-bold text-purple-royal mb-8">Send us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input label="Your Name" id="name" />
                                        <Input label="Email Address" id="email" type="email" />
                                    </div>
                                    <Input label="Subject" id="subject" />
                                    <div className="relative pt-4">
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="block w-full rounded-md border border-purple-secondary bg-transparent px-3 py-2 text-base text-purple-royal placeholder-transparent focus:border-orange-brand focus:border-2 focus:outline-none transition-colors duration-200 peer"
                                            placeholder="Your Message"
                                        ></textarea>
                                        <label
                                            htmlFor="message"
                                            className="absolute left-3 top-6 -translate-y-1/2 text-base text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white-pure peer-focus:px-1 peer-focus:text-orange-brand peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white-pure peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-orange-brand"
                                        >
                                            Your Message
                                        </label>
                                    </div>

                                    <div className="pt-4">
                                        <Button className="w-full md:w-auto flex items-center justify-center">
                                            Send Message <Send size={18} className="ml-2" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
