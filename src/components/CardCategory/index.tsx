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
    <div className="p-4 bg-zinc-700 rounded border border-zinc-700 hover:border-white transition-colors">
      <span>{title}</span>
      <p>{description}</p>

      {image.map((image) => (
        <img src={image.asset.url} alt={image.alt} />
      ))}
    </div>
  );
}
