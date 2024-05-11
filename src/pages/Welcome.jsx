import React, {useEffect} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import WelcomeImage from '../assets/splash/welcome.png';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

export default function Welcome() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={WelcomeImage} style={styles.background} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: height,
  },
});
