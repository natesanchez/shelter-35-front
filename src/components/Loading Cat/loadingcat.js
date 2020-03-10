import React, {Component} from 'react';
import './loadingcat.css'

class Loading extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL:'https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif?vid=1'
        }
    }
    render () {
        return (
            <video className="mainLoad" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }z
};

export default Loading;