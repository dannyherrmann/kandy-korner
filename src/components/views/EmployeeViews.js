import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "../locations/Locations"
import { Products } from "../products/Products"
import { ProductForm } from "../productForm/ProductForm"
import { EmployeeForm } from "../employees/EmployeeForm"
import { EmployeeList } from "../employees/employeeList"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"

export const EmployeeViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Kandy Korner</h1>
					<div>Come get some candy!</div>

					<Outlet />
				</>
			}>
				<Route path="locations" element={ <Locations /> } />
				<Route path="products" element={ <Products />} />
				<Route path="product/create" element={ <ProductForm /> } />
				<Route path="createEmployee" element={ <EmployeeForm /> } />
				<Route path="employees" element={ <EmployeeList /> } />
				<Route path="customers" element={ <CustomerList /> } />
                <Route path="customers/:customerId" element={ <CustomerDetails /> } />
			</Route>
		</Routes>
	)
}