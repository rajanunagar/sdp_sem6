import React, { Component } from "react";
import './App.css';
const options =["2D Echo","4D Scan","ACTH (Adreno Corticotropic Hormone) Test","Adenosine Deaminase Test","Adenosine Deaminase Test","Bleeding / Clotting Time Test","Bleeding / Clotting Time Test","Hemoglobin (Hb) Test","Iron Test","Malaria (Malarial Parasite) Test","Plasma Lactate (Lactic Acid) Test","Protein Test","Sonography (Ultrasound / USG)"];
class StudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      address: "",
      age: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
  }
  changeAgeHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  saveStudent = (e) => {
    e.preventDefault();
    let student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      address: this.state.address,
      age: this.state.age,
    };
    console.log("Student=>" + JSON.stringify(student));
  };

  cancel() {
    this.props.history.push();
  }

  render() {
    return (
      <div>
      <br></br>
        <div className="container">
          <div className="row">

            <h1 className="text-center">Appointment Form</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      placeholder="Email"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address:</label>
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Age </label>
                    <input
                      placeholder="Age"
                      name="age"
                      className="form-control"
                      value={this.state.age}
                      onChange={this.changeAgeHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Doctor Reference Name  </label>
                    <input
                      placeholder="doctor name"
                      name="dname"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Date </label>
                    <input type='Date'
                      placeholder="Date"
                      name="date"
                      className="form-control"
                    />
                  </div>
                    <br></br>
                  <div className="form-group">
                    <label>Type Of Report </label>
                    <br></br>
                    <select >
                      <option>Please choose one option</option>
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>

                  <br></br>
                  <br></br>
                  <button
                    className="btn btn-success"
                    onClick={this.saveStudent}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentComponent;
