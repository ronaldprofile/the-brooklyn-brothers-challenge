import { CardCategory } from "./components/CardCategory";
import categories from "./productsCategory.json";

export interface Asset {
  url: string;
}

export interface Image {
  alt: string;
  asset: Asset;
}

export interface Category {
  _id: string;
  name: string;
}

export interface Node {
  name: string;
  shortDescription: string;
  id: string;
  images: Image[];
  category: Category;
}

type NameCategories =
  | "no-filter"
  | "Talco"
  | "Aerosol"
  | "Barra"
  | "Alcohol en Aerosol"
  | "Alcohol en Gel"
  | "Alcohol en Spray"
  | "Jabón Barra"
  | "Jabón Líquido";

const { data } = categories;
const nodes: Node[] = data.nodes;

export function App() {
  return (
    <div>
      <div className="w-full max-w-[1120px] mt-8  mx-auto flex flex-wrap sm:grid grid-cols-3 gap-8">
        {nodes.map((node) => {
          return (
            <CardCategory
              key={node.id}
              title={node.name}
              description={node.shortDescription}
              image={node.images}
            />
          );
        })}
      </div>
    </div>
  );
}
