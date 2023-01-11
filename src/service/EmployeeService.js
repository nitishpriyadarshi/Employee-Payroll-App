import axios from "axios";


class EmployeeService{
    baseUrl = "http://localhost:8080/employeepayrollservice";

  addEmployee(data) {
    return axios.post(`${this.baseUrl}/create`, data);
}

  getAllEmployees(){
    return axios.get(`${this.baseUrl}/get`);
  }

}
export default new EmployeeService();