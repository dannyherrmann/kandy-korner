import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CurrencyInput from 'react-currency-input-field';

export const ProductForm = () => {

    const [product, update] = useState({
        productName: "",
        productType: "",
        cost: 0
    })

    const [productTypes, setProductTypes] = useState([])

    useEffect(
        () => {
            const fetchData = async() => {
                const response = await fetch ('http://localhost:8088/productTypes')
                const productTypesArray = await response.json()
                setProductTypes(productTypesArray)
            }
            fetchData()
        },
        []
    )
    console.log(`here is productTypes:`, productTypes)
    const navigate = useNavigate()

    const kandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(kandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const productToSendToAPI = {
            userId: kandyUserObject.id,
            productName: product.productName,
            productTypeId: product.productType,
            cost: product.cost
        }

    const sendData = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        }
        const response = await fetch ("http://localhost:8088/products", options)
        await response.json()
        navigate("/products")
    }
    sendData()
    }

    return (
        <form className="productForm">
            <h2 className="productionForm__title">New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label><b>Product Name:</b></label>
                    <input
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of the product"
                        value={product.productName}
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.productName = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label><b>Product Type:</b></label>
                    <select 
                        value={product.productType}
                        className="form-control"
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.productType = parseInt(event.target.value)
                                update(copy)
                            }
                        }>
                        <option value="" disabled>-- Choose --</option>
                        {
                            productTypes.map((productType) => {
                                return (
                                    <option 
                                        className="productType" 
                                        key={productType.id} 
                                        value={productType.id}>
                                    {productType.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label><b>Price:</b></label>
                    <CurrencyInput
                      className="form-control"
                      name="input-name"
                      prefix="$"
                      placeholder="Please enter a price for the new product"
                      allowNegativeValue={false}
                      decimalsLimit={2}
                      allowDecimals={true}
                      decimalScale={2}
                      onValueChange={
                        (value) => {
                            console.log(`here is the value`,value)
                            const copy = {...product}
                            copy.cost = parseInt(value)
                            update(copy)
                        }
                    }/>
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )
}