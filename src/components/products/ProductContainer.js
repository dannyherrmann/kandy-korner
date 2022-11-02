import { Products } from "./Products";
import { ProductSearch } from "./ProductSearch";
import { useState } from "react"

export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
    <Products searchTermState={searchTerms}/>
        <ProductSearch setterFunction={setSearchTerms}/>
        
    </>
}