import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"


export const ApplicationViews = () => {

	const kandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(kandyUser)

	if (kandyUserObject.staff) {
		return <EmployeeViews />
	}
	else {
		return <CustomerViews />
	}
}

