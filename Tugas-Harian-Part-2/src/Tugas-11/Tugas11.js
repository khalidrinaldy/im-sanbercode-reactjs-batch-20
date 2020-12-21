import React, { Component } from 'react'

export default class Tugas11 extends Component {
    constructor(props){
        super(props)
        this.state = {
          hour: 0,
          minute: 0,
          second: 0,
          meridiem: "",
          count: 100
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.counted();
            this.showTime();
        }, 1000);
    }

    componentDidUpdate() {
        if (this.state.count === 0) {
            clearInterval(this.timer);
        }
    }

    showTime() {
        const date = new Date();
        this.setState({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        });

        if (this.state.hour < 10) {
            this.setState({hour : "0" + this.state.hour})
        }

        if (this.state.hour >= 12) {
            this.setState({meridiem: "PM"});
        } else {
            this.setState({meridiem: "AM"});
        }

        if (this.state.minute < 10) {
            this.setState({minute : "0" + this.state.minute})
        }

        if (this.state.second < 10) {
            this.setState({second : "0" + this.state.second})
        }
    }
    counted() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div className="timer">
                <h2>Sekarang jam</h2>
                {this.state.count === 0 ? null : <h2>{((this.state.hour + 11) % 12) + 1}:{this.state.minute}:{this.state.second} {this.state.meridiem}</h2>}
                <h2>Hitung mundur : {this.state.count === 0 ? null : this.state.count}</h2>
            </div>
        )
    }
}
