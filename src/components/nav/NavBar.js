import { EmployeeNav } from "./EmployeeNav";
import { CustomerNav } from "./CustomerNav";

export const NavBar = () => {

    const kandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(kandyUser)

    if (kandyUserObject.staff) {
        return <EmployeeNav />
    } 
    else {
        return <CustomerNav />
    }
}

