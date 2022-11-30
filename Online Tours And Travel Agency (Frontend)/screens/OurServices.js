
import { Button, StyleSheet, Text, TextInput, View,Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Iconicons from "@expo/vector-icons/Ionicons";

import axios from 'axios';

const sevices = [
{
    icon:"",
    title:"",
    content:""
},
{
    icon:"",
    title:"",
    content:""
},
{
    icon:"",
    title:"",
    content:""
},
{
    icon:"",
    title:"",
    content:""
},
{
    icon:"",
    title:"",
    content:""
},
]


export default function App ({navigation,route}) {
 const {custId} = route.params;
 const [accountNo, setAccountNumb] = useState("");
 const [pin, setPinnn] = useState("");


 function Header(){
    return <View style={{
        width:500,
        height:40,
        backgroundColor:"orange",
        padding:4,
    }}>
        <Text style={{
            color:"white",
            fontSize:20,
            paddingLeft:150        }} >
             <Iconicons name="build-outline" size={25} color="green" />  Our Services
        </Text>
    </View>
 }


 function DivComp(logo, title, content1, content2){
    return <View style={{
        height:180,
        width:410,
        marginLeft:1,
        backgroundColor: "lightblue",
        borderWidth:1
    }}>

        <Text style={{
                marginLeft:200,
                marginTop:10
            }}>
            <Iconicons  name={logo} size={44} color="black" /> 
        </Text >
        <Text style={{
            color:"",
                marginLeft:140,
                fontSize:20,
                marginTop:10,
                marginBottom:10
            }}>
            {title}
        </Text>

        <Text style={{
                marginLeft:118,
                fontSize:15
            }} >
           {content1}
        </Text>

        <Text style={{
                marginLeft:130,
                fontSize:15
            }}>
            {content2}
        </Text>

    </View>
 }

     


  return (
    <View>
     {Header()}

  <ScrollView>
     {DivComp("bed-outline", "Affordable Hotels", "Here You Can Get Best Hotel's", "With Afortable Price Range")}
     {DivComp("fast-food-outline", "   Food And Drinks", "All Catagory Of Food And Drinks", "")}
     {DivComp("megaphone-outline", "       Safty Guide", "Safty Guide Facility Available", "")}
     {DivComp("earth-outline", "Around The World", "We Provide Services All Around World", "")}
     {DivComp("airplane-outline", "     Fastest Travel", "      Fastest And Comfortable", "           Travel Facility")}


  </ScrollView>
  </View>

   
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor:"white",
      fontWeight:'bold',
      },
      header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'blue',
        paddingLeft:105,
        paddingBottom:115,
        marginTop:-11,
        marginLeft:20
        
      },
  

   
    container1: {
        
     
        //   alignItems: 'center',
        //   justifyContent: 'flex-start',
        //   borderWidth:2,
          borderRadius:17,
      
          width:400 
        },
  
      
    
       
        contactDetails:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:17,
        marginTop: -150,
        marginBottom:10,
        marginLeft:10,  
        color:'blue'
    }
  });



