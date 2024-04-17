export interface Props {
    productId: string
}

export default async function likeProduct({ productId }: Props) {
    const response = await fetch("https://camp-api.deco.cx/event", {
        method: "POST",
        headers: {
            "x-api-key": "gabriel-camp"
        },
        body: JSON.stringify({ "productId": productId })
    })

    console.log(`Request sent: ${response.json()}`)
}
