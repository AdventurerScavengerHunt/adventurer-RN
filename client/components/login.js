import React from 'react'
import {
  Text,
  TextInput,
  View,
  Button,
} from 'react-native'
import {connect} from 'react-redux'
//------------------------------------------------------------------
import {auth} from '../store/user'
import {styles} from '../styles'
//------------------------------------------------------------------
const LOGIN = 'login'
//------------------------------------------------------------------
class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: false
    }
    this.submitLogin = this.submitLogin.bind(this)
    this.signUp = this.signUp.bind(this)
  }
  //------------------------------------------------------------------
  async submitLogin() {
    await this.props.login(this.state.email, this.state.password, LOGIN)
    if (this.props.user.id) {
      this.props.navigate('StartScreen')
    } else {
      this.setState({
        error: true
      })
    }
  }
  //------------------------------------------------------------------
  signUp() {
    this.props.navigate('SignUp')
  }
  //------------------------------------------------------------------
  render() {
    return (
      <View style={styles.loginScreenView}>
        <Text style={styles.loginHeader}>AdventurAR</Text>
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            onChangeText={text => this.setState({email: text})}
            value={this.state.email}
            autoCapitalize="none"
            style={styles.formInput}
          />
          <TextInput
            placeholder="Password"
            onChangeText={text => this.setState({password: text})}
            secureTextEntry={true}
            value={this.state.password}
            autoCapitalize="none"
            style={styles.formInput}
          />
          <Text style={styles.errorMessageText}>
            {this.state.error ? 'Incorrect email or password' : ''}
          </Text>
          <View style={styles.buttonColumn}>
            <Text style={[styles.buttonStyle, styles.loginButton]} onPress={this.submitLogin}>LOGIN</Text>
            <Text style={[styles.buttonStyle, styles.signUpButton]} onPress={this.signUp}>SIGN UP</Text>
          </View>
        </View>
      </View>
    )
  }
}
//------------------------------------------------------------------

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    navigate: ownProps.navigation.navigate
  }
}
//------------------------------------------------------------------

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, method) => dispatch(auth(email, password, method))
  }
}
//------------------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(Login)
