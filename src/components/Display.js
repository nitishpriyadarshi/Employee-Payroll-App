import React from "react";
import "./Display.css";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import Delete from "../assets/delete.svg";
import Edit from "../assets/create.svg";
import Pic1 from "../assets/avatar2.png";
import Pic2 from "../assets/avatar5.png";
import Pic3 from "../assets/avatar6.png";
import Pic4 from "../assets/img_avatar.png";



const Display = (props) => {
    let navigate = useNavigate();
    const update = (employeeId) => {
        navigate(`Employeeform/${employeeId}`);
    };

    const remove = (employeeId) => {
        console.log(employeeId);
        var answer = window.confirm(
            "Data once deleted cannot be restored!! Do you wish to continue ?"
        );
        if (answer === true) {
            EmployeeService.deleteEmployee(employeeId)
                .then((data) => {
                    alert("Employee deleted successfully!!");
                    window.location.reload();
                    props.getAllEmployees();
                })
                .catch((error) => {
                    console.log("Something Went Wrong!");
                });
        } else {
            alert("Employee Not Deleted");
        }
    };


    return (
        <>
          <table id="display" className="display">
            <thead>
              <tr>
                <th>Profile Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Departments</th>
                <th>Salary</th>
                <th>Start Date</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.employeeArray &&
                props.employeeArray.map((employees, index) => (
                  <tr key={`${index}`}>
                    <td>
                      <img
                        className="profile"
                        src={
                          employees.profilePic ===
                          "../assets/avatar2.png"
                            ? Pic1
                            : employees.profilePic ===
                              "../assets/avatar5.png"
                            ? Pic2
                            : employees.profilePic ===
                              "../assets/avatar6.png"
                            ? Pic3
                            : Pic4
                        }
                        alt=""
                      />
                    </td>
    
                    <td>{employees.name}</td>
                    <td className="gender">{employees.gender}</td>
                    <td>
                      {employees.department &&
                        employees.department.map((dept) => (
                          <div className="dept-label">{dept}</div>
                        ))}
                    </td>
                    <td> ₹{employees.salary}</td>
                    <td>{employees.startDate}</td>
                    <td>{employees.note}</td>
                    <td>
                      <img
                        onClick={() => remove(employees.employeeId)}
                        src={Delete}
                        alt="delete"
                      />
    
                      <img
                        onClick={() => update(employees.employeeId)}
                        src={Edit}
                        alt="edit"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      );


};
export default Display;