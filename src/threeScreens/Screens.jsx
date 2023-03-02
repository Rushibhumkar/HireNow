import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpCenter from './HelpCenter';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndCon from './TermsAndCon';

const Stack = createNativeStackNavigator();

const Screens = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                // headerBackground: '#8000FF'
                headerStyle: { backgroundColor: '#6911ff' }
            }}

            initialRouteName='PrivacyPolicy'
        >
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
            <Stack.Screen name='HelpCenter' component={HelpCenter} />
            <Stack.Screen name='TermsAndCon' component={TermsAndCon} />
        </Stack.Navigator>
    )
}

export default Screens

const styles = StyleSheet.create({})