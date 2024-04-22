import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { formatPrice } from "deco-sites/gabriel-camp/sdk/format.ts";
import ProductLike from "deco-sites/gabriel-camp/islands/ProductLike/index.tsx";
import { ProductVotesApiResponse } from "deco-sites/gabriel-camp/loaders/productLikes.ts";
import { ProductListingPage } from "apps/commerce/types.ts";

interface ButtonProps {
    text?: string;
}
export interface Props {
    addToCartButton: ButtonProps;
    wishlistButton: ButtonProps;
    productVotes: ProductVotesApiResponse | undefined;
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
    productDetails: ProductListingPage | null;
    productSearchPosition: number;
}

export function LoadingFallback() {
    return (
        <section
            id="ProductCard"
            class="w-full container py-8 flex flex-col gap-6 pb-16"
        >
            <h1>Loading card...</h1>
        </section>
    );
}

export function ErrorFallback({ error }: { error?: Error }) {
    return (
        <section
            class="w-full container py-8 flex flex-col gap-6 pb-16"
        >
            <h1>Something went wrong</h1>
        </section>
    );
}

export default function ProductCard({
    addToCartButton,
    wishlistButton,
    maxScreenSize,
    animateImage,
    productVotes,
    productDetails,
    productSearchPosition = 0
}: Props) {
    if (!productDetails) {
        return <ErrorFallback />
    }

    const { productID, name, image, offers, description } = productDetails.products[productSearchPosition]

    const productImg = image ? image[0] : {
        url: 'https://placehold.co/205x137?',
        alternateName: 'product image'
    }

    return (
        <section
            class="w-full py-1 mb-16"
        >
            <div class={`p-2 flex gap-2 items-center lg:items-start border border-slate-200 rounded-lg overflow-ellipsis mx-1 md:mx-auto ${maxScreenSize}`}>
                <div class="rounded-md pr-2 min-w-36 w-32 h-32 flex items-center justify-center overflow-hidden md:w-44 md:h-auto lg:w-64 lg:h-auto">
                    <Image
                        class={`h-auto w-full ${animateImage && 'hover:scale-150 transition'}`}
                        src={productImg.url || 'https://placehold.co/205x137'}
                        width={205}
                        height={137}
                    />
                </div>

                <div class="flex flex-col gap-1">
                    <div class="flex flex-col">
                        <h1 class="font-bold text-base lg:text-xl overflow-ellipsis">{name}</h1>
                    </div>

                    <p class="flex-1 align-bottom text-sm overflow-ellipsis">{description}</p>

                    <ProductLike votesCount={productVotes} productId={productID} />
                </div>

                <div class="flex flex-col gap-1 justify-between border-l border-slate-200 pl-2 md:w-40">
                    <div class="flex flex-col flex-1 md:flex-row gap-1 md:items-center">
                        <strong class="text-base font-normal md:text-lg">{formatPrice(offers?.lowPrice)}</strong>
                        <small class="line-through text-xs md:text-base text-slate-400">
                            {formatPrice(offers?.highPrice)}
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
