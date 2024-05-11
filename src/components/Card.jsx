import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../context/GlobalContext';

export default function Card({item, index}) {
  const [data, setData] = useState([]);
  const {refresh, setRefresh} = useContext(GlobalContext);

  const defineItemFromStorage = async () => {
    const activities = await AsyncStorage.getItem('activities');
    if (!activities) {
      await AsyncStorage.setItem('activities', JSON.stringify([]));
    } else {
      const parsedStorage = JSON.parse(activities);
      console.log(parsedStorage);
      setData(parsedStorage);
    }
  };

  useEffect(() => {
    defineItemFromStorage();
  }, [refresh]);

  const add = async () => {
    const activities = await AsyncStorage.getItem('activities');
    let parsedStorage = JSON.parse(activities);
    parsedStorage.push(item.id);
    await AsyncStorage.setItem('activities', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };

  const remove = async () => {
    const activities = await AsyncStorage.getItem('activities');
    let parsedStorage = JSON.parse(activities);
    parsedStorage = parsedStorage.filter(s => s !== item.id);
    await AsyncStorage.setItem('activities', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };

  return (
    <View key={index} style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.time}>{item?.time}</Text>
      </View>

      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={data.includes(item.id) ? '#6B50F6' : '#767577'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => (data.includes(item.id) ? remove() : add())}
        value={data.includes(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    width: '60%',
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  time: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
    textAlign: 'center',
    marginTop: 10,
  },
});
