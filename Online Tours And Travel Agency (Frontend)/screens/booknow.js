import { Button, StyleSheet, Text, TextInput, View, Image, Linking, Touchable, Platform, TouchableOpacity, Alert, ScrollView, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import {DateTimePicker} from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import Iconicons from "@expo/vector-icons/Ionicons";


export default function App ({navigation,route}) {

    const {cId, city,price,url,days,mode} = route.params;    
    

    const[custId,setcustId]=useState("");
    const[Pin,setPin]=useState("");
    const[members,setMembers]=useState("");



  const [date, setDate] = useState(new Date(2022,11,28));

  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
    const showDatepicker = () => {
      showMode('date');
    };

    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        maxDate:new Date(),
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };




  function VadidateDate(){
    const myDate = new Date();
    const date1 = date.toLocaleDateString();
    const date2 = myDate.toLocaleDateString();
    const date11 = new Date(date1);
    const date22 = new Date(date2);

    if(date11 < date22 ){
      alert("Invalid date");
    }
    else if( members<=0 || members > 50){
      Alert.alert("Enter Valid Members");
    }
    else{
      navigation.navigate("Payment Page",{
        days: days,
        customerId:cId,
        city:city,
        price:price,
        arrivaldate:(date.toLocaleDateString()),
        members:members,
        mode:mode
       }); 
    }
  }

    


  return (
    <View>
    <View style={{
      backgroundColor: "#FFF",
      flex: 1
    }}>
    </View>
    <View style={{
      backgroundColor: "#00a46c",
      height: 50,
      width:460,

      paddingHorizontal: 20
    }}>
      <Text style={{
        fontSize:20,
        paddingTop:10,
        color:"white",
        paddingLeft:145
      }} >
       Book Now
        
      </Text>
      <Text style={{
          fontSize:20,
          // paddingTop:10,
          color:"white",
          paddingLeft:350,
          marginTop : -28
          }} >  </Text>

      
    </View>   
    
    <>
    


    <ScrollView >

        <View style={styles.container}>
          <View style={styles.grid}>
            <View style={styles.top} >
           <Image style={{height:250,width:404,borderWidth:3,marginTop:-5,borderRadius:10,marginLeft:4,marginTop:7}} source={{uri:url}}  />
          </View>
        </View>


         {/* <Image style={{height:30,width:30,marginLeft:10,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/symbol.png')}></Image> */}
        
        {/* <Image style={{height:180,width:180,marginLeft:210,marginTop:-165,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/OnlineBanking3.png')}></Image> */}

    <Text style={styles.container5}>
      <Text style={{color:"red"}}>City: {city}</Text> {"\n"}
      <Text style={{color:"red"}}>Days: {days}</Text>  {"\n"}
      <Text style={{color:"red",marginLeft:200}}>Price: {price} / Person </Text>  {"\n"}
      <Text style={{color:"red",marginLeft:200}}>Mode: {mode} </Text>  
    </Text>

    <View style={styles.container1}>
      <ScrollView   contentContainerStyle={styles.scrollable} style={styles.container1} >
      <TextInput onChangeText={(members)=>setMembers(members)} style={styles.input}      
        placeholder='Members' placeholderTextColor='black'></TextInput> 


      <View style={{flexDirection:"row"}}>
        <Text style={{
          marginLeft:0,
           width:100, 
           height:40,
           paddingTop:8,
           backgroundColor:"#548CFF",
           paddingLeft:10,           

             }}>
          Choose Date: 
        </Text>
        <Button 
        
        onPress={showDatepicker} title={date.toLocaleDateString()}>
        
        </Button>
       
    </View>

        
    


     

     <View style={{padding:20,paddingBottom:40}}>

      
     <TouchableOpacity onPress={VadidateDate} style={styles.btn}>
        <Text style={{alignItems:'center',fontSize:17,color:'blue'}}> Proceed </Text>
      
     </TouchableOpacity>

    


     </View>
     <View>
     </View>   
    </ScrollView>
   

    </View>
     <StatusBar style="auto" />
   </View>
   
   </ScrollView>
   
   </>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#F7F7F7',
        justifyContent:'flex-end',
      },
      header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'black',
        // paddingLeft:100,
        paddingBottom:15,
        marginTop:20,
        fontWeight:'bold',
        
      },
      myclass1:{
        marginLeft:200
      },
      scrollable:{
        
        alignItems:'center'
      },
      input:{
        color:'white',
        margin:15,
        padding:10,
        marginTop:9,
        height:40,
        width:180,
        marginLeft:17,
        backgroundColor:'#548CFF',
      }, 
      container5:{
        color:'blue',
        margin:1,
        padding:10,
        marginTop:7,
        marginBottom:15,
        height:90,
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'red',
        zIndex:4
        
      }, 


    container1: {
          backgroundColor: '#fff',     
          paddingTop:6,
          backgroundColor:'#B7E5DD',
          width:450,
          marginTop:-11,
          BorderColor:"black",
          
        
        },
        btn:{
            height:40,
            width:180 ,
            borderWidth:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#3FA796',
            marginLeft: 5,
            borderColor:'black',
            marginTop: 0,
        },

        loginbtn:{
          height:35,
          width:90 ,
          borderWidth:1,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:1,
          backgroundColor:'white',
         
          marginTop: 3,
          marginLeft: 25,

       },
      
      DiscText:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:10 ,
        marginTop: 7,
        color:'black'
    },
    
  });


 










