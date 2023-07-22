import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LogoImg from '../Images/ic_launcher_round.png';
import CustomTextInput from '../common/CustomTextInput';
import lock from '../Images/padlock.png';
import emailIcon from '../Images/mail.png';
import userIcon from '../Images/user.png';
import mobileIcon from '../Images/cell-phone.png';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [signupFormData, setSignupFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState({});

  const validateForm = () => {
    let isValid = true;
    let error = {};
    if (!signupFormData.name) {
      isValid = false;
      error['name'] = 'Please enter a name *';
    }
    if (!signupFormData.email) {
      isValid = false;
      error['email'] = 'Please enter a email *';
    }
    if (!signupFormData.phoneNumber) {
      isValid = false;
      error['phoneNumber'] = 'Please enter a number *';
    }
    if (signupFormData.phoneNumber?.length !== 10) {
      isValid = false;
      error['phoneNumber'] = 'Please enter 10 digit number *';
    }
    if (!signupFormData.password) {
      isValid = false;
      error['password'] = 'Please enter a password *';
    }
    if (!confirmPassword) {
      isValid = false;
      error['confirmPassword'] = 'Please enter a Confirm Password *';
    }
    if (confirmPassword !== signupFormData.password) {
      isValid = false;
      error['confirmPassword'] = 'Your Password does not match *';
    }
    setError(error);
    return isValid;
  };

  const FormSubmit = () => {
    if (validateForm()) {
    } else {
    }
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Image
          source={LogoImg}
          style={{width: 130, height: 130, alignSelf: 'center', marginTop: 20}}
        />
        <Text style={style.loginTitle}>Create a new account</Text>
        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <CustomTextInput
            type="text"
            value={signupFormData?.name}
            onChangeText={text =>
              setSignupFormData({...signupFormData, name: text})
            }
            placeholder="Enter Your Name"
            icon={userIcon}
          />
          {error?.name && <Text style={style.errMsg}>{error.name}</Text>}
          <CustomTextInput
            type="text"
            value={signupFormData?.email}
            onChangeText={text =>
              setSignupFormData({...signupFormData, email: text})
            }
            placeholder="Enter Your Email id.."
            icon={emailIcon}
          />
          {error?.email && <Text style={style.errMsg}>{error.email}</Text>}
          <CustomTextInput
            type="text"
            value={signupFormData?.phoneNumber}
            onChangeText={text =>
              setSignupFormData({...signupFormData, phoneNumber: text})
            }
            placeholder="Enter Your Number"
            icon={mobileIcon}
            keyboardType="number-pad"
          />
          {error?.phoneNumber && (
            <Text style={style.errMsg}>{error.phoneNumber}</Text>
          )}

          <CustomTextInput
            type="password"
            value={signupFormData?.password}
            onChangeText={text =>
              setSignupFormData({...signupFormData, password: text})
            }
            placeholder="Enter Your Password"
            icon={lock}
          />
          {error?.password && (
            <Text style={style.errMsg}>{error.password}</Text>
          )}
          <CustomTextInput
            type="password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            placeholder="Enter Confirm Password"
            icon={lock}
          />
          {error?.confirmPassword && (
            <Text style={style.errMsg}>{error.confirmPassword}</Text>
          )}

          <CustomButton
            title="Signup"
            bgColor="black"
            textColor="orange"
            onPress={() => FormSubmit()}
          />
          <Text
            onPress={() => navigation.navigate('Login')}
            style={style.createText}>
            Already have account ?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  loginTitle: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  createText: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
  errMsg: {
    color: 'red',
  },
});

export default Signup;
