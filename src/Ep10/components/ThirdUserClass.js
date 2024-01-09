import React from "react";

class ThirdUserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy location",
        avatar_url: "Dummy url",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/prash0265");
    const json = await data.json();
    console.log("json :>> ", json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: kmrprashanth92@gmail.com</h4>
        <img className="border border-solid border-black m-4" src={avatar_url}></img>
      </div>
    );
  }
}

export default ThirdUserClass;
