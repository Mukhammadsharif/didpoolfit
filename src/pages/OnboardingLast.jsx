import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import OnboardingImage from '../assets/splash/Onboarding4.png';
import {useNavigation} from '@react-navigation/native';
import {LastButton} from '../components/Svgs';

const {height} = Dimensions.get('window');

export default function OnboardingLast() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={OnboardingImage} style={styles.background}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TabScreen')}>
          <LastButton />
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
