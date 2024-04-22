import Icon from "deco-sites/gabriel-camp/components/ui/Icon.tsx";
import { alreadyLiked } from '../../sdk/useVotes.tsx'
import { ProductVotesApiResponse } from "deco-sites/gabriel-camp/loaders/productLikes.ts";
import { invoke } from "deco-sites/gabriel-camp/runtime.ts";
import { Bounce, toast } from 'react-toastify'

interface ProductLikeProps {
    votesCount: ProductVotesApiResponse | undefined
    productId: string
}

export function ErrorFallback({ error }: { error?: Error }) {
    console.log({
        ErrorFallback: error
    })

    return <ProductLike productId={''} votesCount={{ product: 0 }} />
}

const actionLikeProduct = invoke["deco-sites/gabriel-camp"].actions.likeProduct

function ProductLike({ votesCount, productId }: ProductLikeProps) {
    async function handleLike() {
        const actionResponse = await actionLikeProduct({
            productId
        })

        if (actionResponse) {
            console.log({
                actionResponse: "Success"
            })

            toast.success("Curtido", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            return
        }

        console.log({
            actionResponse: "Action error"
        })

        toast.success("Erro ao curtir produto", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

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
                onClick={() => handleLike()}
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
