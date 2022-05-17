import { Component } from 'react';
import Student from './student/student'
import StudentsList from '../components/student/students.json'
import List from './student/list'
class Home extends Component{
    constructor (){
                super();
                this.state = {
                    AllStudents:StudentsList.students,
                    updated:StudentsList.students
                }
            }
            sample={"name":"salma",
        "age":10}
            ReciveStudentData=(name,stage)=>{
                this.state.AllStudents.push({name:name,
                age:stage})
                this.setState({updated:this.state.AllStudents})


                }
    render(){return(
        <div>
            <Student onClickAdd = {this.ReciveStudentData}/>
            <List studentsList ={this.state.updated}/>
                
        </div>
    )}
}

export default Home;