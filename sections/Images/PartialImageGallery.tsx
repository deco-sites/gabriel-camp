import { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "deco-sites/gabriel-camp/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

interface Image {
  src: ImageWidget;
  alt?: string;
}

export interface Props {
  /** @description Título da sessão */
  title?: string
  /** @description Ao menos 3 imagens */
  images: Image[];
  /** @description Botão "mostrar mais" */
  showMoreButton: {
    icon?: AvailableIcons
    text?: string
  }
}

export default function PartialImageGallery({ title, images, showMoreButton }: Props) {
  return (
    <section class="p-4">
      {title && (
        <h2 class="text-xl text-gray-600 border-b mb-4">{ title }</h2>
      )}
      <ul class="flex flex-wrap gap-2 mb-2">
        {images.length >= 3 && images.map(image => (
          <li>
            <Image class="w-auto h-52 rounded-md" width={334} height={200} src={image.src} alt={image.alt} />
          </li>
        ))}
      </ul>
      <button class="flex gap-1 py-2 justify-center w-full bg-slate-100 rounded-md text-gray-500">
        {showMoreButton.text && <span>{ showMoreButton.text }</span>}
        {showMoreButton.icon && <span>{ <Icon id={showMoreButton.icon || "Plus"} size={20} /> }</span>}
      </button>

    </section>
  )
}
