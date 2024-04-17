import Icon from "deco-sites/gabriel-camp/components/ui/Icon.tsx";
import { alreadyLiked } from '../../sdk/useVotes.tsx'
import { ProductVotesApiResponse } from "deco-sites/gabriel-camp/loaders/productLikes.ts";
import { invoke } from "deco-sites/gabriel-camp/runtime.ts";

interface ProductLikeProps {
    votesCount: ProductVotesApiResponse | undefined
    productId: string
}

export function ErrorFallback({ error }: { error?: Error }) {
    console.log({error})

    return <ProductLike productId={''} votesCount={{ product: 13 }} />
}

function ProductLike({ votesCount, productId }: ProductLikeProps) {
    return (
        <div class="flex gap-3 items-center">
            <button
                class={
                    `border-0
                    ${alreadyLiked.value
                        ? "text-emerald-500 hover:text-emerald-600"
                        : "text-slate-400 hover:text-slate-500"
                    }
                    transition-all`}
                onClick={() => {
                    console.log('Like button clicked')

                    invoke["deco-sites/gabriel-camp"].actions.likeProduct({ productId })
                }}
            >
                <Icon id={alreadyLiked.value ? "IconMoodCheck" : "IconMoodSmile"} size={24} />
            </button>

            <div class="flex gap-1 text-slate-400">
                <Icon id="IconFriends" size={24} />
                <span>{votesCount}</span>
            </div>
        </div>
    )
}

export default ProductLike
