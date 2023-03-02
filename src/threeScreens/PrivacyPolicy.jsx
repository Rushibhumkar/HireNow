import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import React from 'react'

const PrivacyPolicy = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.mainCont}>
                <Text style={styles.headingTxt}>Legal Terms</Text>
                <Text style={styles.bigTxt}>Privacy Policy</Text>
                <View style={styles.imgCont}>
                    <Image style={styles.imgStyle} source={require('../images/download2.jpg')} />
                </View>
                <Text style={styles.bigTxt}>Privacy Policy</Text>
                <Text style={styles.desc}>Our Privacy Policy explains what personal information we collect, how we use personal information, how personal information is shared, and privacy rights.</Text>
                <Text style={styles.bigTxt}>Relate Articles</Text>
                <Text style={styles.desc}>Relate Articles Here...</Text>
                <Text style={styles.bigTxt}>Privacy Policy</Text>
                <Text style={styles.desc}>Please review our privacy Policy.</Text>
                <Text style={styles.bigTxt}>Verifying your Identity</Text>
                <Text style={styles.desc}>Your security is important to us. Check out the steps we take to not only verify your identity.</Text>

            </View>
            <TouchableOpacity
                style={[styles.btn]}
                onPress={() => navigation.navigate('HelpCenter')}
            >
                <Text style={styles.btnTxt}>Next Screen</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default PrivacyPolicy

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
        marginBottom: 8
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
    },
    imgCont: {
        justifyContent: "center",
        alignItems: 'center'
    },
    imgStyle: {
        borderRadius: 10
    }
})