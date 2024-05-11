import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {fitness} from '../fitness/fitness';
import Card from '../components/Card';

export default function Training() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {fitness.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
