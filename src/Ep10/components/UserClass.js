import React from "react";
import SecondUserClass from "./SecondUserClass";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count : 0,
      count1: 1,
    };
    console.log("1st Child constructor");
  }
  componentDidMount(){
    console.log("1st Child component did mount");
  }
  render() {
    console.log("1st Child render");
    const { name, location } = this.props;
    // const { count, count1 } = this.props;
 

    return (
      <div className="user-card">
        <h1>Count : {this.state.count}</h1>
        <h1>Count1 : {this.state.count1}</h1>
        <button onClick={()=>{
          this.setState({
            count: this.state.count+1,
            count1:this.state.count1+1,
          })
        }}>Increase count</button>
        {/* <h1>Count  : {count }</h1>
            <h1>Count1 : {count1}</h1> */}
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: kmrprashanth92@gmail.com</h4>
        <SecondUserClass />
      </div>
      
    );
   
  }
}

export default UserClass;
