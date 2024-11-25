import { ImageGallery } from "@/components/image-gallery";
import getImages from "@/lib/get-images";

export default async function Home(): Promise<JSX.Element> {
  const images = await getImages();

  return (
    <main className="flex w-screen h-screen">
      <ImageGallery images={images} />
    </main>
  );
}
