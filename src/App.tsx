import { useState } from "react";
import Select from "react-select";
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

interface Option {
  label: string;
  value: string;
}

const categoriesNames = [
  "Talco",
  "Aerosol",
  "Barra",
  "Alcohol en Aerosol",
  "Alcohol en Gel",
  "Alcohol en Spray",
  "Jabón Barra",
  "Jabón Líquido",
];

const categoriesOptions = categoriesNames.map((categoryName) => ({
  value: categoryName,
  label: categoryName,
}));

export function App() {
  const { data } = categories;
  const products: Node[] = data.nodes;

  const [categorySelected, setCategorySelected] = useState<Option | null>(null);

  const productsFilteredByCategory = products.filter((product) => {
    return product.category.name === categorySelected?.value ? product : null;
  });

  function handleSelectCategory(categoryOption: Option | null) {
    setCategorySelected(categoryOption);
  }

  return (
    <div>
      <div className="p-8 w-full max-w-[1120px] mx-auto">
        <header className="text-center">
          <h1 className="font-bold text-3xl text-gray-100">
            The Brooklyn Brothers
          </h1>
        </header>

        <div className="mt-8 mb-6">
          <Select
            isClearable
            options={categoriesOptions}
            value={categorySelected}
            onChange={(option: Option) => handleSelectCategory(option)}
            placeholder="Buscar por categoria"
          />
        </div>

        <div className="flex flex-wrap sm:grid grid-cols-3 gap-8">
          {categorySelected
            ? productsFilteredByCategory.map((product) => {
                return (
                  <CardCategory
                    key={product.id}
                    title={product.name}
                    description={product.shortDescription}
                    image={product.images}
                  />
                );
              })
            : products.map((node) => {
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
    </div>
  );
}
