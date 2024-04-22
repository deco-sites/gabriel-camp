import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  campaign: string;
}

/**
 * @title Campanha
 * @description Campanha UTM
 */
export default function Utm({ campaign }: Props, ctx: MatchContext) {
  const url = new URL(ctx.request.url);
  return url.searchParams.get("utmcampaign") === campaign ?? false;
}
