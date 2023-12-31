import {View, Text, Image} from 'react-native';
import {React, useEffect} from 'react';
import LogoImg from '../Images/ic_launcher_round.png';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    setTimeout(() => {
      getSignUpDataFromStorage();
    }, 2000);
  }, [isFocused]);

  const getSignUpDataFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem('LoginUser');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData?.email !== '' && parsedData?.password !== '') {
          navigation.navigate('Home');
        }
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error while getting data from AsyncStorage:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={LogoImg} width={100} height={100} />
    </View>
  );
};

export default Splash;
