"use client";

import Image from "next/image";
import Link from "next/link";
import { type GalleryImageData } from "@/lib/get-images";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ImageGalleryProps {
  images: GalleryImageData[];
  columns?: number;
}

interface RowProps {
  images: GalleryImageData[];
  columnIndex: number;
  rows: number;
}

export function ImageGallery({
  images,
  columns = 4,
}: ImageGalleryProps): JSX.Element {
  const rows = Math.ceil(images.length / columns);

  return (
    <div
      key="gallery-columns"
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-4"
    >
      {Array.from({ length: columns }).map(
        (_: unknown, columnIndex: number): JSX.Element => {
          const key = `gallery-rows-${columnIndex.toString()}`;

          return (
            <GalleryImage
              key={key}
              images={images}
              rows={rows}
              columnIndex={columnIndex}
            />
          );
        },
      )}
    </div>
  );
}

function GalleryImage({ images, rows, columnIndex }: RowProps): JSX.Element {
  return (
    <div className="grid gap-4" key={`column-${columnIndex.toString()}-row`}>
      {Array.from({ length: rows })
        .map((_: unknown, rowIndex: number): JSX.Element | null => {
          const imgIndex = columnIndex * rows + rowIndex;
          const image = images[imgIndex] as GalleryImageData | undefined;

          if (!image) {
            return null;
          }

          const { id, url, title } = image;

          return (
            <Dialog key={`image-${id}`}>
              <DialogTrigger asChild>
                <Image
                  height={500}
                  width={500}
                  src={url}
                  alt={title}
                  className="h-auto max-w-full z-10 rounded-lg border-4 transition-transform opacity-90 hover:opacity-100 hover:z-40 duration-500 ease-in-out border-slate-100 hover:scale-105 hover:shadow-2xl shadow-md shadow-slate-500/50"
                />
              </DialogTrigger>
              <DialogContent className="max-w-[65%]">
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                  <DialogDescription>Description here</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 py-4">
                  <Image
                    height={800}
                    width={800}
                    src={url}
                    alt={title}
                    className="rounded-lg"
                  />
                  Some description here
                </div>
                <DialogFooter>
                  <div>
                    <Button type="button" variant="outline">
                      <Link target="_blank" href={url}>
                        Learn more
                      </Link>
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          );
        })
        .filter((i) => Boolean(i))}
    </div>
  );
}
