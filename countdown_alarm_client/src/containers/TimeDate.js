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
      second: d.getSeconds(),
      time: d.toLocaleTimeString(),
    }

    this.countingSecond = this.countingSecond.bind(this)
  }

  countingSecond() {
    let d = new Date()
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds(),
      milliseconds: d.getMilliseconds(),
      time: d.toLocaleTimeString()
    })
  }

  componentWillMount() {
    setInterval(this.countingSecond, 1000)
  }

  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
      <div className='timeclock-main'>
        <h3 className='timeclock-text'>{days[this.state.day]}, {this.state.month}/{this.state.date}/{this.state.year}</h3>
        <div className='counting-time'>{this.state.time}</div>
      </div>
    )
  }
}

export default TimeDate
