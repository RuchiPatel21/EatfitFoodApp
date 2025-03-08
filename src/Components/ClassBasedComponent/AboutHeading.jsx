import React from "react";
import { UserContext } from "../../utils/UserContext";

class AboutHeading extends React.Component{
    constructor(props){
        // comes in render phase
        super(props);
        this.state = {
            count : 1
        }
    }

    componentDidMount(){
        // comes in commit phase
        // ** is called once when the component gets mount just like useEffect with empty array dependency

        // setting interval
        this.setIntervalData = setInterval(() => {
            console.log("Interval from class based commponent About Heading")
        }, 2000);
    }

    componentWillUnmount(){

        // comes in commit phase
        // called before the component is about to un mount to remove the evenetListeners and setInterval
        clearInterval(this.setIntervalData);
    }

    componentDidUpdate(prevState,prevProps){
        // comes in commit phase
        // This get called whenever there is any change in component or render occurs

        // to create functionality like useEffect with an dependency of any state we get prevProps and prevState
        if(this.state.count !== prevState.count){
            // To do something if state is changed of count
            console.log("Count state changed!");
        }
    }

    render(){
        // comes in render phase
        return(
            <div>
                <UserContext.Consumer>
                    {(data)=>console.log("Data of Context in Class Based Component",data)}
                </UserContext.Consumer>
                Header of About Component
                {this.props.details}
                <div>{this.state.count}</div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Click Me</button>
            </div>
        )
    }
}

export default AboutHeading


// calling the class based component is like
// <AboutHeading/>


// if multiple class based component are called then the flow will be like

// <AboutHeading1/>
// <AboutHeading2/>

/**
 *  AboutHeading1 constructor
 *  AboutHeading1 render
 
 *  AboutHeading2 constructor
 *  AboutHeading2 render
 
 *  AboutHeading1 componentDidMount
 *  AboutHeading2 componentDidMount
 
 * As React will try to complete the render phase first

 */

//=========== If a class based component is called inside other class based component ================
    /**
    <AboutHeading1>
        <AboutHeading2/>
    <AboutHeading1/>

Then the flow will be like

 *  AboutHeading1 constructor
 *  AboutHeading1 render
 
 *  AboutHeading2 constructor
 *  AboutHeading2 render
 
 *  AboutHeading2 componentDidMount
 *  AboutHeading1 componentDidMount
     */
//====================================================================================================



// context Api in class based component