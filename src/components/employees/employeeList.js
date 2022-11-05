import { useEffect, useState } from "react";
import { Employee } from "./employee";
import { useNavigate } from "react-router-dom";
import "./Employees.css"

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8088/employees?_expand=user&_expand=location`
      );
      const userArray = await response.json();
      setEmployees(userArray);
    };
    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => navigate("/createEmployee")}>Hire Employee</button>

      <article className="employees">
        {employees.map((employee) => {
          return (
            <Employee
              key={`employee--${employee.id}`}
              emplID={employee.id}
              fullName={employee.user.fullName}
              email={employee.user.email}
              userID={employee.userId}
              location={employee.location.city}
              hireDate={employee.startDate}
              hourlyRate={employee.payRate}
            />
          );
        })}
      </article>
    </>
  );
};
