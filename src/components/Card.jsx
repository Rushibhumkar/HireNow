import { StyleSheet, Text, TouchableOpacity, View,ScrollView,Linking } from 'react-native'
import React ,{useState} from 'react'
import Icon  from 'react-native-vector-icons/AntDesign'

const Card = ({mech,problem}) => {
    const [showMore, setShowMore] = useState(false)

    const message=`Hi ${mech.name} this message from Helpy Moto .\nCar Problem : ${problem} `
    const location=`https://www.google.com/maps/search/?api=1&query=currentLocation`
    const mobUrl='+919404006892'

  return (
       <View style={[styles.mainCont]}
            key={mech.UID}
        >
                    <View style={styles.dataCont}>
                        <Text style={styles.name}>Name : {mech.name}</Text>
                        <View style={styles.inline}>
                            <Text style={styles.distance}>Rating :</Text>
                            <View style={styles.ratingRow}>
                                <Icon name='staro' size={18} color='black' style={styles.starIcon}/>
                                <Icon name='staro' size={18} color='black' style={styles.starIcon}/>
                                <Icon name='staro' size={18} color='black' style={styles.starIcon}/>
                                <Icon name='staro' size={18} color='black' style={styles.starIcon}/>
                                <Icon name='staro' size={18} color='black' style={styles.starIcon}/>
                            </View>
                        </View>
                        <Text style={styles.location}>Location : {mech.location}</Text>
                        {/* <Text style={styles.phoneNum}>Mobile No : {mech.phoneNum}</Text> */}
                    </View>
                {showMore ?    <View style={styles.dataCont}>
                        <Text style={styles.name}>Distance : {mech.distance}</Text>
                        <Text style={styles.distance}>Experience : {mech.experience}</Text>
                        <Text style={styles.location}>Address : {mech.address}</Text>
                        <Text style={styles.phoneNum}>Mobile No : {mech.phoneNum}</Text>
                    </View>
                : ''
                }
                <View style={[styles.center]}>
                    <TouchableOpacity
                        onPress={()=>setShowMore(!showMore)}
                        style={[styles.showMoreCont]}
                    >
                        <Text style={styles.showMoreTxt}>Show {showMore ? 'Less' : 'More'}...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            // Linking.openURL(`whatsapp://send?phone=${mech.phoneNum}&text=Problems:\n${problem}`)
                            Linking.openURL(`sms:${mobUrl}?body=${message}\nLocation: ${location}`)


                        }}
                        style={[styles.acceptBtn]}
                    >
                        <Text style={styles.cw}>Send Request</Text>
                    </TouchableOpacity>
                </View>
             
             
        </View>
  )
}

export default Card

const styles = StyleSheet.create({
    buttons:{
        flexDirection:'row'
    },
    name:{
        color:'black',
    },
    distance:{
        color:"black",

    },
    location:{
        color:'black'
    },
    phoneNum:{
        color:'black'
    },
    mainCont:{
        backgroundColor:"#DBD6FF",
        marginHorizontal:10,
        marginTop:10,
        borderRadius:10

        
    },
    cw:{
        color:'#fff',
        fontWeight:'bold'
    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    acceptBtn:{
        backgroundColor:'#5D5FEF',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:8,
        marginRight:8,
        marginBottom:8
    },
    reqAcceptBtn:{
        backgroundColor:'green',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:8,
        marginHorizontal:40,
        marginVertical:15
    },
    dataCont:{
        marginLeft:15,
        marginTop:10,
    },
    center:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    showMoreCont:{
        paddingHorizontal:20,
        paddingVertical:8,
        marginRight:8,
        marginBottom:8
    },
    showMoreTxt:{
        color:'blue'
    },
    inline:{
        flexDirection:'row',
    },
    ratingRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    starIcon:{
        // backgroundColor:'yellow'
    }
})