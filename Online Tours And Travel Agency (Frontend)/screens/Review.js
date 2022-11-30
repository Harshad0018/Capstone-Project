
import { Button, StyleSheet, Text, TextInput, View, Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Iconicons from "@expo/vector-icons/Ionicons";

import axios from 'axios';


export default function App({ navigation, route }) {

  const addReview = async () => {
    await axios({
      method: 'POST',
      url: 'http://192.168.212.236:8085/User/addReview',
      data: {
        name:myname,
        rating: rating,
        msg:msg
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


  const getReview=async()=>{
    console.log("Entering in get user")
      await axios({
        method: 'GET',
        url:'http://192.168.212.236:8085/User/ViewReview'          
    })
      .then( (response)=>{
        
        // console.log( JSON.stringify(response.data)) 
        setArr(response.data);
      })
      .catch((error)=>{
        console.log("error",error)
        alert(error);
      })
    }

    const validate=()=>{
    console.log(typeof(rating));
    
    if( 1<= rating  && rating <=5){
      if(myname.length > 0  && msg.length >0){

        addReview();
        alert("Review Added");
      }else{
        alert("Inputs can not be empty")
      }
    }
    else{
      alert("Rate on a scale of 1 to 5");
    }
}

  const [arr, setArr] = useState([]);


  const [myname, setmyname] = useState("");
  const [rating, setrating] = useState("");
  const [msg, setmsg] = useState("");


function singleReview(obj){
  return <View style={styles.box2}>
    <Text> Name: {obj.name} </Text>
    <Text> Rating: {obj.rating} </Text>
    <Text> Message: {obj.msg} </Text>
  </View>
}


  return (
      <View style={styles.container}>

      <View style={{
        backgroundColor: "#FFF",
        flex: 1,
        

      }}>
      </View>
      <View style={{
        backgroundColor: "#00a46c",
        height: 50,
        paddingHorizontal: 20,
        marginBottom:10
      }}>
        <Text style={{
          fontSize: 20,
          paddingTop: 10,
          paddingLeft: 140,
          color: "white"
        }} >
          Review
        </Text>
      </View>

     


      {/* <ImageBackground style={{height:600,width:410,marginLeft:1,marginTop:15,resizeMode:'contain',justifyContent:'flex-start',}} source={require('../assets/background1.png')}> */}

      {/* <Image style={{height:135,width:135,marginLeft:20,marginTop:15,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/Swissbank.png')}></Image> */}
      {/* <Image style={{height:30,width:30,marginLeft:10,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/symbol.png')}></Image> */}

      {/* <Image style={{height:160,width:160,marginLeft:230,marginTop:-145,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/OnlineBanking3.png')}></Image> */}


      {/* <Text style={styles.header}></Text> */}
      {/* <Text style={styles.contactDetails}><Text style={{ color: "red" }}>Harshad: </Text>Thank You For Wonderful Trip, The Best Travel Agency In India.Accomodation Simply Superb. And Great Deals For Mumbai And Delhi {`\n`}{`\n`}<Text style={{ color: "red" }}>Vishal: </Text>One of the best tourist agency. Travel Comfort, On time Arrival.</Text> */}

      <ScrollView>

 
      <ScrollView style={styles.container1} >
        <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
          <TextInput onChangeText={(myname) => setmyname(myname)} style={styles.input} placeholder='Name' placeholderTextColor='red'></TextInput>
          <TextInput onChangeText={(rating) => setrating(rating)} style={styles.input} placeholder='Rating/5' placeholderTextColor='red'></TextInput>
          <TextInput multiline={true} numberOfLines={4} onChangeText={(msg) => setmsg(msg)} style={styles.input2} placeholder='Write Your Reviews' placeholderTextColor='red'></TextInput>

          <View style={{ padding: 1, paddingBottom: 40 }}>
            
            <TouchableOpacity style={styles.btn} onPress={validate} >
              <Text style={styles.btn_txt}><Iconicons name="add-circle-outline" size={20} color="blue" /> Add </Text>
            </TouchableOpacity>

          </View>

          <View>
          </View>
        </ScrollView>
      </ScrollView>

      <TouchableOpacity style={styles.btn2} onPress={getReview}>
          <Text>
          <Iconicons name="eye-outline" size={20} color="black" />  View Review
          </Text>
      </TouchableOpacity>

      <View>
        {arr.map(singleReview)}
      </View>
      </ScrollView>
    </View>

      

//,

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
    fontSize: 20,


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
    backgroundColor:"skyblue",
    margin:2,
    marginBottom:0
  }
});



