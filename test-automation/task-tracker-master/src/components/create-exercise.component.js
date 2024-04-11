import React, { Component } from "react"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeDuration = this.onChangeDuration.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:${process.env.REACT_APP_BE_PORT}/users/`)
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault()

        var selectedIncorrect = new Date(this.state.date);
        var selectedCorrect = new Date(selectedIncorrect);
        selectedCorrect.setDate(selectedIncorrect.getDate() + 1);

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: selectedCorrect
        }

        console.log(exercise)

        axios.post(`http://localhost:${process.env.REACT_APP_BE_PORT}/exercises/add`, exercise)
            .then(res => console.log(res.data))

        window.location = '/'
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise</h3>
                <form data-ta="create-exercise" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <select data-ta='selectUser' ref="UserInput"
                            required
                            className="form-control"
                            defaultValue=''
                            onChange={this.onChangeUsername}>
                            <option value='' disabled>
                                Choose a user
                            </option>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }

                        </select>
                        
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input data-ta='description' type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            data-ta='duration'
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div data-ta='date'>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                required
                            />
                        </div>
                    </div>
                    <div className="form0-group">
                        <input data-ta='submitExercise' type="submit" value="Create Exercise Log" className="brn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
