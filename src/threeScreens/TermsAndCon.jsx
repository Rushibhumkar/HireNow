import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TermsAndCon = () => {
    const link = `http://helpymoto.com`
    const agreement = `These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and HELPY MOTO PRIVATE LIMITED, concerning your access to and use of the ${link} website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY. The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.`
    return (
        <ScrollView>
            <View style={styles.mainCont}>
                <Text style={styles.headingTxt}>Legal terms</Text>
                <Text style={styles.bigTxt}>Terms and conditions</Text>
                <View style={styles.firstCont}>
                    <Text style={styles.secBigTxt}>1.Agreement to Terms:</Text>
                    <Text style={styles.desc}>{agreement}</Text>
                </View>
                <View style={styles.firstCont}>
                    <Text style={styles.bigTxt}>2.User Registration:</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default TermsAndCon

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
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8,
    },
    secBigTxt: {
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
        fontSize: 16,
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
})