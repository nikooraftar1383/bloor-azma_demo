import ProductCart from "./ProductCart";


let ProductGrid = ({ products }) => 
{
        
   

  return <>
    <div className="  mt-10 via-[#dcdde2] bg-linear-to-b from-white to-white p-5  ">
         <div className="grid grid-cols-4 w-[90%] mx-auto  gap-8">
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
