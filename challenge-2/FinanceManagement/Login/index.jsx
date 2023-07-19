import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { React, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { mainColor, backgroundColor } from '../../assets/config';

export default function Login(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container} onTouchStart={Keyboard.dismiss}>
      <View style={styles.logoWrapper}>
        <View style={styles.logo}>
          <View style={styles.logoInside}></View>
        </View>
      </View>
      <View style={styles.formInput}>
        <View style={styles.inputField}>
          <Text style={styles.label}>Email address</Text>
          <View style={styles.inputWrapper}>
            <AntDesign name="mail" size={20} />
            <TextInput style={styles.input}></TextInput>
          </View>
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Password</Text>
          <View style={[styles.inputWrapper]}>
            <AntDesign name="lock" size={20} />
            <TextInput
              style={styles.input}
              secureTextEntry={showPassword ? false : true}/>
            <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={handleShowPassword}>
              <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.loginWrapper}
          onPress={props.handleOnPress}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>
        <View style={styles.navigate}>
          <TouchableOpacity>
            <Text>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${backgroundColor}`,
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#7276a3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoInside: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  formInput: {
    flex: 2,
    paddingHorizontal: 20,
  },
  inputField: {
    borderRadius: 20,
    padding: 8,
    marginBottom: 20,
    backgroundColor: '#ffff',
    shadowColor: '#d3dcf0',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    // elevation: 5
  },
  label: {
    marginLeft: 14,
    marginTop: 10,
    fontWeight: 500,
    fontSize: 15,
    opacity: 0.6,
  },
  inputWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    marginVertical: 6,
    gap: 10
  },

  input: {
    // flexGrow: 1,
    flex: 1,
    color: 'black',
    // backgroundColor: 'green'
  },

  loginWrapper: {
    backgroundColor: `${mainColor}`,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  loginTxt: {
    color: '#fff',
    fontSize: 16,
  },
  navigate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
