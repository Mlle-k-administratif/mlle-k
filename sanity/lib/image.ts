import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: SanityImageSource) => {
  return builder.image(source).auto('format').fit('max').url()
}

export function buildImageUrl(imageRef: string, width: number = 1200, height: number = 630): string {
  if (!imageRef) return '';
  
  return builder.image(imageRef)
    .width(width)
    .height(height)
    .fit('crop')
    .url();
}
