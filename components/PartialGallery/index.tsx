import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx"

interface Image {
    src: ImageWidget
    alt?: string
}

interface PartialGalleryProps {
    images: Image[]
}



export function PartialGallery({ images }: PartialGalleryProps) {

    return (
        <>
            {images.map((pageImages: Image) => (
                <li>
                    <Image class="w-full h-auto rounded-md" width={334} height={200} src={pageImages.src} alt={pageImages.alt} />
                </li>
            ))}
        </>
    )
}
