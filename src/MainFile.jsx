import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MechanicList from './components/MechanicList'
import CusDetails from './components/CusDetails'
import DetailsSend from './components/DetailsSend'
import AcceptReq from './components/AcceptReq'
import MoreInfo from './components/MoreInfo'
import Card from './components/Card'

const MainFile = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: '#5D5FEF' }, tabBarStyle: { backgroundColor: '#5D5FEF' }, headerTitleAlign: 'center' }}
    >
      <Stack.Screen name="Customer Details" component={CusDetails} />
      <Stack.Screen name="MechanicList" component={MechanicList} />
      <Stack.Screen name="DetailsSend" component={DetailsSend} />
      <Stack.Screen name="AcceptReq" component={AcceptReq} />
      <Stack.Screen name="MoreInfo" component={MoreInfo} />
      <Stack.Screen name="Card" component={Card} />
    </Stack.Navigator>
  )
}

export default MainFile

const styles = StyleSheet.create({})