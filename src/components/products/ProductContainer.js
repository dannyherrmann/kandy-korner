import { Products } from "./Products";
import { ProductSearch } from "./ProductSearch";
import { useState } from "react"

export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <ProductSearch setterFunction={setSearchTerms}/>
        <Products searchTermState={searchTerms}/>
    </>
}