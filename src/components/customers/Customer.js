import { Link } from "react-router-dom"

 export const Customer = ({ id, fullName, email }) => {
    return <section className="customer">
        <div className="customerField">
            <Link to={`/customers/${id}`}>Name: {fullName}</Link>
        </div>
        <div className="customerField">Email: {email}</div>
    </section>
}