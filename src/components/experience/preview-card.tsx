import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export interface CardDetails {
  title: string;
  subtitle: string;
  description: string;
  src: string;
}

interface PreviewCardProps extends CardDetails {
  footer?: JSX.Element;
}

export function PreviewCard<T extends PreviewCardProps>({
  title,
  subtitle,
  description,
  src,
  footer,
}: T): JSX.Element {
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          alt={title}
          src={src}
          width={300}
          height={200}
          className="rounded-md"
        />
        <p className="mt-2 text-sm">{description}</p>
      </CardContent>
      {footer && (
        <CardFooter className="flex justify-between">{footer}</CardFooter>
      )}
    </Card>
  );
}
