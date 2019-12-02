import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { auth } from '../store/user';
import { styles } from '../styles';

const SIGNUP = 'signup';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: null,
    };
    this.createAccount = this.createAccount.bind(this);
  }

  // checks if user entered valid info and displays handy errorMessage if not
  async createAccount() {
    this.setState({
      errorMessage: null,
    });
    if (
      this.state.password === this.state.confirmPassword &&
      this.state.password.length >= 3
    ) {
      const newUser = await this.props.signup(
        this.state.email,
        this.state.password,
        SIGNUP,
        this.state.username
      );
      // if object returned on newUser, which will include the appropriate error, a validation error has occurred
      // newUser should return undefined if successful
      if (newUser) {
        this.setState({
          errorMessage: 'Invalid username or email',
        });
      } else {
        this.props.navigate('StartScreen');
      }
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        errorMessage: 'Passwords do not match',
      });
    } else if (this.state.password.length < 3) {
      this.setState({
        errorMessage: 'Password must be longer than 3 characters',
      });
    }
  }

  render() {
    return (
      <View style={styles.aboveHeader}>
        <Text style={styles.header}>SIGNUP</Text>
        <TextInput
          placeholder="Username"
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Email"
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry={true}
          value={this.state.password}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Confirm Password"
          onChangeText={text => this.setState({ confirmPassword: text })}
          secureTextEntry={true}
          value={this.state.confirmPassword}
          autoCapitalize="none"
        />
        <View style={styles.aboveError} />
        {this.state.errorMessage ? (
          <Text style={styles.errorMessageText}>{this.state.errorMessage}</Text>
        ) : (
          <Text />
        )}
        <Button title="Create Account" onPress={this.createAccount} />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    navigate: ownProps.navigation.navigate,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (email, password, method, username) =>
      dispatch(auth(email, password, method, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);