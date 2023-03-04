import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View, Image, Linking } from 'react-native';

const AcceptReq = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(true);

    }, 1000);

  }, [])

  return (
    <View style={styles.centeredView}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Your Request has been Accepted</Text>
            <Image style={styles.imgStyle} source={require('../images/acceptimg.png')} />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableOpacity> */}
      <View style={[styles.center]}>
        <TouchableOpacity style={styles.mecData}
          // onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=currentLocation`)}
          onPress={() => navigation.navigate('MoreInfo')}
        >
          <Text style={styles.mecDataTxt}>Show Mechanic Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imgStyle: {
    backgroundColor: '#fff'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#2196F3',
    paddingHorizontal: 25,
    borderRadius: 18,

  },
  button: {
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5
  },
  modalText: {
    color: 'black',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  imgStyle: {
    width: '40%',
    height: undefined,
    aspectRatio: 1,
  },
  center: {
    alignItems: 'center',
  },
  mecData: {
    backgroundColor: 'green',

  },
  mecDataTxt: {
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});

export default AcceptReq;