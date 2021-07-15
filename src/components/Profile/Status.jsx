import React from "react";
import {axiosAPI} from "../../api";

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.aboutMe,
        default: "No status yet"
    }
    onStatusChange = (e) => {
        debugger
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidMount() {
        this.props.getStatusThunk(this.props.userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    editModeOn = () => {
        this.setState({
            editMode: true
        })
    }
    editModeOff = () => {
        this.setState({
            editMode: false,
        })
        axiosAPI.putStatus(this.state.status).then(response => {
            this.props.getStatusThunk(this.props.userId)
        })
    }

    render() {
        return (
            !this.state.editMode ?
                <div>
                    <span onDoubleClick={this.editModeOn}>{this.props.status || this.state.default}</span>
                </div>
                :
                <div>
                    <input onChange={this.onStatusChange} onBlur={this.editModeOff} type="text" value={this.state.status}/>
                </div>
        )
    }
}

export default Status