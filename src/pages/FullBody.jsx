import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackNav} from '../components/Svgs';
import {fitness} from '../fitness/fitness';
import {useNavigation} from '@react-navigation/native';

export default function FullBody() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <BackNav />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {fitness.slice(0, 5).map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Image style={styles.image} source={item.image} />

            <Text style={styles.description}>{item.description}</Text>

            <Text style={styles.duration}>Длителность: {item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F2F',
  },
  container: {
    paddingBottom: 200,
  },
  back: {
    marginTop: 20,
    marginLeft: 20,
  },
  card: {},
  image: {
    height: 300,
    width: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    marginTop: 40,
    paddingHorizontal: 20,
    color: 'black',
  },
  description: {
    textAlign: 'justify',
    fontFamily: 'Poppins-Thin',
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 20,
    color: 'black',
    opacity: 0.5,
  },
  duration: {
    textAlign: 'justify',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 20,
    color: 'black',
  },
});
