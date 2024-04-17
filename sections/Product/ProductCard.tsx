import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { formatPrice } from "deco-sites/gabriel-camp/sdk/format.ts";
import ProductLike from "deco-sites/gabriel-camp/islands/ProductLike/index.tsx";
import { ProductVotesApiResponse } from "deco-sites/gabriel-camp/loaders/productLikes.ts";
import likeProduct from "deco-sites/gabriel-camp/actions/likeProduct.ts";
import { invoke } from "deco-sites/gabriel-camp/runtime.ts";

interface ButtonProps {
    text?: string;
}
export interface Props {
    price: {
        salePrice: number;
        fullPrice: number;
    };
    name: string;
    tags: string[];
    description: string;
    addToCartButton: ButtonProps;
    wishlistButton: ButtonProps;
    productVotes: ProductVotesApiResponse | undefined;
    productId: string
    image: {
        src: ImageWidget;
        alt?: string;
        href?: string;
    };
    maxScreenSize:
        "max-w-xl" |
        "max-w-2xl" |
        "max-w-3xl" |
        "max-w-4xl" |
        "max-w-5xl" |
        "max-w-6xl" |
        "max-w-7xl" |
        "max-w-full";
    animateImage: boolean;
}

export function LoadingFallback() {
    return (
        <section
            id="ProductCard"
            class="w-full container py-8 flex flex-col gap-6 pb-16"
        >
            <div class="p-4 flex flex-col sm:flex-row gap-4 max-w-4xl border border-slate-100 rounded-lg">
                <Image
                    class="rounded-lg h-36"
                    src={"https://placehold.co/205x137"}
                    alt={"Não foi possível renderizar corretamente o componente"}
                    width={205}
                    height={137}
                />

                <div class="flex flex-col gap-2 flex-1">
                    <h1 class="font-bold text-2xl">
                        Carregando produto ...
                    </h1>
                    <small class="text-slate-500 text-sm">
                        loading - product - tags
                    </small>
                    <p class="flex-1 align-bottom">
                        ...
                    </p>
                </div>

                <div class="flex flex-col justify-between border-l border-slate-200 pl-2">
                    <div class="flex gap-2 items-center">
                        <strong class="text-2xl font-normal">R$100,00</strong>
                    </div>

                    <div class="flex flex-col gap-2">
                        <a
                            href="/culturas"
                            class="bg-emerald-400 text-white text-lg font-bold border border-emerald-400 w-full py-2 rounded-lg"
                        >
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function ErrorFallback({ error }: { error?: Error }) {
    return (
        <section
            class="w-full container py-8 flex flex-col gap-6 pb-16"
        >
            <div class="p-4 flex flex-col sm:flex-row gap-4 max-w-4xl border border-slate-100 rounded-lg">
                <Image
                    class="rounded-lg h-36"
                    src={"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/5670/74675198-ad6d-4416-bcaa-1c94bbf71161"}
                    alt={"Não foi possível renderizar corretamente o componente"}
                    width={205}
                    height={137}
                />

                <div class="flex flex-col gap-2 flex-1">
                    <h1 class="font-bold text-2xl">
                        Meu produto com erro
                    </h1>
                    <small class="text-slate-500 text-sm">
                        erro - erro - erro
                    </small>
                    <p class="flex-1 align-bottom">
                        {error}
                    </p>
                </div>

                <div class="flex flex-col justify-between border-l border-slate-200 pl-2">
                    <div class="flex gap-2 items-center">
                        <strong class="text-2xl font-normal">R$100,00</strong>
                    </div>

                    <div class="flex flex-col gap-2">
                        <a
                            href="/culturas"
                            class="bg-emerald-400 text-white text-lg font-bold border border-emerald-400 w-full py-2 rounded-lg"
                        >
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ProductCard({
    name,
    tags,
    description,
    price,
    image,
    addToCartButton,
    wishlistButton,
    maxScreenSize,
    animateImage,
    productVotes,
    productId
}: Props) {
    console.log(productVotes);

    return (
        <section
            class="w-full py-1 mb-16"
        >
            <div class={`p-2 flex gap-2 items-center lg:items-start border border-slate-200 rounded-lg overflow-ellipsis mx-1 md:mx-auto ${maxScreenSize}`}>
                <div class="rounded-md pr-2 min-w-36 w-32 h-32 flex items-center justify-center overflow-hidden md:w-44 md:h-auto lg:w-64 lg:h-auto">
                    <Image
                        class={`h-auto w-full ${animateImage && 'hover:scale-150 transition'}`}
                        src={image.src}
                        alt={image.alt}
                        width={205}
                        height={137}
                    />
                </div>

                <div class="flex flex-col gap-1">
                    <div class="flex flex-col">
                        <h1 class="font-bold text-base lg:text-xl overflow-ellipsis">{name}</h1>
                        <small class="text-slate-500 text-xs lg:text-sm">
                            {tags.map((tag, index) => (
                                `${tag} ${index < tags.length - 1 ? "- " : ""}`
                            ))}
                        </small>
                    </div>

                    <p class="flex-1 align-bottom text-sm overflow-ellipsis">{description}</p>

                    <ProductLike votesCount={productVotes} productId={productId} />
                </div>

                <div class="flex flex-col gap-1 justify-between border-l border-slate-200 pl-2 md:w-40">
                    <div class="flex flex-col flex-1 md:flex-row gap-1 md:items-center">
                        <strong class="text-base font-normal md:text-lg">{formatPrice(price.salePrice)}</strong>
                        <small class="line-through text-xs md:text-base text-slate-400">
                            {formatPrice(price.fullPrice, )}
                        </small>
                    </div>

                    <div class="flex flex-col gap-2">
                        <button class="bg-emerald-400 text-white text-xs md:text-base font-bold border border-emerald-400 w-full py-2 rounded-md">
                            {addToCartButton.text ?? "Comprar"}
                        </button>
                        <button class="text-emerald-400 text-xs md:text-base font-bold border border-emerald-400 w-full py-2 rounded-md">
                            {wishlistButton.text ?? "Favoritar"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
