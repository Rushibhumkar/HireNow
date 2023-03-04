// import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Linking, Button } from 'react-native'
// import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
// import Geolocation from 'react-native-geolocation-service'

// const requestLocationPermission = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//             {
//                 title: 'Geolocation Permission',
//                 message: 'Can we access your location?',
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
//         console.log('granted', granted);
//         if (granted === 'granted') {
//             console.log('You can use Geolocation');
//             return true;
//         } else {
//             console.log('You cannot use Geolocation');
//             return false;
//         }
//     } catch (err) {
//         return false;
//     }
// };

// const Card = ({ mech, problem }) => {



//     // state to hold location
//     const [location, setLocation] = useState(false);
//     // function to check permissions and get Location
//     const getLocation = () => {
//         const result = requestLocationPermission();
//         result.then(res => {
//             console.log('res is:', res);
//             if (res) {
//                 Geolocation.getCurrentPosition(
//                     position => {
//                         console.log(position);
//                         setLocation(position);
//                     },
//                     error => {
//                         // See error code charts below.
//                         console.log(error.code, error.message);
//                         setLocation(false);
//                     },
//                     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//                 );
//             }
//         });
//         // console.log(location);
//         // console.log(location.coords.latitude);
//         const mobUrl = '+917972755589';
//         // const locLink = `https://www.google.com/maps/search/?api=1&query=@${location.coords.latitude},${location.coords.longitude}`
//     };

//     return (

//     )
// };




import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, PermissionsAndroid, Linking, TouchableOpacity, ScrollView, Button } from 'react-native';
// Function to get permission for location
import Geolocation from 'react-native-geolocation-service'

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
            console.log('You can use Geolocation');
            return true;
        } else {
            console.log('You cannot use Geolocation');
            return false;
        }
    } catch (err) {
        return false;
    }
};
const Card = ({ mech, problem }) => {


    const [showMore, setShowMore] = useState(false)

    // const message = `Hi ${mech.name} this message from Helpy Moto .\nCar Problem : ${problem} `
    const mobUrl = '+919404006892'
    // state to hold location
    const [location, setLocation] = useState(false);
    // function to check permissions and get Location
    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        console.log(position);
                        setLocation(position);
                    },
                    error => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                        setLocation(false);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        });
        // console.log(location);
        const mobUrl = '+917972755589';

    };
    return (
        <View style={[styles.mainCont]}
            key={mech.UID}
        >
            <View style={styles.dataCont}>
                <Text style={styles.name}>Name : {mech.name}</Text>
                <View style={styles.inline}>
                    <Text style={styles.distance}>Rating :</Text>
                    <View style={styles.ratingRow}>
                        <Icon name='staro' size={18} color='black' style={styles.starIcon} />
                        <Icon name='staro' size={18} color='black' style={styles.starIcon} />
                        <Icon name='staro' size={18} color='black' style={styles.starIcon} />
                        <Icon name='staro' size={18} color='black' style={styles.starIcon} />
                        <Icon name='staro' size={18} color='black' style={styles.starIcon} />
                    </View>
                </View>
                <Text style={styles.location}>Location : {mech.location}</Text>
                <Text style={styles.phoneNum}>Mobile No : {mech.phoneNum}</Text>
            </View>
            {showMore ? <View style={styles.dataCont}>
                <Text style={styles.name}>Distance : {mech.distance}</Text>
                <Text style={styles.distance}>Experience : {mech.experience}</Text>
                <Text style={styles.location}>Address : {mech.address}</Text>
                <Text style={styles.phoneNum}>Mobile No : {mech.phoneNum}</Text>
            </View>
                : ''
            }
            <View style={[styles.center]}>
                <TouchableOpacity
                    onPress={() => setShowMore(!showMore)}
                    style={[styles.showMoreCont]}
                >
                    <Text style={styles.showMoreTxt}>Show {showMore ? 'Less' : 'More'}...</Text>

                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.btn}
                    onPress={getLocation}
                >
                    <Text>Permission</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => {
                        // Linking.openURL(`whatsapp://send?phone=${mech.phoneNum}&text=Problems:\n${problem}`)
                        getLocation();
                        Linking.openURL(`sms:number=${mobUrl}?body=https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`)
                    }}
                    style={[styles.acceptBtn]}
                >
                    <Text style={styles.cw}>Send Request</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'row'
    },
    name: {
        color: 'black',
    },
    distance: {
        color: "black",

    },
    location: {
        color: 'black'
    },
    phoneNum: {
        color: 'black'
    },
    mainCont: {
        backgroundColor: "#DBD6FF",
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10


    },
    cw: {
        color: '#fff',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    acceptBtn: {
        backgroundColor: '#5D5FEF',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginRight: 8,
        marginBottom: 8
    },
    reqAcceptBtn: {
        backgroundColor: 'green',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginHorizontal: 40,
        marginVertical: 15
    },
    dataCont: {
        marginLeft: 15,
        marginTop: 10,
    },
    center: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    showMoreCont: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginRight: 8,
        marginBottom: 8
    },
    showMoreTxt: {
        color: 'blue'
    },
    inline: {
        flexDirection: 'row',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    starIcon: {
        // backgroundColor:'yellow'
    },
    btn: {
        backgroundColor: 'cyan',
        padding: 5,
        borderRadius: 8,
    }
});

export default Card;