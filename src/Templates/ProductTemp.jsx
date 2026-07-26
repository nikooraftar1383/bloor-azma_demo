import { useEffect, useState } from "react";
import ProductHero from "./ProductHero";
import SearchBar from "./SearchBar";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

let ProductTemp = () => {
  let [search, setsearch] = useState("");
  let [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  let getData = async () => {
    try {
      let res = await fetch("http://localhost:4000/products");
      if (res.status == 200) {
        let data = await res.json();
        setProducts(data);
      } else {
        console.log("eror drim");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    getData();
    setCurrentPage(1);
  }, [search]);

  return (
    <>
      <div
className="min-h-screen
bg-white
Pt-20
[background-image:radial-gradient(#d4d4d8_1px,transparent_1px)]
[background-size:22px_22px]"
>
  {products && (
        <>
          {" "}
          <ProductHero search={search} setsearch={setsearch}/>
         
          <ProductGrid products={currentProducts} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
</div>
    </>
  );
};
export default ProductTemp;
