import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      studentName: "",
      studentAge: 0,
    };
  }
  add = () => {
    // console.log( this.props)
    this.props.onClickAdd(
      this.state.id,
      this.state.studentName,
      this.state.studentAge
    );
  };
  render() {
    return (
      <div className="container col-5">
        <h2>Add new Student</h2>
        <div class="form-group">
          <label> ID</label>
          <br></br>
          <input
            onChange={(e) => {
              this.setState({ id: e.target.value });
            }}
            className="form-control"
            typez="text"
            placeholder="Studnet Name"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlFile1"> Name</label> <br></br>
          <input
            onChange={(e) => {
              this.setState({ studentName: e.target.value });
            }}
            className="form-control"
            typez="text"
            placeholder="Studnet Name"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlFile1">Age</label> <br></br>
          <input
            onChange={(e) => {
              this.setState({ studentAge: e.target.value });
            }}
            className="form-control"
            type="text"
            placeholder="Student Age"
          ></input>
        </div>
        <br></br>
        <input
          className="form-control btn btn-dark"
          type="button"
          value="Add"
          onClick={this.add}
        ></input>
      </div>
    );
  }
}
export default Student;
