import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import React from "react";
import ThirdUserClass from "./ThirdUserClass"

class About extends React.Component {
  constructor(props){
    super(props);
    // console.log("Parent constructor");
  }
  componentDidMount(){
    // console.log("Parent component did mount");
  }
  render(){
    // console.log("Parent render");
    return (
      <div>
        <h1>This is my about section</h1>
        <h2>I'm Testing the code</h2>
        {/* <UserFunction name={"Prashanth Nandaram functional component"} /> */}
        {/* <UserClass name={"Prashanth Nandaram class component"} location={"Toronto, canada"}/>
        <UserClass name={"Prashanth Nandaram class component"} location={"Toronto, canada"}/> */}
        <ThirdUserClass />
      </div>
    
    );

  }
 
};

export default About;


// Parent constructor
// About.js:14 Parent render
// UserClass.js:10 Child constructor
// UserClass.js:16 Child render
// UserClass.js:10 Child constructor
// UserClass.js:16 Child render
// UserClass.js:13 Child component did mount
// UserClass.js:13 Child component did mount
// About.js:11 Parent component did mount