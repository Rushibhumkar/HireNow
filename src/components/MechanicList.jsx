import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Linking } from 'react-native'
import React, { useState } from 'react'
// import { Icon } from 'react-native-vector-icons/AntDesign'
import mechanics from '../data/MecData'
// import Modal from "react-native-modal";
import Card from './Card'


const MechanicList = ({ navigation, route }) => {
    // const [bookings, setBookings] = useState([])

    // useEffect(() => {
    //     setBookings(mechanics.filter((item)=>{
    //         return item.status=== Location 
    //     }))

    // }, [])

    // const [textShown, setTextShown] = useState(false);

    const { problem } = route.params;

    const [showMore, setShowMore] = useState(false)






    return (
        <ScrollView>
            {mechanics.map((item) => {

                return (
                    <Card mech={item} problem={problem} key={item.UID} />
                )
            }

            )}
            <View>
                <TouchableOpacity
                    style={[styles.reqAcceptBtn]}
                    onPress={() => navigation.navigate('AcceptReq')}

                >
                    <Text style>Request Accepted</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default MechanicList

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row'
    },
    name: {
        color: 'black',
    },
    distance: {
        color: "black"
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
        marginLeft: 10,
        marginTop: 5
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
    }

})