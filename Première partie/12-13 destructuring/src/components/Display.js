import React, { Component} from "react";
import Users from "./Singers";

class Display extends Component {
    render() {
        return(
            <div>
                <h1>Musiciens</h1>
                <Users name="Tracy Chapman" age="60"/>
                <Users name="Youssou Ndour" age="63"/>
                <Users name="Wasis Diop" age="74"/>
                <Users name="Jay Z" age="54"/>
            </div>
        )
    }
}

export default Display;