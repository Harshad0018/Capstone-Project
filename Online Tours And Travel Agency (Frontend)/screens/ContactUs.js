
import { Button, StyleSheet, Text, TextInput, View, Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Iconicons from "@expo/vector-icons/Ionicons";

import axios from 'axios';


export default function App({ navigation, route }) {

  const {custId, name, email } = route.params;

  const addReview = async () => {
    await axios({
      method: 'POST',
      url: 'http://192.168.212.236:8085/User/contactDetails',
      data: {
        custId:custId,
        name:name,
        email: email,
        sub:sub,
        msg: msg
      }
    })

      .then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        // alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log("error", error)
        alert(error);
      })
  }




    const validate=()=>{
    
      if(sub.length > 0  && msg.length >0){
        addReview();
      alert(" Message Sent!...We will try to response ASAP!.....");
      }else{
        alert("Inputs can not be empty")
      }
    }
    
  




  const [sub, setSub] = useState("");
  const [msg, setmsg] = useState("");



  return (

    <View>
      <View style={styles.container}>

        <View style={{backgroundColor: "#FFF",flex: 1,}}> 
        </View>
        <View style={{
                backgroundColor: "orange",
                height: 50,
                paddingHorizontal: 20,
                marginBottom:10 }}>
                <Text style={{
                  fontSize: 20,
                  paddingTop: 10,
                  paddingLeft: 140,
                  color: "white"
                }} > Contact </Text>
        </View>



      <ScrollView> 
        
        <ScrollView style={styles.container1} >
        <Text style={styles.header}></Text>

<Text style={styles.contactDetails}><Iconicons name="mail-outline" size={30} color="#D35C35" />   Email: harshtoursandtravels@gmail.com {`\n`}{`\n`}<Iconicons name="call-outline" size={30} color="#D35C35" />   Mobile Number: 8554818714</Text>


          <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
          <TextInput onChangeText={(sub) => setSub(sub)} style={styles.input} placeholder='Subject' placeholderTextColor='red'></TextInput>
          <TextInput multiline={true} numberOfLines={4} onChangeText={(msg) => setmsg(msg)} style={styles.input2} placeholder='Write Message' placeholderTextColor='red'></TextInput>

          <View style={{ padding: 1, paddingBottom: 40 }}>
            
            <TouchableOpacity style={styles.btn} onPress={validate} >
              <Text style={styles.btn_txt}> Send </Text>
            </TouchableOpacity>

          </View>

          <View>
          </View>
          
          </ScrollView>
        </ScrollView>     
      </ScrollView>
      
    </View>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    fontWeight: 'bold',
    marginBottom:50,
  },
  header: {
    fontSize: 35,
    fontFamily: 'notoserif',
    color: 'blue',
    paddingLeft: 105,
    paddingBottom: 115,
    marginTop: -11,
    marginLeft: 20

  },
  scrollable: {

    alignItems: 'center'
  },
  input: {
    color: 'blue',
    margin: 2,
    borderRadius: 4,
    padding: 10,
    height: 50,
    width: 300,
    borderWidth: 2,
    marginBottom:5,
    backgroundColor: 'white',
    borderColor: 'green',
    // justifyContent:"space-between",
  },
  input2: {
    color: 'blue',
    margin: 2,
    borderRadius: 4,
    padding: 10,
    height: 120,
    width: 300,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: 'green',
    // justifyContent:"space-between",
  },
  container1: {


    //   alignItems: 'center',
    //   justifyContent: 'flex-start',
    //   borderWidth:2,
    borderRadius: 17,


    width: 400
  },

  btn: {
    // alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "orange",
    marginTop: 5,
    // height:10,
    width:170,
    marginBottom:-30,
    borderRadius:14
  },

  btn2: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 2,
    backgroundColor: "skyblue",
    marginTop: 10,
    // height:10,
    // width:100
  },

  btn_txt: {
    color: "#fff",
    fontWeight: 'bold',

  },
  contactDetails: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17,
    marginTop: -150,
    marginBottom: 10,
    marginLeft: 10,
    color: 'blue'
  },
  box2:{
    width:407,
    height:100,
    padding:10,
    backgroundColor:"grey",
    margin:2,
    marginBottom:0
  }
});



