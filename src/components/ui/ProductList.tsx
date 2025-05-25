import ProductCard from "./Card/ProductCard";

export const ProductList = () => {
  return (
    <div className="mt-3 grid h-full w-full">
      <div className="col-span-1 h-fit w-full">
        {/* Grid responsivo:
            - Móvil (<768px): 1 columna
            - Tablet (≥768px): 2 columnas
            - Desktop (≥1280px): 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-4 md:px-6 xl:px-8">
          <ProductCard
            image={""}
            name={""}
            price={""}
          />
          <ProductCard
            image={""}
            name={""}
            price={""}
          />
          <ProductCard
            image={""}
            name={""}
            price={""}
          />
          <ProductCard
            image={""}
            name={""}
            price={""}
          />
        </div>
      </div>
    </div>
  );
};
