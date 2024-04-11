import React, { Component } from "react"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";

export default class EditExercise extends Component {
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
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:${process.env.REACT_APP_BE_PORT}/exercises/${this.props.match.params.id}`)
            .then(res => {
                this.setState(({
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: new Date(res.data.date),
                }))
            })
            .catch(err => {
                console.log(err)
            })

        axios.get(`http://localhost:${process.env.REACT_APP_BE_PORT}/users/`)
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
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

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise)

        axios.post(`http://localhost:${process.env.REACT_APP_BE_PORT}/exercises/update/${this.props.match.params.id}`, exercise)
            .then(res => console.log(res.data))

        window.location = '/'
    }

    render() {
        return (
            <div>
                <h3>Edit Exercise</h3>
                <form data-ta="edit-exercise-form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <select data-ta="editExerciseUserInput" ref="UserInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
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
                        <input data-ta="editExerciseDescription"
                            type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            data-ta="editExerciseDuration"
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div data-ta="editExerciseDatePicker">
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form0-group">
                        <input data-ta="editExerciseFormSubmit" type="submit" value="Edit Exercise Log" className="brn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
