import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Input from '../../components/TextInput/Input';
import style from './Login.style';
import {Button} from 'native-base';
const LoginScreen = props => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

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
          <Button size="lg" style={style.button}>
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
            value={email}
            placeholder="Enter the Email"
            onChangeText={setEmail}
          />
          <Input
            value={password}
            placeholder="Enter the Password"
            onChangeText={setPassword}
          />
          <Button
            size="lg"
            style={style.button}
            onPress={() => props.navigation.navigate('Home')}>
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
