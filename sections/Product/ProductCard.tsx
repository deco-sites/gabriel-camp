import { Section } from "deco/blocks/section.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  section: Section;
  image: {
    src: ImageWidget;
    alt?: string;
    href?: string;
  };
}

export default function ProductCard({ section, image }: Props) {
  return (
    <section>
    </section>
  );
}
