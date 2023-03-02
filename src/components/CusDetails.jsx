import { StyleSheet, Text, TextInput, Alert, TouchableOpacity, ScrollView, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import userinfo from '../data/UserInfo'

const CusDetails = ({ navigation, route }) => {

  const [problem, setProblem] = useState(false);
  // const [myName, setMyName] = useState(true);
  // const [vehType, setVehType] = useState(true);

  return (

    <ScrollView style={{ flex: 1 }}>
      {userinfo.map((item) => {



        // const myName = item.name;
        // const vehType = item.VehicleType;

        return (
          <View key={item.id}

          >
            <View style={[styles.mainCont]}
            >
              <Text style={[styles.txt, styles.lfStyle]}>Write Your Problem Here...</Text>

            </View>
            <View style={[styles.inputCont, styles.mainCont]} >
              <View style={[styles.row, styles.ipSection]} >
                <Text style={[styles.ipText, styles.gtxt]} >Name : </Text>
                <TextInput
                  style={[styles.ipStyle, styles.emailInput]}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor='grey'
                  value={item.name}
                // onChangeText={() => { setMyName(false) }}
                />

              </View>
              <View style={[styles.row, styles.ipSection]}>
                <Text style={[styles.ipText, styles.gtxt]} >Type of Vehicle</Text>
                <TextInput
                  style={[styles.ipStyle, styles.passwordStyle]}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor='grey'
                  multiline={true}
                  minHeight={80}
                  // numberOfLines={4}

                  // height={10}
                  value={item.VehicleType}
                // onChangeText={() => { setVehType(false) }}
                />

              </View>
              <View style={[styles.row, styles.ipSection]}>
                <Text style={[styles.ipText, styles.gtxt]} >Vehicle Problem :</Text>
                <TextInput
                  style={[styles.ipStyle, styles.problemTextIp]}
                  autoCapitalize="none"
                  autoCorrect={false}
                  multiline={true}
                  numberOfLines={5}
                  minHeight={100}
                  placeholder="Type problem here..."
                  placeholderTextColor='grey'
                  value={problem}
                  onChangeText={setProblem}
                />

              </View>
              {/* <View style={[styles.row,styles.ipSection]} >
            <Text style={[styles.ipText,styles.gtxt]} >Location : </Text>
            <TextInput 
              style={[styles.ipStyle]} 
              autoCapitalize="Location"
              autoCorrect={false}
              placeholder="Location..."
              placeholderTextColor='grey'
            />
          </View> */}
            </View>
            <View style={[styles.row, styles.center]}>
              <TouchableOpacity
                onPress={() => { navigation.navigate('MechanicList', { problem }) }}
                style={[styles.acceptBtn]}
              >
                <Text style={styles.cw}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      })}

    </ScrollView>
  )
}

export default CusDetails

const styles = StyleSheet.create({

  txt: {
    color: 'black'
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  gtxt: {
    color: 'black'
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    paddingHorizontal: 40,
    paddingVertical: 10,

  },
  shareLocBtn: {
    backgroundColor: 'green',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 5,
    paddingHorizontal: 12
  },
  cw: {
    color: "#fff"
  },
  acceptBtn: {
    backgroundColor: '#5D5FEF',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  row: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  lastRow: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
  },

  textStyle: {
    marginVertical: 15,
    fontSize: 16
  },
  lfStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#504A4B'
  },
  signUpText: {
    color: '#5ECB95',

  },
  mTop: {
    marginTop: 20,
  },
  center: {
    marginVertical: 10,
    justifyContent: 'center'
  },
  ipText: {
    marginBottom: 10,
    fontSize: 14
  },
  mainCont: {
    marginHorizontal: 25,
    marginVertical: 20
  },
  ipStyle: {
    color: 'black',
    height: 40,
    borderBottomWidth: 2,
    borderColor: 'none',
    flexWrap: 'wrap',
    // backgroundColor:'#AB9EFF',
    borderBottomColor: '#b3d9ff',
    borderRadius: 8,
    placeholderTextColor: '#333',
    paddingHorizontal: 10,
    width: '60%',
  },
  loginbtn: {
    borderRadius: 50
  },
  ipSection: {
    marginVertical: 15,
  },
  lastCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    borderBottomWidth: 2,
    borderRadius: 8,
    borderBottomColor: '#b3d9ff',


  },
  lastInnCont: {
    marginRight: 50,
    marginLeft: 10,
    alignItems: 'center',
    // justifyContent:'flex-start',
  },
  // shareLocTxt:{
  //   fontSize:10,
  //   padding:10
  // }
  problemTextIp: {
    height: 40
  }
})