import { Button, StyleSheet, Text, TextInput, View, Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { pin } from 'react-native-ico-shopping/src/data';

export default function App ({navigation}) {
    const getuser=async()=>{
      console.log("Entering in get user")
        await axios({
          method: 'GET',
          url:'http://192.168.212.236:8085/User/ViewDetails/'+custId          
      })
        .then( (res)=>{
          
          console.log( JSON.stringify(res.data)) 

          if(custId==res.data.custId && Pin == res.data.pin ){
           
            alert("Welcome "+res.data.name);
            navigation.navigate("Landing Page",{custId:custId,myName:res.data.name, email:res.data.email});
          }
          else{
            alert("Incorrect Credentials");
          }
         
        })
        .catch((error)=>{
          console.log("error",error)
          alert(error);
        })
      }
    

    const[custId,setcustId]=useState("");
    const[Pin,setPin]=useState("");


    function Validate(){
      if(custId.length != 10){
        alert("Mobile Number should be 10 digits")
      }else{
         getuser();
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
  return <View style={styles.middle_sec}>
    <View style={styles.mid_1}>

    <Text style={styles.mid_header} > Enter Login Details </Text>


    <TextInput onChangeText={(custId)=>setcustId(custId)} autoFocus style={styles.mid_ip} placeholder='Mobile Number'  underlineColorAndroid={'transparent'} placeholderTextColor="red" ></TextInput>

    <TextInput onChangeText={(Pin)=>setPin(Pin)} secureTextEntry={true} style={styles.mid_ip} placeholder='Enter Pin'
     underlineColorAndroid={'transparent'} placeholderTextColor="red" ></TextInput>

    
    <View>

    <TouchableOpacity style={styles.btn} onPress={Validate} >
        <Text style={styles.btn_txt}> Login </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn2} onPress={()=>navigation.navigate("SignUp")} >
        <Text style={styles.btn_txt2}> Sign Up </Text>
    </TouchableOpacity>

    </View>
    

    </View>

  </View>
}
    
  return (
    <View>
      {Header_UI()}
      {middle_ui()}

    </View>
    
           
     
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
    marginTop:10
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
//         backgroundColor: '#a9a9a9',
//         justifyContent:'flex-end',
//       },
//       header:{
//         fontSize:35,
//         fontFamily:'notoserif',
//         color:'black',
//         paddingLeft:100,
//         paddingBottom:15,
//         marginTop:20,
//         fontWeight:'bold',
        
//       },
//       scrollable:{
        
//         alignItems:'center'
//       },
//       input:{
//         color:'black',
//         margin:15,
//         borderRadius:5,
//         padding:10,
//         marginTop:7,
//         height:50,
//         width:390,
//         borderWidth:2,
//         backgroundColor:'white',
//         borderColor:'',
//       }, 

//     //   inputHeaderTxt:{
//     //  marginLeft:-300

//     //   },

//     container1: {


//           flex:0.9,
//           backgroundColor: '#fff',
//         //   alignItems: 'center',
//         //   justifyContent: 'flex-start',
//         //   borderWidth:2,
//           borderRadius:17,
//           backgroundColor:'#a9a9a9',
//           width:400,
//           BorderColor:"black",
          
        
//         },
//         btn:{
//             height:40,
//             width:130 ,
//             borderWidth:1,
//             alignItems:'center',
//             justifyContent:'center',
//             borderRadius:1,
//             backgroundColor:'#5CB8E4',
//             marginLeft: 5,
//             marginTop: -19,
//         },

//         loginbtn:{
//           height:35,
//           width:90 ,
//           borderWidth:1,
//           alignItems:'center',
//           justifyContent:'center',
//           borderRadius:1,
//           backgroundColor:'white',
         
//           marginTop: 3,
//           marginLeft: 25,

//        },
      
//       DiscText:{
//         alignItems:'center',
//         justifyContent:'center',
//         fontSize:10 ,
//         marginTop: 7,
//         color:'black'
//     }
//   });


 











// import { Button, StyleSheet, Text, TextInput, View,Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import axios from 'axios';



// export default function App ({navigation}) {
//     const getuser=async()=>{
//       console.log("Entering in get user")
//         await axios({
//           method: 'GET',
//           url:'http://192.168.40.236:8085/User/ViewBalance/'+custId
        
     
//       })
//         .then( (response)=>{
//           console.log(custId)
//           console.log(response.data.custId)
//           console.log(response.data.Pin)

//           console.log(Pin)
//           console.log( JSON.stringify(response.data))

//           if(custId===response.data.custId ){
//             alert("Login Successful");
//             navigation.navigate("Second Page",{custId});
//           }
//           else{
//             alert("Incorrect Credentials");
//           }
         
//         })
//         .catch((error)=>{
//           console.log("error",error)
//           alert(error);
//         })
//       }
    

//     const[custId,setcustId]=useState("");
//     const[Pin,setPin]=useState("");

//     const[AccountNo,setAccountNo]=useState("");


    
//   return (
//     <View style={styles.container}>
//          {/* <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('./bank.png')}></Image> */}

//         <Text style={styles.header}>Login</Text>
//     <View style={styles.container1}>
//     <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
//      <TextInput onChangeText={(custId)=>setcustId(custId)} autoFocus style={styles.input} placeholder='Customer ID'  placeholderTextColor='green'></TextInput>
//      {/* <TextInput onChangeText={(AccountNo)=>setAccountNo(AccountNo)} style={styles.input} placeholder='Account Number' placeholderTextColor='red'></TextInput> */}
//      <TextInput onChangeText={(Pin)=>setPin(Pin)} secureTextEntry={true} style={styles.input} placeholder='Enter Pin' placeholderTextColor='green'></TextInput>
    
//      <View style={{padding:20,paddingBottom:40}}>

      
//      <TouchableOpacity onPress={getuser} style={styles.btn}>
//         <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Login</Text>
//      </TouchableOpacity>

//      <Text style={styles.DiscText}>Click on Sign Up to Create Account</Text>
//      <TouchableOpacity  onPress={()=>navigation.navigate("SignUp")} style={styles.loginbtn}>
    
//         <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Sign Up</Text>
//      </TouchableOpacity>
//      </View>



//      <View>
//      </View>   
//     </ScrollView>
//     </View>
//      <StatusBar style="auto" />

//    </View>

     

//   )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'grey',
//         justifyContent:'flex-end',
//       },
//       header:{
//         fontSize:35,
//         fontFamily:'notoserif',
//         color:'skyblue',
//         paddingLeft:150,
//         paddingBottom:15
        
//       },
//       scrollable:{
        
//         alignItems:'center'
//       },
//       input:{
//         color:'blue',
//         margin:15,
//         borderRadius:20,
//         padding:10,
//         height:50,
//         width:300 ,
//         borderWidth:2,
//         backgroundColor:'white',
//         borderColor:'',
//         // justifyContent:"space-between",
//       },
//     container1: {
        
//           flex:0.9,
//           backgroundColor: '#fff',
//         //   alignItems: 'center',
//         //   justifyContent: 'flex-start',
//         //   borderWidth:2,
//           borderRadius:17,
//           backgroundColor:'grey',
//           width:400
//         },
//         btn:{
//             height:40,
//             width:130 ,
//             borderWidth:3,
//             alignItems:'center',
//             justifyContent:'center',
//             borderRadius:20,
//             backgroundColor:'white',
//             borderColor:'blue',
//         },

//         loginbtn:{
//           height:40,
//           width:130 ,
//           borderWidth:3,
//           alignItems:'center',
//           justifyContent:'center',
//           borderRadius:20,
//           backgroundColor:'white',
//           borderColor:'blue',
//           marginTop: 10,
//       },
//       DiscText:{
//         alignItems:'center',
//         justifyContent:'center',
//         fontSize:9 ,
//         marginTop: 30,
//         color:'white'
//     }
//   });
  


