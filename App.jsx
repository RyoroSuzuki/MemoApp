import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAnalytics } from 'firebase/analytics';
import MemoListScreen from './src/screen/MemoListScreen';
import MemoDetailScreen from './src/screen/MemoDetailScreen';
import MemoEditScreen from './src/screen/MemoEditScreen';
import MemoCreateScreen from './src/screen/MemoCreateScreen';
import LogInScreen from './src/screen/LogInScreen';
import SignUpScreen from './src/screen/SignUpScreen';

// eslint-disable-next-line react/function-component-definition

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC7PUUDoUU2GUKfEATS02u6CxXTDcW_N1I',
  authDomain: 'memoapp-1ab20.firebaseapp.com',
  projectId: 'memoapp-1ab20',
  storageBucket: 'memoapp-1ab20.appspot.com',
  messagingSenderId: '125267204193',
  appId: '1:125267204193:web:d248e91f1f39d31cd87220',
  measurementId: 'G-VVERMX4SS6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

// udemyで記載されていたコード
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#FFFFFF', fontWeight: 'bold' },
          headerTitle: 'Memo App',
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
