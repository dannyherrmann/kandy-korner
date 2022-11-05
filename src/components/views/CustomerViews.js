import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "../locations/Locations"
import { ProductContainer } from "../products/ProductContainer"


export const CustomerViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Kandy Korner</h1>
					<div>Come get some candy!</div><br></br>

					<Outlet />
				</>
			}>
                
				<Route path="locations" element={ <Locations /> } />
                <Route path="productSearch" element={ <ProductContainer /> } />
			</Route>
		</Routes>
	)
}