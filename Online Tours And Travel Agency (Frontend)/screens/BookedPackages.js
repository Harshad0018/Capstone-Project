import { Button, StyleSheet, Text, TextInput, View,Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import Iconicons from "@expo/vector-icons/Ionicons";

// import { DateInput } from 'react-native-date-input';


export default function App ({navigation,route}) {

 const {custId} = route.params;

 const [arr, setArr]= useState([]);



 
 const getPackages=async()=>{
  console.log("Entering in get user")
    await axios({
      method: 'GET',
      url:'http://192.168.212.236:8085/User/ViewPackages/'+custId    
 
  })
    .then( (response)=>{

     console.log(response.data);
     setArr(response.data);

    })
    .catch((error)=>{
      console.log("error",error)
      alert(error);
    })

}


const deletePackage=(_id)=>async()=>{

  
  console.log("Entering in get user")
    await axios({
      method: 'DELETE',
      url:'http://192.168.212.236:8085/User/cancelBookbyId/'+ _id    
 
  })
    .then( (response)=>{

     console.log(response.data);
    
    //  setArr(response.data);

    })
    .catch((error)=>{
      console.log("error",error)
      alert(error);
    })

}






   
function myFun(obj){


    return <View style={{borderWidth:2 , padding:7,marginBottom:2, backgroundColor:"lightblue" }}>
      <Text>No of Days :                     {obj.days} </Text>
      <Text>Destination :                    {obj.city} </Text>
      <Text> Amount/Person :           {obj.price} </Text>
      <Text> Members :                      {obj.members} </Text>
      <Text> Mode :                             {obj.mode} </Text>
      <Text> Date: (DD-MM-YYYY) :  {obj.arrivaldate.slice(3,5)}-{obj.arrivaldate.slice(0,2)}-20{obj.arrivaldate.slice(6,8)}   </Text>
      <TouchableOpacity onPress={deletePackage(obj._id)} style={styles.link}>
            <Text><Iconicons name="trash-outline" size={20} color="black" /> Cancel Booking

           
            </Text>
        </TouchableOpacity >



        {/* <TouchableOpacity onPress={()=>{thisFun(obj._id)}} style={styles.link}>
            <Text><Iconicons name="trash-outline" size={20} color="black" /> Cancel Booking
            </Text>
        </TouchableOpacity> */}

    </View>

  
  
}
  


  return (
    <View >
    <View style={{
      width:500,
      height:40,
      padding:10,
      backgroundColor:"lightgreen",
      flexDirection:"row"

    }}>
      <Text style={{
        fontSize:16
      }} > Booked Packages</Text>

      <TouchableOpacity onPress={getPackages} style={{
        padding: 10,
        width: 90,
        height: 38,
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: "white",
        marginLeft:174,
        marginTop: -9
      }}      
      >
            <Text>
              View
            </Text>
      </TouchableOpacity>
    </View>



   

    <ScrollView  >

      {arr.map(myFun)}

      
      
    </ScrollView>
  </View>

  
  )
}




const styles = StyleSheet.create({
  grid: {
    flex: 2
  },
  box:{
    height: 30,
    width: 420,
    borderWidth: 1,
    padding:2,
    paddingLeft:120
  },
  container: {
    height: 200,
    width: 270,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  link: {
    padding: 6,
    paddingLeft:20,
    marginTop:10,
    width: 150,
    height: 35,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: "orange"

  },

  top: {
    flex: 0.1,
    width: 280,
    height: 300,
    backgroundColor: "grey",
    borderWidth: 5,
    borderRadius: 20,
    marginLeft:60,
    margin:10

  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});