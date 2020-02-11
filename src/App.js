import React, { Component } from 'react'
import Form from './components/Form'
const API_KEY = "c8a7c8ab9f7d729305f5861edb1bcfef"
export default class App extends Component {
  state = {
    wind :``,
    temperature :``,
    pressure : ``
  }
  onSubmit = (data) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res =>{
      this.setState({
        wind : res.wind.speed,
      temperature : res.main.temp,
      pressure : res.main.pressure
      })
      
    })
  }
  render() {
    const {wind,temperature,pressure} = this.state
    return (
      <div>
        <Form onSubmit = {this.onSubmit}/>
        <table class="table">
          <thead>
            <tr>
              <th>Wind</th>
              <th>Temperature</th>
              <th>Pressure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{wind}</td>
              <td>{temperature}</td>
              <td>{pressure}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    )
  }
}
