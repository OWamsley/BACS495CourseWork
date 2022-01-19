import React from "react";

const user = {
    firstName: 'Owen',
    lastName: 'Wamsley'
}

function formatName(user){
    return user.firstName + " " + user.lastName;
}

function getGreeting(user){
    if (user){
        return(<h1>Hello {formatName(user)}</h1> )
    }
    return(<h1>Hello Stranger!</h1>)
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date: new Date()});
    }

    render(){
        return(
            <div>
                <h1>Hello, this is my clock
                </h1>
                <h2>
                    It is {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        )
    }
}

const element =(
    <h1>
        Hello, {formatName(user)}!
    </h1>
)

function Hello(props){
    return(
        //getGreeting(user)
        <h1>Hey there {props.name}
        <div>
            <Clock date={props.date} />
        </div></h1>
        
    );
}

export default Hello;