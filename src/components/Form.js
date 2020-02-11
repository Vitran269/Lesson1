import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        city : '',
        country : ''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit = () =>{
        this.props.onSubmit(this.state)
    }
    render() {
        return (
           <div className="row">
                <div class="form-group">
              
              <input type="text" name="city" 
              class="form-control" value={this.state.city}
              placeholder="Enter city ..." 
              onChange={this.handleChange}
              />
             
            </div>
             <div class="form-group">
              
             <input type="text" name="country"  value={this.state.country}
             class="form-control" placeholder="Enter country ..." 
             onChange={this.handleChange}
             />
            
           </div>
             <button class="btn btn-primary" href="a" role="button" onClick={this.onSubmit}>SUBMIT</button>
           </div>
        )
    }
}
