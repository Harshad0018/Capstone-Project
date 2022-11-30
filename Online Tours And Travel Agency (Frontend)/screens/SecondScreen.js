import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import axios from 'axios'
import Iconicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
const App = ({ navigation, route }) => {

   const { custId, myName, email } = route.params;

   // const getuser=async()=>{
   //    console.log("Entering in get user")
   //   await axios({
   //     method: 'GET',
   //     url:'http://192.168.84.236:8085/User/ViewBalance/'+custId     
   // })
   //      .then( (response)=>{
   //        console.log(custId)
   //        console.log(response.data.custId)
   //        console.log(response.data.Pin)

   //        console.log(Pin)
   //        console.log( JSON.stringify(response.data))
   //       alert(name+" Your Account Balance is                                    RS.: "+response.data.balance)
   //      })
   //      .catch((error)=>{
   //        console.log("error",error)
   //        alert(error);
   //      })
   //  }

   const [name, setname] = useState("");
   const [AccountNo, setAccountNo] = useState("");
   const [Pin, setPin] = useState("");
   const [balance, setbalance] = useState("")

   function return_header() {
      return <View>
         <View style={{
            backgroundColor: "#EB6440",
            flex: 1
         }}>
         </View>
         <View style={{
            backgroundColor: "#00a46c",
            height: 50,
            paddingHorizontal: 20
         }}>
            <Text style={{
               fontSize: 20,
               marginTop: -5,
               paddingTop: 10,
               color: "white",
             
            }} >
               <Iconicons name="person-outline" size={34}  color="white" /> {myName}

            </Text>

            <TouchableOpacity  style={{
               fontSize: 20,
               paddingTop: 10,
               color: "white",
               paddingLeft: 330,
               marginTop: -48
            }} >
               <Text>
                  <Iconicons onPress={() => navigation.navigate("Login")} name="log-out-outline" size={40} color="white" />
               </Text>
            </TouchableOpacity>

            {/* <Text style={{
            fontSize:20,
            paddingTop:10,
            color:"white",
            paddingLeft:300,
            marginTop : -48
            }} >  <Iconicons name="log-out-outline" size={40} color="white"/>  </Text> */}


         </View>
      </View>
   }


   return (<View style={{ backgroundColor:"#FEFCF3" }}>

      {return_header()}

      <View>
         <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ margin: 34, marginLeft: 55,marginTop: 14 }} onPress={() => navigation.navigate("ShowPackage", { custId: custId })}>
               <Text>
                  <Iconicons name="airplane-outline" size={40} color="#D35C35" />
               </Text>
               <Text style={{ color: "#0002A1",marginLeft: -6}}>Explore </Text>
               <Text style={{ color: "#0002A1",marginLeft: -5}} >Packages </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ margin: 34 ,marginTop: 14,marginLeft:37}} onPress={() => navigation.navigate("Gallaryy", { custId })}>
               <Text>
                  <Iconicons name="images-outline" size={40} color="#D35C35" />
               </Text>
               <Text style={{ color: "#0002A1"}}>Gallery </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ margin: 34 ,marginTop: 14}} onPress={() => navigation.navigate("BookedPackages", { custId })}>
               <Text>
                  <Iconicons name="albums-outline" size={40} color="#D35C35" />
               </Text>
               <Text style={{ color: "#0002A1"}}>Booked </Text>
               <Text style={{ color: "#0002A1"}}>Packages </Text>
            </TouchableOpacity>
         </View>

         <View style={{ flexDirection: "row" }}>
            <TouchableOpacity  style={{ margin: 34, marginLeft: 55 ,marginTop: -14}} onPress={() => navigation.navigate("OurServices", { custId })} >
               <Text>
                  <Iconicons name="build-outline" size={40} color="#D35C35" />

               </Text>
               <Text style={{ color: "#0002A1"}}>Our </Text>
               <Text style={{ color: "#0002A1"}}>Services </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ margin: 34, marginLeft: 43 ,marginTop: -14 }} onPress={() => navigation.navigate("Review", { custId })}>
               <Text>
                  <Iconicons name="eye-outline" size={40} color="#D35C35" />
               </Text>
               <Text style={{ color: "#0002A1"}}>Review</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ margin: 34 ,marginTop:-14}} onPress={() => navigation.navigate("ContactUs", { custId , name :myName, email})}>
               <Text>
                  <Iconicons name="call-outline" size={40} color="#D35C35" />
               </Text>
               <Text style={{ color: "#0002A1"}}>Contact </Text>
            </TouchableOpacity>
         </View>

      </View>

      <View >
         <Text style={{
            marginLeft:24,
            // color:"black",
            height:30,
            width:700,
            marginLeft:-40,
            backgroundColor:"orange",
            paddingLeft:60,
            marginTop:-19,
            paddingTop:5
           
          
         }}>
            Recommended for you....
         </Text>
      </View>


      <ScrollView  horizontal={true}  >
         <View style={{flexDirection:"row", backgroundColor:"#FEFCF3"}}>

            <TouchableOpacity
               onPress={() => navigation.navigate("booknow", {
                  cId: custId,
                  city: "GOA",
                  price: 9999,
                  url:  "https://thumbs.dreamstime.com/b/word-goa-beach-word-goa-beach-nature-holiday-background-106198750.jpg",
                  days: 3,
                  mode:"Plane & Car"
               })}

               style={{
                  height: 282,
                  elevation: 2,
                  backgroundColor: "#FFF",
                  marginLeft: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 160,
               }}
            >

               <Image style={styles.container2} source={{
          uri: "https://thumbs.dreamstime.com/b/word-goa-beach-word-goa-beach-nature-holiday-background-106198750.jpg",
        }} />

               <View style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10
               }}>
                  <Text style={{
                     fontWeight: "bold",
                     color: "#EB6440",
                  }}> DAYS: 3</Text>
                  <Text style={{
                     fontWeight: "bold",
                     color: "#EB6440",
                     paddingLeft: 35
                  }}>RS.12999</Text>
               </View>
               <Text style={{

                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingTop: 3,
                  marginLeft: 4
               }}>
                  CITY:GOA
               </Text>
               <Text style={{

                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingTop: 3,
                  marginLeft: 4
               }}>
                  Mode: Plane & Car
               </Text>
            </TouchableOpacity>

            <TouchableOpacity
               onPress={() => navigation.navigate("booknow", {
                  cId: custId,
                  city: "DELHI",
                  price: 8999,
                  url:  "https://static.toiimg.com/photo/24245804.cms",
                  days: 2,
                  mode:"Bus"
               })}

               style={{
                  height: 282,
                  elevation: 2,
                  backgroundColor: "#FFF",
                  marginLeft: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 160
               }}
            >

               <Image style={styles.container2} source={{
          uri: "https://justdelhi.in/wp-content/uploads/2020/06/places-to-visit-delhi.jpg",
        }} />

               <View style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10
               }}>
                  <Text style={{
                     fontWeight: "bold",
                     color: "#EB6440",
                  }}> DAYS:2</Text>
                  <Text style={{
                     fontWeight: "bold",
                     color: "#EB6440",
                     paddingLeft: 35
                  }}>RS.8999</Text>
               </View>
               <Text style={{

                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingTop: 3,
                  marginLeft: 4
               }}>
                  CITY:DELHI
               </Text>
               <Text style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingTop: 3,
                  marginLeft: 4
               }}>
                  Mode: Plane & Car
               </Text>
            </TouchableOpacity>

            
            <TouchableOpacity
               onPress={() => navigation.navigate("booknow", {
                  cId: custId,
                  city: "MUMBAI",
                  price: 9499,
                  url:  "https://as1.ftcdn.net/v2/jpg/05/30/30/36/1000_F_530303671_cAr0s3X1m6GYIhdfVNe7TNTrGG6Sk8Z2.jpg",
                  days: 3,
                  mode:"Plane & Car"
               })}

               style={{
                  height: 282,
                  elevation: 2,
                  backgroundColor: "#FFF",
                  marginLeft: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 160
               }}
            >

               <Image style={styles.container2} source={{
          uri: "https://as1.ftcdn.net/v2/jpg/05/30/30/36/1000_F_530303671_cAr0s3X1m6GYIhdfVNe7TNTrGG6Sk8Z2.jpg",
        }} />

               <View style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10
               }}>
                  <Text style={{
                     fontWeight: "bold",
                     color: "#EB6440",
                  }}> DAYS: 3</Text>
                  <Text style={{
                     fontWeight: "bold",
                     color: "#EB6440",
                     paddingLeft: 35
                  }}>RS.9499</Text>
               </View>
               <Text style={{

                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingTop: 3,
                  marginLeft: 4
               }}>
                  CITY:MUMBAI
               </Text>
               <Text style={{

                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingTop: 3,
                  marginLeft: 4
               }}>
                  Mode: Plane & Car
               </Text>
            </TouchableOpacity>



            <TouchableOpacity
               onPress={() => navigation.navigate("booknow", {
                  cId: custId,
                  city: "KERLA",
                  price: 8999,
                   url: "https://www.india-tours.com/blog/wp-content/uploads/2020/06/kerala1-1024x536.jpg",
                 
                  days: 3,
                  mode:"Plane & Car"
               })}

               style={{
                  height: 282,
                  elevation: 2,
                  backgroundColor: "#FFF",
                  marginLeft: 20,
                  marginTop: 20,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 160
               }}
            >

               <Image style={styles.container2} source={{
          uri: "https://www.india-tours.com/blog/wp-content/uploads/2020/06/kerala1-1024x536.jpg",
        }} />

               <View style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10
               }}>
                  <Text style={{
                     fontWeight: "bold",
                     color: "#EB6440",
                  }}> DAYS: 3</Text>
                  <Text style={{
                     fontWeight: "bold",
                     color: "#EB6440",
                     paddingLeft: 35
                  }}>RS.8999</Text>
               </View>
               <Text style={{

                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingTop: 3,
                  marginLeft: 4
               }}>
                  CITY:KERALA
               </Text>
               <Text style={{

                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingTop: 3,
                  marginLeft: 4
               }}>
                  Mode: Plane & Car
               </Text>
            </TouchableOpacity>


         </View>


         
      </ScrollView>



   </View>
      // <View  style = {styles.container3}>
      // <Image style={{height:125,width:125,marginLeft:20,marginTop:10,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/Swissbank.png')}></Image>
      //    {/* <Image style={{height:30,width:30,marginLeft:10,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/symbol.png')}></Image> */}

      //   <Image style={{height:145,width:145,marginLeft:240,marginTop:-135,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('../assets/OnlineBanking3.png')}></Image>


      //    <TouchableOpacity  onPress={()=>navigation.navigate("ShowPackage",{custId:custId})} style = {styles.container}>
      //       <Text >
      //          View Packages Available    
      //       </Text>
      //        <Text style={styles.linknext}>Click Here</Text>

      //    </TouchableOpacity>

      //    {/* <TouchableOpacity  onPress={()=>navigation.navigate("artical page")} style = {styles.container}>
      //       <Text style = {styles.text}>
      //          Withdraw Money
      //       </Text>
      //       <Text style={styles.linknext}>Click Here</Text>
      //    </TouchableOpacity> */}
      //    <TouchableOpacity  onPress={()=>navigation.navigate("BookedPackages",{custId})} style = {styles.container}>
      //       <Text style = {styles.text}>
      //          View Booked Packages
      //       </Text>
      //       <Text style={styles.linknext}>Click Here</Text>
      //    </TouchableOpacity>

      //    <TouchableOpacity  onPress={()=>navigation.navigate("ContactUs",{custId})} style = {styles.container}>
      //       <Text style = {styles.text}>
      //         Contact Us
      //       </Text>
      //       <Text style={styles.linknext}>Click Here</Text>
      //    </TouchableOpacity>

      //    <TouchableOpacity  onPress={()=>alert("Contact Number: 9898989898                                            Email Address: swiss@gmail.com" ) } style = {styles.container4}>
      //       <Text style = {styles.text}>
      //        Contact us
      //       </Text>       
      //    </TouchableOpacity>

      //    <TouchableOpacity  onPress={()=> navigation.navigate("Login")} style = {styles.container5}>
      //       <Text style = {styles.text}>
      //        Logout
      //       </Text>

      //    </TouchableOpacity>

      // </View>


   )
}

const styles = StyleSheet.create({
   grid: {
      flex: 2
    },
    newClass1:{
      flex: 2, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: 400,
      backgroundColor: "red",
      flexDirection:"row"
    },
    box: {
      height: 30,
      width: 420,
      borderWidth: 1,
      padding: 2,
      paddingLeft: 120
    },
    container: {
      height: 200,
      width: 270,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    container2: {
      height: 200,
      width: 160,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    link: {
      padding: 10,
      width: 100,
      height: 40,
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: "white"
  
    },
  
    top: {
      flex: 0.1,
      width: 280,
      height: 300,
      backgroundColor: "grey",
      borderWidth: 5,
      borderRadius: 20,
      marginLeft: 60,
      margin: 10
  
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
  
  
  
  
  
  
  
  
    categoryContainer: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 20,
      justifyContent: 'space-between',
    },
    categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
    categoryTextSelected: {
      // color: COLORS.green,
      paddingBottom: 5,
      borderBottomWidth: 2,
      // borderColor: COLORS.green,
    },
    card: {
      height: 225,
      // backgroundColor: COLORS.light,
      width:150,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 20,
      padding: 15,
    },
    header: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    searchContainer: {
      height: 50,
      // backgroundColor: COLORS.light,
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
      // color: COLORS.dark,
    },
    sortBtn: {
      marginLeft: 10,
      height: 50,
      width: 50,
      borderRadius: 10,
      // backgroundColor: COLORS.green,
      justifyContent: 'center',
      alignItems: 'center',
    },
})

export default App