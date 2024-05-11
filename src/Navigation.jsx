import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Training from './pages/Training';
import Home from './pages/Home';
import {
  ActivityActiveIcon,
  ActivityInactiveIcon,
  HomeActiveIcon,
  HomeInactiveIcon,
} from './components/Svgs';
import FullBody from './pages/FullBody';
import LowBody from './pages/LowBody';
import AB from './pages/AB';
import Welcome from './pages/Welcome';
import Onboarding from './pages/Onboarding';
import OnboardingSecond from './pages/OnboardingSecond';
import OnboardingThird from './pages/OnboardingThird';
import OnboardingLast from './pages/OnboardingLast';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const {height} = Dimensions.get('window');

export default function Navigator() {
  const [initialScreen, setInitialScreen] = React.useState('');

  const checkTrainings = async () => {
    const activities = await AsyncStorage.getItem('activities');
    if (activities) {
      setInitialScreen('TabScreen');
    } else {
      setInitialScreen('Welcome');
    }
  };

  useEffect(() => {
    checkTrainings();
  }, []);

  if (initialScreen) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialScreen}
          screenOptions={{headerShown: false}}>
          <Stack.Screen component={TabScreen} name="TabScreen" />
          <Stack.Screen component={FullBody} name="FullBody" />
          <Stack.Screen component={LowBody} name="LowBody" />
          <Stack.Screen component={AB} name="AB" />
          <Stack.Screen component={Welcome} name="Welcome" />
          <Stack.Screen component={Onboarding} name="Onboarding" />
          <Stack.Screen component={OnboardingSecond} name="OnboardingSecond" />
          <Stack.Screen component={OnboardingThird} name="OnboardingThird" />
          <Stack.Screen component={OnboardingLast} name="OnboardingLast" />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        tabBarStyle: {
          flexDirection: 'row',
          height: height * 0.1,
          backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Poppins-Regular',
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <HomeActiveIcon />;
            } else {
              return <HomeInactiveIcon />;
            }
          },
        }}
      />

      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <ActivityActiveIcon />;
            } else {
              return <ActivityInactiveIcon />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
