"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Leaf, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Mock Data
const BESTSELLERS = [
  {
    id: "1",
    title: "Peri Peri Roasted Makhana",
    price: 249,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800",
    slug: "peri-peri-makhana"
  },
  {
    id: "2",
    title: "Classic Thekua",
    price: 320,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    slug: "classic-thekua"
  },
  {
    id: "3",
    title: "Spicy Mathri",
    price: 199,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    slug: "spicy-mathri"
  },
  {
    id: "4",
    title: "Gur Makhana",
    price: 299,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    slug: "gur-makhana"
  }
];

const CATEGORIES = [
  {
    id: "1",
    title: "Makhana Superfood",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800",
    link: "/shop?category=makhana"
  },
  {
    id: "2",
    title: "Sweet Traditions",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    link: "/shop?category=sweet"
  },
  {
    id: "3",
    title: "Savory Crunch",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    link: "/shop?category=savory"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <Container className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-highlight font-bold tracking-widest uppercase text-sm mb-4 block">
                Taste the Heritage of Bihar
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
                The Royal Taste of <span className="text-orange-brand">Magadh</span>, Delivered.
              </h1>
              <p className="text-cream-offwhite/80 text-lg leading-relaxed mb-8">
                Authentic, handcrafted snacks made from centuries-old recipes.
                Experience the crunch of tradition in every bite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg">Shop Bestsellers</Button>
                <Button variant="secondary" size="lg">Our Story</Button>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=1200"
                  alt="Magadh Bites Hero"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-cream-offwhite text-purple-royal p-6 rounded-full shadow-xl hidden lg:block">
                  <div className="text-center">
                    <span className="block text-3xl font-bold">100%</span>
                    <span className="text-sm font-semibold uppercase">Natural</span>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-brand/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </Container>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-purple-secondary/50 border-y border-white-pure/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-royal flex items-center justify-center text-orange-brand border border-white-pure/10">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold">Authentic Recipes</h3>
              <p className="text-cream-offwhite/60 text-sm max-w-xs">
                Passed down through generations, keeping the true taste of Magadh alive.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-royal flex items-center justify-center text-orange-brand border border-white-pure/10">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold">Premium Ingredients</h3>
              <p className="text-cream-offwhite/60 text-sm max-w-xs">
                Sourced directly from local farmers to ensure the highest quality.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-royal flex items-center justify-center text-orange-brand border border-white-pure/10">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold">Handcrafted with Love</h3>
              <p className="text-cream-offwhite/60 text-sm max-w-xs">
                Made in small batches to maintain the authentic homemade taste.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Bestsellers */}
      <section className="py-24">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-orange-brand font-bold tracking-widest uppercase text-sm mb-2 block">
                Customer Favorites
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Our Most Loved Bites</h2>
            </div>
            <Link href="/shop" className="hidden md:flex items-center text-orange-brand font-semibold hover:text-white-pure transition-colors">
              View All <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BESTSELLERS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="secondary" className="w-full">View All Products</Button>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-cream-offwhite text-purple-royal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-brand via-purple-royal to-orange-brand"></div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&q=80&w=1200"
                  alt="Making of Thekua"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-brand rounded-full flex items-center justify-center p-4 text-center shadow-xl hidden lg:flex">
                <p className="text-white-pure font-heading font-bold text-lg">
                  Since <br /><span className="text-4xl">1985</span>
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Roots Deep in History.</h2>
              <p className="text-lg text-purple-royal/80 mb-6 leading-relaxed">
                We don't just make snacks; we preserve memories. Magadh Bites was born from a desire to share the royal culinary heritage of Bihar with the world.
              </p>
              <p className="text-lg text-purple-royal/80 mb-8 leading-relaxed">
                From the wetlands where Makhana is harvested to the traditional clay ovens where Thekua is baked, every step of our process honors the ancient methods of our ancestors.
              </p>
              <Button className="bg-purple-royal text-white-pure hover:bg-purple-secondary">
                Read Our Full Journey
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop By Category</h2>
            <p className="text-cream-offwhite/60 max-w-2xl mx-auto">
              Explore our wide range of traditional snacks, from healthy superfoods to indulgent sweets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={category.link}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-royal/90 via-purple-royal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white-pure mb-2">{category.title}</h3>
                  <span className="text-orange-brand font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Explore <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream-offwhite">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-royal mb-4">What Our Royals Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white-pure p-8 rounded-xl shadow-lg border border-purple-secondary/10">
                <div className="flex text-orange-brand mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-purple-royal/80 mb-6 italic">
                  "Absolutely authentic taste! Reminds me of my grandmother's cooking. The Makhana is perfectly roasted and the spices are just right."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-secondary/20 flex items-center justify-center text-purple-royal font-bold mr-3">
                    RK
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-royal text-sm">Rahul Kumar</h4>
                    <span className="text-xs text-purple-royal/60">Verified Buyer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
