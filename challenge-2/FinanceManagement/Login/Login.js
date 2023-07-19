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
import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  EMAIL_ADDRESS,
  PASSWORD,
  LOGIN,
  SIGNUP,
  FORGOT_PASSWORD,
} from '../../assets/config';

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
          <Text style={styles.label}>{EMAIL_ADDRESS}</Text>
          <View style={styles.inputWrapper}>
            <AntDesign name="mail" style={styles.loginIcon} />
            <TextInput style={styles.input}></TextInput>
          </View>
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>{PASSWORD}</Text>
          <View style={[styles.inputWrapper]}>
            <AntDesign name="lock" style={styles.loginIcon} />
            <TextInput
              style={styles.input}
              secureTextEntry={showPassword ? false : true}
            />
            <TouchableOpacity onPress={handleShowPassword}>
              <Feather
                name={showPassword ? 'eye-off' : 'eye'}
                style={styles.loginIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.loginWrapper}
          onPress={props.handleOnPress}>
          <Text style={styles.loginTxt}>{LOGIN}</Text>
        </TouchableOpacity>
        <View style={styles.navigate}>
          <TouchableOpacity>
            <Text style={styles.account}>{SIGNUP}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.account}>{FORGOT_PASSWORD}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${BACKGROUND_COLOR}`,
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
    borderRadius: 26,
    padding: 8,
    marginBottom: 20,
    marginTop: 10,
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
    gap: 10,
  },

  input: {
    flex: 1,
    color: 'black',
  },

  loginWrapper: {
    backgroundColor: `${MAIN_COLOR}`,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 10,
  },
  loginTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 700,
  },
  navigate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  account: {
    opacity: 0.7,
  },
  loginIcon: {
    fontSize: 20,
  },
});
