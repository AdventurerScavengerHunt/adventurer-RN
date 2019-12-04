import React from 'react'
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  ImageBackground
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
      <ImageBackground
        source={{
          uri:
            'https://cdn.vox-cdn.com/thumbor/JrouYZWSJNcepH5ZAhzVdUA7Muw=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/63616039/171109_08_11_37_5DS_0545.0.jpg'
        }}
        style={{width: '100%', height: '100%'}}
      >
        <Text style={styles.header}>AdventurAR</Text>
        <Image
          source={{
            uri:
              'http://www.i2clipart.com/cliparts/3/9/a/2/clipart-treasure-chest-39a2.png'
          }}
          style={{width: '80%', height: '45%', alignSelf: 'center'}}
        />
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
          <View style={styles.aboveError} />
          <Text style={styles.errorMessageText}>
            {this.state.error ? 'Incorrect email or password' : ''}
          </Text>
          <View style={styles.buttonRow}>
            <Button title="Sign Up " onPress={this.signUp} />
            <Button title="Login " onPress={this.submitLogin} />
          </View>
        </View>
      </ImageBackground>
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
