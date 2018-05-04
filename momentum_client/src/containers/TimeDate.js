import React, {Component} from 'react'
import '../styles/TimeDate.css';

class TimeDate extends Component {

  constructor() {
    super()

    let d = new Date()
    this.state = {
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes(),
    }
  }

  countingMinute = () => {
    let d = new Date()
    console.log(d)
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes(),
    })
  }

  componentWillMount = () => {
    setInterval(this.countingMinute, 60000)
  }

  render = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let greeting = 'Hello'
    console.log(this.state.hour)

    if (this.state.hour < 6 || this.state.hour > 17) {
      greeting = "Good Evening"
    } else if (this.state.hour < 12 && this.state.hour >= 6) {
      greeting = "Good Morning"
    } else if (this.state.hour >= 12 && this.state.hour < 18) {
      greeting = "Good Afternoon"
    }

    return (
      <div className='timedate-wrapper'>
        <div className='counting-time'>
          {this.state.hour === 0 || this.state.hour === 12 ? "12" : this.state.hour % 12}:{this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}
          <span className="ampm">{this.state.hour < 12 ? "AM" : "PM"}</span>
        </div>
        <div className='timedate-date'>{days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year}</div>
        <div className="alarm-greeting">{greeting}, Daniel</div>
      </div>
    )
  }
}

export default TimeDate
