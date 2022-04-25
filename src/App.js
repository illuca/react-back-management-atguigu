import React, {Component} from 'react';
import {Button, message} from "antd";
import "./App.less"

class App extends Component {
    handleClick() {
        message.success("被点击了")
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>点击</Button>
            </div>
        );
    }
}

export default App;