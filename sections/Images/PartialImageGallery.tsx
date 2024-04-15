import { ImageWidget } from "apps/admin/widgets.ts"
import Icon, { AvailableIcons } from "deco-sites/gabriel-camp/components/ui/Icon.tsx"
import { PartialGallery } from "deco-sites/gabriel-camp/components/PartialGallery/index.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

interface Image {
    src: ImageWidget
    alt?: string
}

export interface Props {
    /** @description Título da sessão */
    title?: string
    /** @description Ao menos 3 imagens */
    images: Image[]
    page: number
    /** @description Botão "mostrar mais" */
    showMoreButton: {
        icon?: AvailableIcons
        text?: string
    }
}

// function createArrayPages(sourceArray: Image[]) {
//     const subArrays = []
//     const fullArray = sourceArray

//     do {
//         subArrays.push(fullArray.splice(0, 3))
//     } while (fullArray.length > 0)

//     return subArrays
// }

export default function PartialImageGallery({
    title,
    images,
    showMoreButton,
    page = 1
}: Props) {
    // const paginatedArray = createArrayPages(images)
    const shownImages = images.splice(0, page*3)

    return (
        <section class="p-4">
            {title && (
                <h2 class="text-xl text-gray-600 border-b mb-4">{title}</h2>
            )}

            <ul class="flex flex-wrap gap-2 mb-2">
                <PartialGallery images={shownImages} />
            </ul>

            <button
                class="flex gap-1 py-2 justify-center w-full bg-slate-100 rounded-md text-gray-500"
                {...usePartialSection({props: { page: page + 1 }})}
            >
                {showMoreButton.text && <span>{showMoreButton.text}</span>}
                {showMoreButton.icon && <span>{<Icon id={showMoreButton.icon || "Plus"} size={20} />}</span>}
            </button>
        </section>
    )
}
