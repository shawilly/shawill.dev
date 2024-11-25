"use server";

import { list, type ListBlobResult } from "@vercel/blob";

export interface GalleryImageData {
  title: string;
  id: string;
  url: string;
}

export default async function getImages(): Promise<GalleryImageData[]> {
  let imageList: ListBlobResult;

  try {
    imageList = await list();
  } catch (e) {
    throw new Error(
      `Failed to retrieve images from blob storage. ${(e as Error).message}`,
    );
  }

  const images: GalleryImageData[] = imageList.blobs
    .map(({ pathname, url }) => {
      const id = pathname.split("/")[1];

      if (!id) {
        return null;
      }

      const titleParts = id.split(".")[0].split("-");
      const title = titleParts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

      const image: GalleryImageData = {
        title,
        id,
        url,
      };

      return image;
    })
    .filter((i): i is GalleryImageData => i !== null);

  return images;
}
