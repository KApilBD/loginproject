import React, { Component } from 'react';

 
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userid:'',
            password:'',
        }
        this.changeHandle=this.changeHandle.bind(this);
        this.submitHandle=this.submitHandle.bind(this);
    }
    validateForm(){
        return this.state.userid.length > 0 && this.state.password.length > 0;
    }
    changeHandle(event){
        this.setState({[event.target.id]:event.target.value});
    }
    submitHandle(event){
       // event.
    }
    render(){
        return(
           <div>
                <form onSubmit={this.submitHandle}>
                    <h3>User Name</h3>
                    <input
                        type="text"
                        value={this.state.userid}
                        onChange={this.changeHandle}
                    />
                    <h3>password</h3>                
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.changeHandle}
                    />
                    <button 
		                disabled={!this.validateForm} 
		                type="submit">
		                Login
		            </button>
                </form>                
           </div> 
        );
    }
}

export default Login;