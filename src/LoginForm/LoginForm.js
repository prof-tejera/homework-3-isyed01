import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";
import Checkbox from "components/Input/Checkbox";
import Submit from "components/Input/Submit";
import "./LoginForm.css";

const LoginForm = () => {
  return  <Panel backgroundColor="blue">
    <Input type="text" label="Username" id="usr" required={true} />
    <Input type="password" label="Password" id="pwd" required={true} />
    <Checkbox id="remember" label="Remember me" />
    <Submit value="Submit" />
  </Panel>;
};

export default LoginForm;
