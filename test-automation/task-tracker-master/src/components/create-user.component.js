import React, { Component } from "react"
import axios from "axios"

const ShowAddedUser = props => (
    <div>{props.message}</div>
)

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            showAddedUser: false,
            message: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }
        console.log(user);
        axios.post(`http://localhost:${process.env.REACT_APP_BE_PORT}/users/add`, user)
            .then(res => {
                console.log(res.data)
            })
        this.showUser()
        this.setState({
            username: ''
        })
    }

    showUser() {
        const addedUser = this.state.username
        this.setState({ message: `User ${addedUser} was added!` })
        this.setState({ showAddedUser: !this.state.showAddedUser })

    }

    render() {
        const { showAddedUser } = this.state;

        return (
            <div>
                <h3>Create New User</h3>
                <form data-ta="create-user" onSubmit={this.onSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            data-ta='username'
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" data-ta='submit_username' value="Create User" className="btn btn-primary" />
                    </div>
                </form>
                {showAddedUser && <ShowAddedUser message={this.state.message} />}
            </div>
        )
    }
}
