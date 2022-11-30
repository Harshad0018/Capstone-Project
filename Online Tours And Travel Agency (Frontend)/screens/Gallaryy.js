
import { Button, StyleSheet, Text, TextInput, View, Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
const img = {uri:"https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"}
import Iconicons from "@expo/vector-icons/Ionicons";

export default function App({ navigation, route }) {

  function Header() {
    return <View style={{
      width: 500,
      height: 40,
      backgroundColor: "orange",
      padding: 4,
    }}>
      <Text style={{
        color: "white",
        fontSize: 20,
        paddingLeft: 110
      }} >
        Harsh Tours And Travels
      </Text>
      <Text style={{
          marginLeft:30,
          marginTop:-30
        }}>
          <Iconicons style={{
                marginLeft:"100"
            }} name="image-outline" size={33} color="green" /> 
       </Text>
    </View>
  }
  function Header1() {
    return <View style={{
      width: 500,
      height: 40,
      backgroundColor: "skyblue",
      padding: 4,
    }}>
      <Text style={{
        color: "white",
        fontSize: 20,
        paddingLeft: 170
      }} >
        Mumbai
      </Text>
    </View>
  }
  function Header2() {
    return <View style={{
      width: 500,
      height: 40,
      backgroundColor: "skyblue",
      padding: 4,
    }}>
      <Text style={{
        color: "white",
        fontSize: 20,
        paddingLeft: 180
      }} >
       Delhi
      </Text>
    </View>
  }
  function Header3() {
    return <View style={{
      width: 500,
      height: 40,
      backgroundColor: "skyblue",
      padding: 4,
    }}>
      <Text style={{
        color: "white",
        fontSize: 20,
        paddingLeft: 160
      }} >
       Koalkata
      </Text>
    </View>
  }
  function Header4() {
    return <View style={{
      width: 500,
      height: 40,
      backgroundColor: "skyblue",
      padding: 4,
    }}>
      <Text style={{
        color: "white",
        fontSize: 20,
        paddingLeft: 160
      }} >
       Hydrabad
      </Text>
    </View>
  }
  function Header5() {
    return <View style={{
      width: 500,
      height: 40,
      backgroundColor: "skyblue",
      padding: 4,
    }}>
      <Text style={{
        color: "white",
        fontSize: 20,
        paddingLeft: 160
      }} >
       Kashmir
      </Text>
    </View>
  }


  function IMG (url){
    return (
      <Image style={{height:200,width:200,justifyContent:'flex-start',paddingLeft:100,marginBottom:4,marginRight:4}}  source={{ uri:url }}></Image>    

    )

  }

  return (
<View>
{Header()}  
    <ScrollView>
      {Header1()}

      <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
       {IMG("https://as1.ftcdn.net/v2/jpg/05/30/30/36/1000_F_530303671_cAr0s3X1m6GYIhdfVNe7TNTrGG6Sk8Z2.jpg")}
       {IMG("https://static.toiimg.com/thumb/msid-24183773,width-1070,height-580,resizemode-75,imgsize-24183773,pt-32,y_pad-40/24183773.jpg")}

      </View>

      {Header2()}

      <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
       {IMG("https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Red_Fort%2C_Delhi_India.jpg/2560px-Red_Fort%2C_Delhi_India.jpg")}
       {IMG("https://www.holidaytravel.co/uploaded_files/product_img/16227826175f6d9930e307a.jpg")}
      </View>

      {Header3()}

      <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
       {IMG("https://static.toiimg.com/photo/msid-58475411,width-96,height-65.cms")}
       {IMG("https://images.unsplash.com/photo-1558431382-9b06d0507edc?ixlib=rb-4.0.3&ixid=https://www.wendywutours.com.au/resource/upload/1290/banner-kolkata-2.jpg.webp%3D&auto=format&fit=crop&w=600&q=60")}
        
      </View>

      {Header4()}

      <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
      {IMG("https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=")}
      {IMG("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Iuc5YxVeKXx1aK9QbuWpGPXqy-sP21TN5A&usqp=CAU")}

    

      </View>
      {Header5()}

<View style={{ flexDirection:"row", justifyContent:"space-between" }}>
{IMG("https://images.firstpost.com/wp-content/uploads/2022/02/Tourists-1.jpg")}
{IMG("https://gumlet.assettype.com/greaterkashmir%2F2022-01%2F3295b335-cb3a-4975-b937-3330b62b9a5b%2FTOURISTS_RUSHES_ON_EVE_OF_NEW_YEAR__8_.JPG?auto=format%2Ccompress&fit=max&w=400&dpr=2.6")}



</View>



    </ScrollView>
    </View>
  )

}



