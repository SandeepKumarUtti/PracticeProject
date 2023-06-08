import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    margin: 0,
    marginTop: 60,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue',
    overflow: 'hidden',
  },
  check: {
    display: 'none',
  },
  signup: {
    width: '100%',
    height: '90%',
  },
  headingText: {
    color: '#fff',
    fontSize: 30,
    display: 'flex',
    alignSelf: 'center',
    margin: 20,
    fontWeight: 'bold',
  },
  login: {
    height: '100%',
    backgroundColor: '#eee',
    borderRadius: 60,
  },
  loginShow: {
    height: '100%',
    backgroundColor: '#eee',
    borderRadius: 60,
    transform: [{translateY: -650}],
  },
  headingTextLogin: {
    color: 'lightblue',
    fontSize: 30,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
    height: 50,
  },
});
