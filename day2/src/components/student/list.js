import { Link, useNavigate } from "react-router-dom";

let List = ({ studentsList }) => {
  const navigate = useNavigate();

  let renderStudnets = () => {
    if (studentsList.length > 0) {
      return studentsList.map((student) => {
        const toStudentDetails = (student) => {
          navigate("/studentdetail/${student.id}", {
            state: { id:student.id,name: student.name, age: student.age },
          });
        };
        return (
          <tr>
            <td>{student.name}</td>
            <td>{student.id}</td>
            <td>
              {" "}
              <button
                className="btn btn-primary"
                onClick={() => {
                  toStudentDetails(student);
                }}
              >
                Show
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return <h1>No Students</h1>;
    }
  };
  return (
    <div className="container">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Student Age</th>
          </tr>
        </thead>
        <tbody>{renderStudnets()}</tbody>
      </table>
    </div>
  );
};
export default List;
