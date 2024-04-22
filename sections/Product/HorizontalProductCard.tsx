import type { Product } from "apps/commerce/types.ts";
import { HorizontalProductCard } from "deco-sites/gabriel-camp/components/product/HorizontalProductCard.tsx";
import Image from "apps/website/components/Image.tsx";

interface Props {
    products?: Product[] | null;
    imageAnimate?: boolean;
}

export function ErrorFallback({ error }: { error?: Error }) {
    console.log({error})

    return (
        <div class="container bg-primary text-center items-center md:flex md:flex-row rounded p-5 mt-3 xl:max-w-5xl">
            <Image
                src="https://placehold.co/246x164"
                width={246}
                height={164}
                class="bg-base-100 rounded mx-auto lg:mr-8 md:w-1/4 hover:scale-110"
            />
            <div class={"flex flex-col max-w-96 m-auto"}>
                <h3 class={"font-bold text-lg"}>Error Fallback</h3>
                <p>
                    Error fallback Error fallback Error fallback Error fallback Error fallback
                </p>
                <a class={"btn"} href="/culturas">Saiba Mais</a>
            </div>
        </div>
    );
}

export function LoadingFallback() {
    return (
        <div class="container bg-primary items-center md:flex rounded p-5 mt-3 xl:max-w-5xl">
            <Image
                src="https://placehold.co/246x164"
                width={246}
                height={164}
                class="rounded md:w-1/4"
            />
            <p>Loading fallback</p>
        </div>
    );
}

export default function SectionHorizontalCard({
    products,
    imageAnimate = true,
}: Props) {
    if (!products) return null;

    return (
        <div
            class={`flex flex-col container bg-primary text-center rounded p-5 mt-3 md:flex-row xl:max-w-6xl`}
            data-deco="view-product"
        >
            {products.map((product) => (
                <HorizontalProductCard product={product} imageAnimate={imageAnimate} />
            ))}
        </div>
    );
}
