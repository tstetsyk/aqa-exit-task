import React, { Component } from "react"
import axios from "axios"
import fileDownload from 'js-file-download'

export default class DownloadFiles extends Component {
    constructor(props) {
        super(props);

    }

    onClick(e) {
        e.preventDefault();
        axios.get(`http://localhost:${process.env.REACT_APP_BE_PORT}/users/download/`)
            .then((res) => {
                fileDownload(JSON.stringify(res.data), res.data.fileName);
            })
    }

    render() {
        return (
            <div>
                <h3>Download Files</h3>
                <button className="btn btn-secondary" data-ta="downloadUsers" onClick={this.onClick}>Download Users</button>
            </div>
        )
    }
}
