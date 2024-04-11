import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"
import UploadFiles from "./components/upload-files.component"
import DownloadFiles from "./components/download-files.component"
import MailtoList from "./components/mailto-users.component"

function App() {
    return (
        <Router>
            <Navbar />
            <br />
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
            <Route path="/uploadfiles" component={UploadFiles} />
            <Route path="/downloadFiles" component={DownloadFiles} />
            <Route path="/mailto" component={MailtoList} />
        </Router>
    )
}

export default App
