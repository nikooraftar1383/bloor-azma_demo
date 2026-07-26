import ProductCart from "./ProductCart";


let ProductGrid = ({ products }) => 
{
        
   

  return <>
    <div className="  mt-10  p-5  pt-10 ">
         <div className="grid grid-cols-2 w-[61%] mx-auto  gap-8 gap-y-30">
      {products.map((product) => (
        <ProductCart
          key={product.id}
          product={product}
        />
      ))}
    </div>
    </div>
  </>;
}
export default ProductGrid;
