import React from "react";
import Input from "./Input";
import Button from "./Button";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  onChangeFirstName = ({ target }) => this.setState({ firstName: target.value });
  onChangeLastName = ({ target }) => this.setState({ lastName: target.value });
  onChangeEmail = ({ target }) => this.setState({ email: target.value });
  onChangePassword = ({ target }) => this.setState({ password: target.value });

  isValidForm = () => {
    const { firstName, lastName, email, password } = this.state;

    return (
      firstName.length > 3 &&
      lastName.length > 3 &&
      (email.length > 0 && email.includes('@')) &&
      password.length > 4
    );
  };

  render() {
    return (
      <div>
        <form>
          <Input
            id="fistName"
            label="First name"
            type="text"
            onChange={this.onChangeFirstName}
            value={this.state.firstName}
          />

          <Input
            id="lastName"
            label="Last name"
            type="text"
            onChange={this.onChangeLastName}
            value={this.state.lastName}
          />

          <Input
            id="email"
            label="Email address"
            type="email"
            onChange={this.onChangeEmail}
            value={this.state.email}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            onChange={this.onChangePassword}
            value={this.state.password}
          />

          <Button type="submit" isEnabled={this.isValidForm()}>
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
