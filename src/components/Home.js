import React from 'react' //rfce
import logo from '../assets/logo.png'
import Add from '../assets/add-24px.svg'
import './Home.css'
import EmployeeService from '../service/EmployeeService'
import { Link } from 'react-router-dom'
import Display from './Display'



export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            AllEmployeeArray: [],
        };
    }
    componentDidMount() {
        console.log("Life cycle method");
        this.getAllEmployee();
    }

    getAllEmployee = () => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                this.setState({
                    AllEmployeeArray: response.data.data,
                });
                console.log(response);
            })
            .catch((err) => {
                alert("Something went wrong, while getting all the records", err);
            });
    };


    render() {
        console.log("Render Method Is Excuted First");
        return (
            <div>
                <div>
                    <header className="header-content header">
                        <div className="logo-content">
                            <img src={logo} alt="Emp Logo" />
                            <div>
                                <span className="emp-text">EMPLOYEE</span><br />
                                <span className="emp-text emp-payroll">PAYROLL</span>
                            </div>
                        </div>
                    </header>

                    <div className='main-content'>
                        <div className="header-content">
                            <div className="emp-detail-text">
                                Employee Details
                            </div>
                            <Link className='add-button' to='/form'>
                                <img src={Add} alt="Add user" />
                                <div>Add user</div>
                            </Link>
                        </div>

                        <div class="table-main">
                            <Display
                                employeeArray={this.state.AllEmployeeArray}
                                getAllEmployee={this.getAllEmployee}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home