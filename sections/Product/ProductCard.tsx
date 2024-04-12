import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    price: {
        salePrice: number
        fullPrice: number
    }
    name: string
    tags: string[]
    description: string
    image: {
        src: ImageWidget
        alt?: string
        href?: string
    };
}

export default function ProductCard({ name, tags, description, price, image }: Props) {
    return (
        <section id="ProductCard" class="w-full container py-8 flex flex-col gap-6 pb-16">
            <div class="p-4 flex flex-col sm:flex-row gap-4 max-w-4xl border border-slate-100 rounded-lg">
                <Image
                    class="rounded-lg h-36"
                    src={image.src}
                    alt={image.alt}
                    width={205}
                    height={137}
                />

                <div class="flex flex-col gap-2 flex-1">
                    <h1 class="font-bold text-2xl">{name}</h1>
                    <small class="text-slate-500 text-sm">
                        {tags.map((tag, index) => (
                            `${tag} ${index < tags.length - 1 ? '- ' : ''}`
                        ))}
                    </small>
                    <p class="flex-1 align-bottom">{description}</p>
                </div>

                <div class="flex flex-col justify-between border-l border-slate-200 pl-2">
                    <div class="flex gap-2 items-center">
                        <strong class="text-2xl font-normal">R${price.salePrice}</strong>
                        <small class="line-through text-slate-400">R${price.fullPrice}</small>
                    </div>

                    <div class="flex flex-col gap-2">
                        <button class="bg-emerald-400 text-white text-lg font-bold border border-emerald-400 w-full py-2 rounded-lg">
                            Comprar
                        </button>
                        <button class="text-emerald-400 text-lg font-bold border border-emerald-400 w-full py-2 rounded-lg">
                            Favoritar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
