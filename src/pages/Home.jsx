import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Banner from '../assets/images/Banner.png';
import FullBody from '../assets/images/Fullbody-Card.png';
import LowerBody from '../assets/images/Lowerbody-Card.png';
import Workout from '../assets/images/AB-Workout-Card.png';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={Banner} style={styles.banner} />

        <TouchableOpacity onPress={() => navigation.navigate('FullBody')}>
          <Image source={FullBody} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LowBody')}>
          <Image source={LowerBody} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AB')}>
          <Image source={Workout} style={styles.image} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  banner: {
    alignSelf: 'center',
    width: '95%',
    resizeMode: 'contain',
    height: 180,
  },
  image: {
    alignSelf: 'center',
    width: '95%',
    resizeMode: 'contain',
    height: 180,
  },
});
