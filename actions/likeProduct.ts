export interface Props {
    productId: string
}

export interface Result {
    status: "ok" | "failure"
}

export default async function likeProduct(props: Props): Promise<Result> {
    const response = await fetch("https://camp-api.deco.cx/event", {
        method: "POST",
        body: JSON.stringify(props)
    })

    console.log(`Request sent: ${response.json()}`)

    return response.json()
}
