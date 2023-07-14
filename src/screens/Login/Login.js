import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Input from '../../components/TextInput/Input';
import style from './Login.style';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import {login, register} from '../../state/actions/login/loginActions';
const LoginScreen = props => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const [loginUserName, setLoginUserName] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const userRegister = () => {
    props.register({
      userName: userName,
      email: email,
      password: password,
      password2: password2,
    });
  };
  const userLogin = () => {
    props.login({
      userName: loginUserName,
      password: loginPassword,
    });
  };
  return (
    <View style={style.body}>
      <View style={style.main}>
        <View style={style.signup}>
          <Text style={style.headingText}> Sign Up</Text>
          <Input
            value={userName}
            placeholder="Enter the User Name"
            onChangeText={setUserName}
          />
          <Input
            value={email}
            placeholder="Enter the Email"
            onChangeText={setEmail}
          />
          <Input
            value={password}
            placeholder="Enter the Password"
            onChangeText={setPassword}
          />
          <Input
            value={password2}
            placeholder="ReEnter the Password"
            onChangeText={setPassword2}
          />
          <Button
            size="lg"
            style={style.button}
            onPress={() => {
              userRegister();
            }}>
            Register
          </Button>
        </View>
        <View style={showLogin ? style.loginShow : style.login}>
          <Text
            style={style.headingTextLogin}
            onPress={() => setShowLogin(!showLogin)}>
            Login
          </Text>
          <Input
            value={loginUserName}
            placeholder="Enter the UserName"
            onChangeText={setLoginUserName}
          />
          <Input
            value={loginPassword}
            placeholder="Enter the Password"
            onChangeText={setLoginPassword}
          />
          <Button
            size="lg"
            style={style.button}
            onPress={() => {
              userLogin();
              props.navigation.navigate('Home');
            }}>
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  login: payload => {
    dispatch(login(payload));
  },
  register: payload => {
    dispatch(register(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
