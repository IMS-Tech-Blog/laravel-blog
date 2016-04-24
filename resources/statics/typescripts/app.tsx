import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";

let Component : any = React.Component;

let Login = React.createClass({
    render: () => {
        return (
            <h1>Hello World!</h1>
        );
    }
});

ReactDOM.render(
    <Login />, 
    document.getElementById('output')
);
