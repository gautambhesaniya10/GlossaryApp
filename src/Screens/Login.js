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

const Login = () => {
  const navigation = useNavigation();

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({});
  const [signUpUser, setSignUpUser] = useState({});
  console.log('signUpUsersignUpUser------', signUpUser);
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
    const storedData = await AsyncStorage.getItem('signUpUsers');
    const parsedData = JSON.parse(storedData);

    console.log(
      'Object.values(parsedData).length',
      parsedData && Object.values(parsedData)?.length,
    );

    if (validateForm() || parsedData) {
      setLoaderModalVisible(true);
      if (
        loginFormData &&
        parsedData &&
        loginFormData?.email === parsedData?.email &&
        loginFormData?.password === parsedData?.password
      ) {
        setTimeout(() => {
          setLoaderModalVisible(false);
          setLoginFormData({
            email: '',
            password: '',
          });
          navigation.navigate('Home');
        }, 1000);
      } else if (parsedData && Object.values(parsedData)?.length === null) {
        setLoaderModalVisible(false);
        Alert.alert('you can first signup !');
      } else {
        setLoaderModalVisible(false);
        Alert.alert("Your Email and Password doesn't match!");
      }
    }
  };

  return (
    <>
      <View style={{flex: 1}}>
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
