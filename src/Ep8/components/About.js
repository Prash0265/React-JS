import UserFunction from "./UserFunction";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is my about section</h1>
      <h2>I'm Testing the code</h2>
      <UserFunction name={"Prashanth Nandaram functional component"} />
      <UserClass name={"Prashanth Nandaram class component"} location={"Toronto, canada"}/>
    </div>
  );
};

export default About;
