import { AppContext } from "deco-sites/gabriel-camp/apps/site.ts";

interface VotesProduct {
  productId: string;
}

export default async function loader(
  props: VotesProduct,
  _req: Request,
  _ctx: AppContext,
) {
  const res = await fetch(`https://camp-api.deco.cx/event/${props.productId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "gabriel-camp",
      },
    },
  );

  return res.json();
}
