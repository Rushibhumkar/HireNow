import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import oneMech from './oneMech'

const MoreInfo = ({ navigation, route }) => {

    // const mechanic = route.params.mechanic

    return (
        <ScrollView>
            {oneMech.map((item) => {
                return (
                    <View style={styles.mainCont}
                        key={item.UID}>
                        <View style={[styles.titleCont]}>
                            <Image
                                style={styles.imgStyle}
                                source={item.img}
                            />
                            <View style={styles.title}>
                                <Text style={styles.titleText} >{item.name}</Text>
                                <Text style={styles.titleText} >{item.compname}</Text>
                                <Text style={styles.titleText} >{item.location}</Text>
                                <Text style={styles.titleText} >Id :{item.UID}</Text>
                                <TouchableOpacity style={[styles.locationBtn]}
                                    onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=`)}
                                >
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 5 }}>Show Location</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.expCont]}>
                            <Text style={[styles.tb, { fontSize: 20 }]}>Experience: 5years</Text>
                            <Text style={[styles.tb, { paddingHorizontal: 10 }]}>{item.desc}</Text>
                        </View>
                        <View style={[styles.contactDetailsCont]}>
                            <Text style={[styles.tb, { fontWeight: 'bold', fontSize: 22 }]}>Contact Details</Text>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={[styles.tb]}>Address :{item.address}</Text>
                                <Text style={[styles.tb]}>Mob No. :{item.phoneNum}</Text>
                                <Text style={[styles.tb]}>Email ID :{item.email}</Text>
                            </View>
                        </View>
                        <View style={styles}>
                            <Text style={[styles.tb, { fontWeight: 'bold', fontSize: 22, marginBottom: 10 }]}>Services</Text>
                            <View style={styles.servicesCont}>
                                <Text style={[styles.tb, styles.border]}>Engine Repair</Text>
                                <Text style={[styles.tb, styles.border]}>Cleanign</Text>
                                <Text style={[styles.tb, styles.border]}>Fuel & Oil</Text>
                                <Text style={[styles.tb, styles.border]}>AC Service & Repair</Text>
                                <Text style={[styles.tb, styles.border]}>Cleaning</Text>
                            </View>
                        </View>
                        <View style={styles.minChargeCont}>
                            <Text style={[styles.tb, { fontWeight: 'bold', fontSize: 22, marginBottom: 7 }]}>Minimum Charge</Text>
                            <Text style={[styles.tb, { paddingHorizontal: 10 }]}>Starting {item.mincharge}.Rs Onwards</Text>
                        </View>
                        <View style={styles.reviewCont}>
                            <Text style={[styles.tb, { fontWeight: 'bold', fontSize: 22 }]}>Uer Reviews</Text>
                            <View style={styles.reviewCont}>
                                <Text style={[styles.tb, styles.reviewTxt]}>Name Of User</Text>
                                <Text style={[styles.tb, styles.reviewTxt]}>Rating Of User</Text>
                                <Text style={[styles.tb, styles.reviewTxt]}>Date of Service</Text>
                                <Text style={[styles.tb, styles.reviewTxt]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit autem, sed provident consectetur ad eum dicta magnam! Aut, corrupti?</Text>
                            </View>
                        </View>
                    </View>
                )
            })}


        </ScrollView>
    )
}

export default MoreInfo

const styles = StyleSheet.create({
    tb: {
        color: 'black'
    },
    mainCont: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    titleText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    locationBtn: {
        backgroundColor: 'green',
        marginVertical: 5,
        borderRadius: 8,
    },
    titleCont: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    imgStyle: {
        width: '30%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 50,
        borderWidth: 0.2,
        borderColor: 'black',
        marginRight: 10,
    },
    minChargeCont: {
        marginVertical: 5,
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    expCont: {
        marginTop: 5,
        marginVertical: 5,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    contactDetailsCont: {
        marginVertical: 5,
        borderBottomWidth: 1,
        paddingBottom: 5,

    },
    reviewTxt: {
        paddingHorizontal: 10
    },
    servicesCont: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 5,
        borderBottomWidth: 1,
    },
    border: {
        borderColor: 'grey',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderWidth: 0.6,
        marginHorizontal: 4,
        marginBottom: 4,
        borderRadius: 8,
    }
})