

import { Button, StyleSheet, Text, TextInput, View,Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './Login';
import axios from 'axios';



const Signup = ({navigation}) => {
    
    const register=async()=>{
        await axios({
          method: 'POST',
          url: 'http://192.168.212.236:8085/User/createAccount',
          data: {
            custId:custId,
            name:name,
            email:email,
            pin: Pin,
          
          }
        })
        .then(function (response){
          console.log("response ", JSON.stringify(response.data))
          // alert(JSON.stringify(response.data));
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })
      }

  const navlog=()=>{
    register();
    alert("Account Created!...");
    navigation.navigate('Login',{custId})
  }


    const[custId,setcustId]=useState("");
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[Pin,setPin]=useState("");
    const[balance,setbalance]=useState("")
    const[confirm,setconfirm]=useState("")

    const validate=()=>{

          // const strongRegex = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
          // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex = new RegExp("^[a-zA-Z]");


        if((custId=="")||(name=="")||(email=="")||(Pin=="")){
          alert("Input all fields")
        }else if(!name.match(regex)){
           alert("Enter valid name")
        }
        else if(Pin!=confirm){
            alert("Passwords do not match");
        }
        else if(Pin.length<4){
          alert("Pin should contain at least 4 Digit");
        }
        else if(!reg.test(email)){
            
            alert("Enter Valid Email");
        }
        else if(custId.length !=10){
          alert("Enter Valid Mobile Number!")
      }
        else{
            Alert.alert("Confirm","Are you sure you want to continue?", [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK", onPress: () =>navlog() }
              ],
              {cancelable:true})
        }
    }


 function Header_UI(){
      return(
       <View >     
        {/* ,resizeMode:'contain' */}
       <View style={{ backgroundColor: "white",height: 180,  }}>
       <Image style={{height:180,width:400,justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/logo.jpeg')}></Image>    
        <Text style={{
          color:"black ",
          fontSize:20,
          paddingTop:10,
          marginLeft:200, 
          color:"white"
        }} >    Log_in  </Text>
      </View>  
      
</View>  
)
}

function middle_ui(){

  return  <ScrollView>
  <ScrollView style={styles.middle_sec}>
    <View style={styles.mid_1}>

    <Text style={styles.mid_header} > Create Account </Text>


    <TextInput onChangeText={(uname)=>setcustId(uname)} autoFocus style={styles.mid_ip} placeholder='Mobile No'  placeholderTextColor='red'></TextInput>

    <TextInput onChangeText={(name)=>setname(name)} style={styles.mid_ip} placeholder='Name'   placeholderTextColor='red'></TextInput>
    <TextInput onChangeText={(email)=>setemail(email)} style={styles.mid_ip} placeholder='Email' placeholderTextColor='red'></TextInput>
     {/* <TextInput onChangeText={(balance)=>setbalance(balance)} style={styles.mid_ip}  placeholder='Enter Intial Balance ' placeholderTextColor='green'></TextInput> */}
    
     <TextInput onChangeText={(Pin)=>setPin(Pin)} secureTextEntry={true} style={styles.mid_ip} placeholder='Enter Pin' placeholderTextColor='red'></TextInput>
    
    <TextInput onChangeText={(confirm)=>setconfirm(confirm)} secureTextEntry={true} style={styles.mid_ip}  placeholder='Confirm Pin' placeholderTextColor='red'></TextInput>
    
    <View>       
    

    <TouchableOpacity style={styles.btn} onPress={validate} >
        <Text style={styles.btn_txt}> Sign Up </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn2} >
        <Text style={styles.btn_txt2}> Back To Login </Text>
    </TouchableOpacity>

    </View>
    

    </View>

  </ScrollView>
  </ScrollView>
}







  return (

    <View>
      {Header_UI()} 
      {middle_ui()}
        
    

    </View>











  //   <View style={styles.container}>
  //       <Image style={{height:155,width:155,marginLeft:20,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/Swissbank.png')}></Image>
  //        {/* <Image style={{height:30,width:30,marginLeft:10,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/symbol.png')}></Image> */}
        
  //       <Image style={{height:190,width:190,marginLeft:210,marginTop:-175,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/OnlineBanking3.png')}></Image>
  //       <Text style={styles.header}>Create Account</Text>
  //   <View style={styles.container1}>
  //   <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
  //    <TextInput onChangeText={(uname)=>setcustId(uname)} autoFocus style={styles.input} placeholder='Mobile No'  placeholderTextColor='green'></TextInput>
  //    <TextInput onChangeText={(name)=>setname(name)} style={styles.input} placeholder='Name'  placeholderTextColor='green'></TextInput>
  //    <TextInput onChangeText={(AccountNo)=>setAccountNo(AccountNo)} style={styles.input} placeholder='Email' placeholderTextColor='green'></TextInput>
  //    {/* <TextInput onChangeText={(balance)=>setbalance(balance)} style={styles.input}  placeholder='Enter Intial Balance ' placeholderTextColor='green'></TextInput> */}
    
  //    <TextInput onChangeText={(Pin)=>setPin(Pin)} secureTextEntry={true} style={styles.input} placeholder='Enter Pin' placeholderTextColor='green'></TextInput>
    
  //    <TextInput onChangeText={(confirm)=>setconfirm(confirm)} secureTextEntry={true} style={styles.input}  placeholder='Confirm Pin' placeholderTextColor='green'></TextInput>


  //    <View style={{padding:20,paddingBottom:40}}>
  //    <TouchableOpacity onPress={validate} style={styles.btn}>
  //       <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Create Account</Text>
  //    </TouchableOpacity>
  //    </View>
  //    <View>

  //    </View>   
  //   </ScrollView>
  //   </View>
  //    <StatusBar style="auto" />
  //  </View>
  )
}



const styles = StyleSheet.create({
  middle_sec:{
    
    width:"100%",
    height:560,
    backgroundColor:"#EFF5F5",
    borderWidth:2,
    
  },
  mid_header:{
    fontSize:24,
    color:"#0D4C92",
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:"#199187",
    borderBottomWidth:2
  },
  mid_1:{
    // backgroundColor:"red",

    width:300,
    marginLeft:50,
    marginTop:30
  },

  mid_ip:{
    alignSelf:'stretch',
    height:40,
    fontSize:15,
    marginBottom:30,
    color:"green",
    borderBottomColor:"black",
    borderBottomWidth:1,
    placeholderTextColor:"red"
    
  },

  btn:{
    alignSelf:"stretch",
    alignItems:"center",
    padding:20,
    backgroundColor:"#EB6440",
    marginTop:10,
    marginBottom: 70
  },
  btn2:{
    alignSelf:"stretch",
    alignItems:"center",
    padding:20,
    backgroundColor:"#EFF5F5",
    marginTop:30
  },
  btn_txt:{
    color:"#fff",
    fontWeight:'bold',

  },
  btn_txt2:{
    color:"blue",
    fontWeight:'bold',

  }

})



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'grey',
//         justifyContent:'flex-end',
//       },
//       header:{
//         fontSize:35,
//         fontFamily:'notoserif',
//         color:'black',
//         paddingLeft:20,
//         paddingBottom:15, 
//         fontWeight:'bold',
//         marginLeft:50 ,


//       },
//       scrollable:{
        
//         alignItems:'center'
//       },
//       input:{
//         color:'black',
//         margin:15,
//         borderRadius:5,
//         padding:10,
//         height:50,
//         width:390,
//         borderWidth:2,
//         backgroundColor:'white',
//         borderColor:'',
//         // justifyContent:"space-between",
//       },
//     container1: {
        
//           flex:0.9,
//           backgroundColor: '#fff',
    
//           borderRadius:17,
//           backgroundColor:'grey',
//           width:400
//         },
//         btn:{
//             height:45,
//             width:135 ,
//             borderWidth:3,
//             alignItems:'center',
//             justifyContent:'center',
//           backgroundColor:'skyblue',
//             borderColor:'bla',
//             marginLeft: 5,
//         }
//   });
  
export default Signup