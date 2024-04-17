import Icon from "deco-sites/gabriel-camp/components/ui/Icon.tsx";
import { alreadyLiked } from '../../sdk/useVotes.tsx'
import { ProductVotesApiResponse } from "deco-sites/gabriel-camp/loaders/productLikes.ts";
import { Result } from "deco-sites/gabriel-camp/actions/likeProduct.ts";

interface ProductLikeProps {
    votesCount: ProductVotesApiResponse | undefined
    sendLike?: Promise<Result>
}

export function ErrorFallback({ error }: { error?: Error }) {
    console.log({error})

    return <ProductLike votesCount={{ product: 13 }} />
}

function ProductLike({ votesCount }: ProductLikeProps) {
    console.log(`ProductLike in island: ${votesCount}`)

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
