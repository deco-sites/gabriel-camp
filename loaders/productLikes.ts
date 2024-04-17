export interface ProductVotesApiResponse {
    product: number
}

export interface productLikesProps {
    productId: string
}

export default async function productLikes(props: productLikesProps, _req: Request, _ctx: unknown): Promise<ProductVotesApiResponse | undefined> {
    const productVotesResponse = await fetch(`https://camp-api.deco.cx/event/${props.productId}`, {
        headers: {
            "x-api-key": "gabriel-camp"
        }
    })

    const productVotes = await productVotesResponse.json()

    return productVotes.product
}
