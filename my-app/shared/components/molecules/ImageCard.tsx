import Image from "next/image";
import Link from "next/link";
import Title from "../atoms/Title";

interface Props {
  src: string;
  alt: string;
  href: string;
  title : string;
}

const ImageCard = ({ src, alt, href, title }: Props) => {
  return (
    <Link
      href={href}
      className="relative block group overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="w-full object-cover"
      />
      <div
        className="
          absolute inset-0
          bg-black
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-50
          p-10
        "
      >
        <Title className="font-light text-white">{title}</Title></div>
    </Link>
  );
};

export default ImageCard;
