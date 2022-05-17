import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Text extends Component {
    constructor(){
        super();
        this.state={defaultText:"hello"}
    }
    clear1=()=>{
        this.setState({defaultText:" "})
       // document.getElementById('textinput').value=' '

    }
    render(){
        return(
            <div className='container text-center'>
            <h1>Type your text here</h1>
            <input
                    value={this.state.defaultText}
                    className="form-control"
                    onChange={(e) => {
                        this.setState({defaultText: e.target.value})
                    }}
                    type="text"/>
                    <br></br>
                    <input  id='textinput' className='btn btn-primary' type='button' value='Clear' onClick={this.clear1}></input>
                    <h3> {this.state.defaultText} </h3>
                    </div>
        )
    } 
}
export default Text;