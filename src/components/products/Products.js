import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Products.css"

export const Products = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [topPricedProducts, updateTopPricedProducts] = useState(false)
    const navigate = useNavigate()
    const kandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(kandyUser)

    useEffect(
        () => {
            const fetchData = async() => {
                const response = await fetch ('http://localhost:8088/products/?_expand=productType')
                const productArray = await response.json()
                setProducts(productArray)
                setFilteredProducts(productArray)
            }
            fetchData()
        },
        []
    )

    // useEffect(
    //     () => {
    //         setFilteredProducts(products)
    //     }, [products]
    // )

    useEffect(
        () => {
            if (topPricedProducts) {
                const topProducts = products.filter(
                    (product) => product.cost > 2
                )
                setFilteredProducts(topProducts)
            } else {
                setFilteredProducts(products)
            }
        }, [topPricedProducts]
    )

    products.sort((a, b) => (a.productName > b.productName) ? 1 : -1)

    return (
        <>
        <h2>Products</h2>
        <article className="products">
            {
                kandyUserObject.staff ? (
                    <>
                        <button onClick={() => updateTopPricedProducts(true)}>Top Priced</button>
                        <button onClick={() => updateTopPricedProducts(false)}>All Products</button>
                        <button onClick={() => navigate("/product/create")}>Create Product</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => updateTopPricedProducts(true)}>Top Priced</button>
                        <button onClick={() => updateTopPricedProducts(false)}>All Products</button>
                    </>
                )
            }
            {
                filteredProducts.map((product) => {
                    return (
                        <ul className="product" key={product.id}>
                            <u><b>{product.productName}</b></u><br></br>
                            ${product.cost}<br></br>
                            {product.productType.name}
                        </ul>
                    )
                })
            }
        </article>
        
        </>
    )
}