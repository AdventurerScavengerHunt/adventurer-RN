import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
//------------------------------------------------------------------
import { auth } from '../store/user';
import { styles } from '../styles';
//------------------------------------------------------------------
const LOGIN = 'login';
//------------------------------------------------------------------
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'clark@clark.com',
      password: '1234',
      error: false,
    };
    this.submitLogin = this.submitLogin.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  //------------------------------------------------------------------
  async submitLogin() {
    await this.props.login(this.state.email, this.state.password, LOGIN);
    if (this.props.user.id) {
      this.props.navigate('StartScreen');
    } else {
      this.setState({
        error: true,
      });
    }
  }
  //------------------------------------------------------------------
  signUp() {
    this.props.navigate('SignUp');
  }
  //------------------------------------------------------------------
  render() {
    return (
      <View style={styles.aboveHeader}>
        <Text style={styles.header}>LOGIN</Text>
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
        <View style={styles.aboveError} />
        <Text style={styles.errorMessageText}>
          {this.state.error ? 'Incorrect email or password' : ''}
        </Text>
        <Button title="Sign Up" onPress={this.signUp} />
        <Button title="Submit" onPress={this.submitLogin} />
      </View>
    );
  }
}
//------------------------------------------------------------------

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    navigate: ownProps.navigation.navigate,
  };
};
//------------------------------------------------------------------

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, method) => dispatch(auth(email, password, method)),
  };
};
//------------------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(Login);
