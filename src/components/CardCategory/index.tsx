interface CardCategoryProps {
  title: string;
  description: string;
  image: Image[];
}

export interface Asset {
  url: string;
}

export interface Image {
  alt: string;
  asset: Asset;
}

export function CardCategory({ title, description, image }: CardCategoryProps) {
  return (
    <div className="p-4 bg-gray-600 text-gray-100 rounded border border-zinc-700 hover:-translate-y-1 transition-transform">
      <span className="sm:text-2xl">{title}</span>
      <p className="my-4">{description}</p>

      {image.map((image) => (
        <img src={image.asset.url} alt={image.alt} loading="lazy" />
      ))}
    </div>
  );
}
