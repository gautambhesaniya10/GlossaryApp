import {View, Text, Image} from 'react-native';
import {React, useEffect} from 'react';
import LogoImg from '../Images/ic_launcher_round.png';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={LogoImg} width={100} height={100} />
    </View>
  );
};

export default Splash;
