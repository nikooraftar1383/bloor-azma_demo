import { useEffect, useState } from "react";
import ProductHero from "./ProductHero"
import SearchBar from "./SearchBar"

let ProductTemp =()=>{
let [search,setsearch]=useState("")
let [products, setProducts] = useState([]);
     
  let getData=async()=>{
    try{
        let res=await fetch("http://localhost:4000/products")
        if(res.status==200){
            let data=await res.json()
            setProducts(data)
            
            
        }
        else{
            console.log("eror drim")
        }
    }
    catch(err){
        console.log(err.message);
    }
  }
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  
  useEffect(() => {getData()
    console.log(products);
  }, [products]);


  
return<>
<ProductHero/>
    <SearchBar search={search} setsearch={setsearch}/>
</>

}
export default ProductTemp