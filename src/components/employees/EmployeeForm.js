import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CurrencyInput from 'react-currency-input-field';
import "./Employees.css"

export const EmployeeForm = () => {

    const [employee, update] = useState({
        fullName: "",
        email: "",
        isStaff: true,
        userId: "",
        locationId: "",
        startDate: "",
        payRate: 0
    })

    const [locations, setLocations] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            const fetchData = async() => {
                const response = await fetch ('http://localhost:8088/locations')
                const locationsArray = await response.json()
                setLocations(locationsArray)
            }
            fetchData()
        },
        []
    )

    const handleSaveButtonClick = (event) => {

    event.preventDefault()

    const newUser = {
        fullName: employee.fullName,
        email: employee.email,
        isStaff: true
    }

    const addNewUser = async () => {
        const userOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }
        const userResponse = await fetch ("http://localhost:8088/users", userOptions)
        const userResponseMessage = await userResponse.json()

        const newEmployee = {
            userId: userResponseMessage.id,
            locationId: employee.locationId,
            startDate: employee.startDate,
            payRate: employee.payRate
        }
        
        const employeeOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        const emplResponse = await fetch ("http://localhost:8088/employees", employeeOptions)
        await emplResponse.json()
        navigate("/employees")
    }
    addNewUser()
    }

    return (
        <form className="productForm">
            <h2 className="productionForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label><b>Full Name:</b></label>
                    <input
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="full name"
                        value={employee.fullName}
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.fullName = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label><b>Email:</b></label>
                    <input
                        
                        type="text"
                        className="form-control"
                        placeholder="email address"
                        value={employee.email}
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.email = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label><b>Location:</b></label>
                    <select 
                        defaultValue={employee.locationId}
                        className="form-control"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.locationId = parseInt(event.target.value)
                                update(copy)
                            }
                        }>
                        <option value="" disabled>-- Choose a location --</option>
                        {
                            locations.map((location) => {
                                return (
                                    <option 
                                        className="location" 
                                        key={location.id} 
                                        value={location.id}>
                                    {location.city}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label><b>Start Date:</b></label>
                    <input
                        type="date"
                        className="form-control"
                        value={employee.startDate}
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.startDate = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label><b>Hourly Rate:</b></label>
                    <CurrencyInput
                      className="form-control"
                      name="input-name"
                      prefix="$"
                      placeholder="Enter an hourly rate per hour"
                      allowNegativeValue={false}
                      decimalsLimit={2}
                      allowDecimals={true}
                      decimalScale={2}
                      onValueChange={
                        (value) => {
                            console.log(`here is the value`,value)
                            const copy = {...employee}
                            copy.payRate = parseFloat(value)
                            update(copy)
                        }
                    }/>
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Hire Employee
            </button>
            <button
                onClick={() => navigate("/employees")}
                className="btn btn-primary">
                Cancel
            </button>
        </form>
    )
 
}