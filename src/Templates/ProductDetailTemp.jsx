import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
let ProductDetailTemp =()=>{
     const [product, setProduct] = useState(null);
    let {id}=useParams()
    let getData= async()=>{
       try{
         let res=await fetch(`http://localhost:4000/products/`)
        if (res.status==200){
            let data=await res.json()
            let result=data.find((itm)=>itm.title.trim()==id)
            setProduct(result)
        }
        else{
            console.log("eror")
        }
       }
       catch(err){
        console.log(err.message)
       }

    }

    useEffect(()=>{getData()},[])
console.log(product);

return<>
 {product && <h1>{product.title}</h1>}

</>
}
export default ProductDetailTemp 