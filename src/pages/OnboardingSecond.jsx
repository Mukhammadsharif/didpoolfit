import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import OnboardingImage from '../assets/splash/Onboarding2.png';
import {useNavigation} from '@react-navigation/native';
import {SecondButton} from '../components/Svgs';

const {height} = Dimensions.get('window');

export default function OnboardingSecond() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={OnboardingImage} style={styles.background}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OnboardingThird')}>
          <SecondButton />
        </TouchableOpacity>
      </ImageBackground>
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
  button: {
    position: 'absolute',
    bottom: 20,
    right: 50,
  },
});
