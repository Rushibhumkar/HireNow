import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HelpCenter = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.mainCont}>
                <Text style={styles.headingTxt}>Any Help?</Text>
                <Text style={styles.bigTxt}>Help Center</Text>
                <View style={styles.cont}>
                    <Text style={styles.descCont}>Having trouble finding the answer you need? Then get the assistance you need from our authority.</Text>
                </View>
                <Text style={styles.bigTxt}>FAQ's:</Text>
                <Text style={styles.desc}>Visit our FAQ's page: here there will be link to FAQ Page</Text>
                <Text style={styles.bigTxt}>Contact us:</Text>
                <Text style={styles.desc}>You can contact us on the mobile bumber: here there will be mobile number or you can just draft an email on you email address: here there will be email address</Text>
                <Text style={styles.bigTxt}>Twitter:</Text>
                <Text style={styles.desc}>You can send us a direct message on: twitter link</Text>
                <Text style={styles.bigTxt}>Facebook:</Text>
                <Text style={styles.desc}>You can send us a direct message on: twitter link</Text>
                <Text style={styles.bigTxt}>Instagram:</Text>
                <Text style={styles.desc}>You can send us a direct message on: twitter link</Text>

            </View>
            <TouchableOpacity
                style={[styles.btn]}
                onPress={() => navigation.navigate('TermsAndCon')}
            >
                <Text style={styles.btnTxt}>Next Screen</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default HelpCenter

const styles = StyleSheet.create({
    mainCont: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    headingTxt: {
        color: 'grey',
        fontSize: 16,
    },
    bigTxt: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
    },
    cont: {
        backgroundColor: '#D9B2FF',
        padding: 8,
        marginHorizontal: 8,
        marginTop: 16,
        borderRadius: 8,
    },
    desc: {
        color: 'black',
        padding: 5,
        marginTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingBottom: 8
    },
    descCont: {
        color: 'black',
        padding: 5,
        marginTop: 8,
        paddingBottom: 8
    },
    btn: {
        backgroundColor: '#6911ff',
        alignItems: 'center',
        marginHorizontal: 50,
        marginVertical: 10,
        borderRadius: 20,

    },
    btnTxt: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})