import React from 'react'
import {Text, TextInput, View, Button, ImageBackground} from 'react-native'
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
      email: 'clark@clark.com',
      password: '1234',
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
      <View style={styles.aboveHeader}>
        <ImageBackground
          source={{
            uri:
              'https://cdn.vox-cdn.com/thumbor/JrouYZWSJNcepH5ZAhzVdUA7Muw=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/63616039/171109_08_11_37_5DS_0545.0.jpg'
          }}
          style={{width: '100%', height: '100%'}}
        >
          <Text style={styles.header}>LOGIN</Text>
          <TextInput
            placeholder="Email"
            onChangeText={text => this.setState({email: text})}
            value={this.state.email}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            onChangeText={text => this.setState({password: text})}
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
        </ImageBackground>
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
