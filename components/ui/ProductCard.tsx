import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
    id: string;
    title: string;
    price: number;
    image: string;
    slug: string;
    className?: string;
}

export function ProductCard({ id, title, price, image, slug, className }: ProductCardProps) {
    return (
        <div className={cn(
            "group relative flex flex-col bg-purple-secondary overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-brand/10 border border-transparent hover:border-orange-brand/30",
            className
        )}>
            {/* Image Container */}
            <Link href={`/products/${slug}`} className="relative aspect-square w-full overflow-hidden bg-purple-royal">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <Link href={`/products/${slug}`} className="mb-2">
                    <h3 className="text-lg font-bold font-heading text-white-pure line-clamp-2 group-hover:text-orange-brand transition-colors">
                        {title}
                    </h3>
                </Link>
                <div className="mt-auto flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-orange-brand">₹{price}</span>
                </div>
            </div>

            {/* Add to Cart Button - Full Width at Bottom */}
            <Button
                className="w-full rounded-none py-4 translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300"
            >
                Add to Cart
            </Button>
        </div>
    );
}
