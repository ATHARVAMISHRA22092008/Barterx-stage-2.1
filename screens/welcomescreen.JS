import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
            <TextInput style={{borderRadius: 100, backgroundColor: "Grey"}}><Text>First Name</Text></TextInput>
            <TextInput style={{borderRadius: 100, backgroundColor: "Grey"}}><Text>Last Name</Text></TextInput>
            <TextInput style={{borderRadius: 100, backgroundColor: "Grey"}}><Text>Phone Number</Text></TextInput>
            <TextInput style={{borderRadius: 100, backgroundColor: "Grey"}}><Text>address</Text></TextInput>
            <TextInput style={{borderRadius: 100, backgroundColor: "Grey"}}><Text>eMail ID</Text></TextInput>
            <TextInput style={{borderRadius: 100, backgroundColor: "Grey"}}><Text>Password</Text></TextInput>
            <TextInput style={{borderRadius: 100, backgroundColor: "Grey"}}><Text>Confirm Password</Text></TextInput>
          </View>
        </View>
      </Modal>
        
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Sign Up
            
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
