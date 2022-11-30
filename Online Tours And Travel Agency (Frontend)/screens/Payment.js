
import { Button, StyleSheet, Text, TextInput, View, Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Iconicons from "@expo/vector-icons/Ionicons";


import axios from 'axios';


export default function App({ navigation, route }) {

    const { days, customerId, city, price, arrivaldate, members, mode } = route.params;
    const [atmNo, setAtmNo] = useState("");
    const [cvv, setCvv] = useState("");
    const reg = /[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/;

   

    const bookPackage=async()=>{
      
        await axios({
          method: 'POST',
          url: 'http://192.168.212.236:8085/User/bookpackage',
          data: {
            days: days,
            customerId:customerId,
            city:city,
            price:price,
            arrivaldate:arrivaldate,
            members:members,
            mode:mode
          }
        })

        .then(function (response){
          console.log("response ", JSON.stringify(response.data))
          alert("Booked Successfully");
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })
      }




    const validate = () => {

        if ( !reg.test(atmNo) ||  cvv.length != 4 ) {
            
            alert("Enter Valid Detais");
        }else {
            Alert.alert("Confirm","Press Ok to Confirm...", [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK", onPress: () =>bookPackage() }
              ],
              {cancelable:true})
        }


    }



    function Header() {
        return <View style={{
            width: 500,
            height: 40,
            backgroundColor: "#852999",
            padding: 4,
        }}>
            <Text style={{
                color: "white",
                fontSize: 20,
                paddingLeft: 150
            }} >
                Payment
           
            </Text>
        </View>
    }


    return (
        <View style={{
            backgroundColor:"#B9E0FF",
            height:350,
        
        }} >

        {Header()}

        <View style={{
            marginBottom:20
        }}>
            <Text style={{
                fontSize:17,
                backgroundColor:"white",
                height: 50,
                padding:10,
                paddingLeft:20,
                marginBottom:20

            }} > Payment To Harsh Tours and Travels  Rs.{ price * members} /- </Text>
        </View>
        
        <TextInput style={{
            width:300,
            height:40,
            borderWidth:2,
            marginLeft:50,
            paddingLeft:10,
            marginBottom:15,


        }} onChangeText={(atmNo)=>setAtmNo(atmNo)}  placeholder='UPI ID' placeholderTextColor='black'>
            
        </TextInput> 

        <TextInput style={{
            width:300,
            height:40,
            borderWidth:2,
            marginLeft:50,
            paddingLeft:10
            
        }} onChangeText={(cvv)=>setCvv(cvv)}  secureTextEntry={true} placeholder='UPI PIN'  placeholderTextColor='black'>
            
        </TextInput> 

        <TouchableOpacity  style={{
            width:300,
            height:40,
            borderWidth:2,
            marginLeft:50,
            paddingLeft:10,
            marginBottom:10,
            backgroundColor:"orange",
            marginTop: 15,
            padding: -2,
            paddingLeft:0,
            flexDirection:"row",
            justifyContent: "flex-start"

        }}
        
        onPress={validate} >
            <Text style={{
                fontSize:20,
                paddingLeft:120,
                marginRight:5,
                color:"green"
            }} > 
            Pay 
            </Text>
            <Text>
            <Iconicons style={{
                marginLeft:100
            }} name="checkmark-circle-outline" size={30} color="green" /> 
            </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={()=>{}}>  */}


        {/* </TouchableOpacity> */}




        </View>


    )
}

