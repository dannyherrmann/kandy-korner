import { format } from "date-fns"

export const Employee = ({ emplID, fullName, email, userID, location, hireDate, hourlyRate }) => {

    const convertHireDate = new Date(hireDate)
    const hireDateFormatted = format(convertHireDate, "M/d/yyyy")
    
    return <section className="employee">
              <div>UserID: {userID}</div>
              <div>EmplID: {emplID}</div>
              <div>Name: {fullName}</div>
              <div>Email: {email}</div>
              <div>Location: {location}</div>
              <div>Hire Date: {hireDateFormatted}</div>
              <div>Hourly Rate: ${hourlyRate}/hr</div>
              <div></div>
            </section>
}