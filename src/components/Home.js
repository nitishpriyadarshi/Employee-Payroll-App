import React from 'react' //rfce
import logo from '../assets/logo.png'
import Add from '../assets/add-24px.svg'
import './PayrollForm.js'
import './Home.css'



export class Home extends React.Component {

    onClick = ($event) => {
        console.log('save button is clicked!', $event);
        window.open("http://localhost:3000/PayrollForm", '_blank');
    }
    render() {
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
                            <a href="./HomePage.js" className="add-button" onClick={this.onClick}>
                                <img src={Add} alt="" />
                                Add User
                            </a>
                        </div>
                        <table id="display" className="table">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Start Date</th>
                                <th>Actions</th>
                            </tr>

                        </table>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
