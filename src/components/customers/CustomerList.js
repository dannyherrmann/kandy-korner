import { useEffect, useState } from "react"
import "./Customer.css"
import { Customer } from "./Customer"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch('http://localhost:8088/customers?_expand=user')
                const userArray = await response.json()
                setCustomers(userArray)
            }
            fetchData()
        },
        []
    )

    return <article className="customers">

            {
                customers.map(customer => {
                    return <Customer 
                                key={`customer--${customer.id}`}
                                id={customer.id}
                                fullName={customer.user.fullName}
                                email={customer.user.email}
                                loyaltyNumber={customer.loyaltyNumber}/>
                })
            }

        </article>
}