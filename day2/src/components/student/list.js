let List = ({studentsList})=>{
    let renderStudnets = ()=>{
        if(studentsList.length > 0){
            return studentsList.map((student)=>{
                return (

    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
    </tr>
 

                
            )
        })
    }
    else{
        return (<h1>No Students</h1>)
    }
}
    return(
        <div className="container">
                                    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Student Age</th>
    </tr>
  </thead>
  <tbody>

                    {renderStudnets()}
    
                    </tbody>
</table>
        </div>
    )
}
export default List;