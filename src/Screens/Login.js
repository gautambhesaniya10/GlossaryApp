import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoImg from '../Images/ic_launcher_round.png';
import CustomTextInput from '../common/CustomTextInput';
import lock from '../Images/padlock.png';
import emailIcon from '../Images/mail.png';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loarder';
import {useSelector} from 'react-redux';

const Login = () => {
  const navigation = useNavigation();
  const UserData = useSelector(state => state?.AllUsers?.Users);

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({});
  const [LoaderModalVisible, setLoaderModalVisible] = useState(false);

  const validateForm = () => {
    let isValid = true;
    let error = {};
    if (!loginFormData.email) {
      isValid = false;
      error['email'] = 'Please enter a email *';
    }
    if (!loginFormData.password) {
      isValid = false;
      error['password'] = 'Please enter a password *';
    }
    setError(error);
    return isValid;
  };

  const FormSubmit = async () => {
    if (validateForm()) {
      setLoaderModalVisible(true);
      const FindUser = UserData?.find(
        item =>
          item?.email === loginFormData?.email &&
          item?.password === loginFormData?.password,
      );
      if (FindUser) {
        setTimeout(() => {
          setLoaderModalVisible(false);
          setLoginFormData({
            email: '',
            password: '',
          });
          navigation.navigate('Home');
        }, 1000);
        await AsyncStorage.setItem('LoginUser', JSON.stringify(FindUser));
      } else {
        setLoaderModalVisible(false);
        Alert.alert("Your Email and Password Doesn't Match!");
      }
    }
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          source={LogoImg}
          style={{width: 130, height: 130, alignSelf: 'center', marginTop: 70}}
        />
        <Text style={style.loginTitle}>Login</Text>
        <View style={{margin: 30}}>
          <CustomTextInput
            type="text"
            value={loginFormData?.email}
            onChangeText={text =>
              setLoginFormData({...loginFormData, email: text})
            }
            placeholder="Enter Your Email id.."
            icon={emailIcon}
          />
          {error?.email && <Text style={style.errMsg}>{error.email}</Text>}
          <CustomTextInput
            type="password"
            value={loginFormData?.password}
            onChangeText={text =>
              setLoginFormData({...loginFormData, password: text})
            }
            placeholder="Enter Your Password"
            icon={lock}
          />
          {error?.password && (
            <Text style={style.errMsg}>{error.password}</Text>
          )}
          <CustomButton
            title="Login"
            bgColor="black"
            textColor="orange"
            onPress={() => FormSubmit()}
          />
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={style.createText}>
            Create a new account ?
          </Text>
        </View>
        <Loader
          LoaderModalVisible={LoaderModalVisible}
          setLoaderModalVisible={setLoaderModalVisible}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  loginTitle: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  createText: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  errMsg: {
    color: 'red',
  },
});

export default Login;
