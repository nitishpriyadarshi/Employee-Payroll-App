import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Pic1 from '../assets/avatar2.png'
import Pic2 from '../assets/avatar5.png'
import Pic3 from '../assets/avatar6.png'
import Pic4 from '../assets/img_avatar.png'
import './PayrollForm.css'

const PayrollForm = () => {
    let initialValue = {
        employeeId: '',
        name: '',
        gender: '',
        salary: '',
        startDate: '',
        day: "",
        month: "",
        year: "",
        note: '',
        profilePic: '',
        allDepartment: ["HR", "Sales", "Finance", "Engineer", "Others"],
        department: [],
        profileArray: [{ url: '../assets/avatar2.png' },
        { url: '../assets/avatar5.png' },
        { url: '../assets/avatar6.png' },
        { url: '../assets/img_avatar.png' }
        ]
    };

    const [formValue, setForm] = useState(initialValue);

    const changeValue = (event) => {
        console.log(event.target);
        console.log(event.target.name);
        setForm({ ...formValue, [event.target.name]: event.target.value });
    };

    const onCheckChange = (name) => {
        let index = formValue.department.indexOf(name);
        let checkArray = [...formValue.department];
        if (index > -1) checkArray.splice(index, 1);
        else checkArray.push(name);
        setForm({ ...formValue, department: checkArray });
    };

    const getChecked = (name) => {
        return (
            formValue.department && formValue.department.includes(name)
        );
    };

    const save = async (event) => {
        event.preventDefault();

        let object = {
            name: formValue.name,
            departments: formValue.department,
            gender: formValue.gender,
            salary: formValue.salary,
            startDate: `${formValue.day} ${formValue.month} ${formValue.year}`,
            note: formValue.note,
            profilePic: formValue.profilePic,
        };
        console.log(object);
    };

    const reset = () => {
        setForm({
            ...initialValue,
            employeeId: formValue.employeeId,
            isUpdate: formValue.isUpdate,
        });
    };


    return (
        <div className="payroll-main">
            <header className="header-content header">
                <div className="logo-content">
                    <img src={logo} alt="" />

                    <div>
                        <span className="emp-text">EMPLOYEE</span> <br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
            <div className="form-content">
                <form className="form-head" action="#" onSubmit={save}>
                    <div className="form-head">Employee Payroll form</div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="input"
                            type="text"
                            id="name"
                            name="name"
                            value={formValue.name}
                            onChange={changeValue}
                            placeholder="Your name.."
                        />
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="profilePic">
                            Profile image
                        </label>
                        <div className="profile-radio-content">
                            <label>
                                <input
                                    type="radio"
                                    name="profilePic"
                                    checked={
                                        formValue.profilePic ===
                                        "../assets/avatar2.png"
                                    }
                                    value="../assets/avatar2.png"
                                    onChange={changeValue}
                                />
                                <img className="profile" src={Pic1} alt="profile" />
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="profilePic"
                                    checked={
                                        formValue.profilePic ===
                                        "../assets/avatar5.png"
                                    }
                                    value="../assets/avatar5.png"
                                    onChange={changeValue}
                                />
                                <img className="profile" src={Pic2} alt="profile" />
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="profilePic"
                                    checked={
                                        formValue.profilePic ===
                                        "../assets/avatar6.png"
                                    }
                                    value="../assets/avatar6.png"
                                    onChange={changeValue}
                                />
                                <img className="profile" src={Pic3} alt="profile" />
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="profilePic"
                                    checked={
                                        formValue.profilePic ===
                                        "../assets/img_avatar.png"
                                    }
                                    value="../assets/img_avatar.png"
                                    onChange={changeValue}
                                />
                                <img className="profile" src={Pic4} alt="profile" />
                            </label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="gender">
                            Gender
                        </label>
                        <div>
                            <input
                                type="radio"
                                id="male"
                                checked={formValue.gender === "male"}
                                onChange={changeValue}
                                name="gender"
                                value="male"
                            />
                            <label className="text" htmlFor="male">
                                Male
                            </label>
                            <input
                                type="radio"
                                id="female"
                                checked={formValue.gender === "female"}
                                onChange={changeValue}
                                name="gender"
                                value="female"
                            />
                            <label className="text" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="department">
                            Department
                        </label>
                        <div>
                            {formValue.allDepartment.map((item) => (
                                <span key={item}>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                        onChange={() => onCheckChange(item)}
                                        name={item}
                                        checked={getChecked(item)}
                                        value={item}
                                    />
                                    <label className="text" htmlFor={item}>
                                        {item}
                                    </label>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="salary">
                            Salary
                        </label>
                        <input
                            className="input"
                            type="text"
                            id="salary"
                            name="salary"
                            value={formValue.salary}
                            onChange={changeValue}
                        />
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="startDate">
                            Start Date
                        </label>
                        <div>
                            <select
                                value={formValue.day}
                                onChange={changeValue}
                                id="day"
                                name="day"
                            >
                                <option value="" disabled selected>
                                    Day
                                </option>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select
                                value={formValue.month}
                                onChange={changeValue}
                                id="month"
                                name="month"
                            >
                                <option value="" disabled selected>
                                    Month
                                </option>
                                <option value="Jan">January</option>
                                <option value="Feb">Febuary</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                                <option value="May">May</option>
                                <option value="Jun">June</option>
                                <option value="Jul">July</option>
                                <option value="Aug">August</option>
                                <option value="Sep">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <select
                                value={formValue.year}
                                onChange={changeValue}
                                id="year"
                                name="year"
                            >
                                <option value="" disabled selected>
                                    Year
                                </option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                        </div>
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="note">
                            Notes
                        </label>
                        <textarea
                            onChange={changeValue}
                            id="note"
                            value={formValue.notes}
                            className="input"
                            name="note"
                            placeholder=""
                            style={{ height: "120%" }}
                        ></textarea>
                    </div>

                    <div className="buttonParent">
                        <div className="submit-reset">
                            <button
                                type="submit"
                                className="button submitButton"
                                id="submitButton"
                            >
                                {formValue.isUpdate ? "Update" : "Submit"}
                            </button>
                            <button
                                type="button"
                                onClick={reset}
                                className="resetButton button"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};




export default PayrollForm