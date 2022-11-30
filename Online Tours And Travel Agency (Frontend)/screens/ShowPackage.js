import React, { useEffect, useState, Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';

import Iconicons from "@expo/vector-icons/Ionicons";

import { SafeAreaView } from 'react-native-safe-area-context';


export function ShowPackage({ navigation, route }) {
  const { custId } = route.params;
  const city = "bombay";

  const [arr, setArr] = useState([
    {
      city: "Agra",
      price: 6999,
      days: 3,
      mode: "Train & Car",
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
    },
    {
      city: "Mumbai",
      price: 9499,
      days: 3,
      mode: "Plane & Car",
      url: "https://as1.ftcdn.net/v2/jpg/05/30/30/36/1000_F_530303671_cAr0s3X1m6GYIhdfVNe7TNTrGG6Sk8Z2.jpg"
    },

    {
      city: "Delhi",
      price: 8999,
      days: 2,
      mode: "Plane & Car",
      url: "https://justdelhi.in/wp-content/uploads/2020/06/places-to-visit-delhi.jpg"
    },
    {
      city: "Kashmir",
      price: 9999,
      days: 3,
      mode: "Plane & Car",
      url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      city: "Goa",
      price: 12999,
      days: 3,
      mode: "Plane & Car",
      url: "https://thumbs.dreamstime.com/b/word-goa-beach-word-goa-beach-nature-holiday-background-106198750.jpg"
    },
    {
      city: "Hydrabad",
      price: 5999,
      days: 2,
      mode: "Bus & Car",
      url: "https://www.nobroker.in/blog/wp-content/uploads/2021/09/posh-areas-in-Hyderabad.jpg"
    },
    {
      city: "Lonavala",
      price: 5999,
      days: 3,
      mode: "Bus",
      url: "https://i.ytimg.com/vi/zmh71TJUqkI/sddefault.jpg"
    },
    {
      city: "Kerala",
      price: 8999,
      days: 3,
      mode: "Plane & Car",
      url: "https://www.india-tours.com/blog/wp-content/uploads/2020/06/kerala1-1024x536.jpg"
    },
    {
      city: "Lavasa",
      price: 5999,
      days: 2,
      mode: "Bus & Car",
      url: "https://is1-2.housingcdn.com/4f2250e8/22ca0fb9215be51061185f714631758a/v3/fs/lavasa_brookview_1_2_3_4_5_lcl_0001-lavasa-raigad-lavasa_corporation.jpg"
    },

    {
      city: "Kanyakumari",
      price: 9999,
      days: 3,
      mode: "Plane & CAr",
      url: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/28213939/kanyakumari-sightseeing-and-things-to-do-FEATURE-compressed.jpg"
    },

  ]);


  function thisFun(obj1, obj2) {
    return <View style={{ flexDirection: "row" }}>
      {GiveUI(obj1)}
      {GiveUI(obj2)}
    </View>
  }



  function GiveUI(obj) {

    return <View  >


      <TouchableOpacity
        onPress={() => navigation.navigate("booknow", {
          cId: custId,
          city: obj.city,
          price: obj.price,
          url: obj.url,
          days: obj.days,
          mode: obj.mode


        })}
        style={{
          height: 280,
          elevation: 14,
          backgroundColor: "#FFF",
          marginLeft: 20,
          marginTop: 20,
          borderRadius: 15,
          marginBottom: 20,
          width: 160,
          shadowColor: "red",
          shadowOffset: 30,
        }}
      >

        <Image style={styles.container2} source={{ uri: obj.url }} />

        <View style={{
          flexDirection: "row",
          paddingTop: 10,
          paddingHorizontal: 10
        }}>
          <Text style={{
            fontWeight: "bold",
            color: "#EB6440",
          }}> DAYS: {obj.days}</Text>
          <Text style={{
            fontWeight: "bold",
            color: "#EB6440",
            paddingLeft: 35
          }}>RS.{obj.price}</Text>
        </View>

        <Text style={{

          paddingHorizontal: 10,
          fontWeight: "bold",
          color: "#00a46c",
          paddingTop: 3,
          marginLeft: 4
        }}>
          CITY: {obj.city}
        </Text>
        <Text style={{
          paddingHorizontal: 10,
          fontWeight: "bold",
          color: "#00a46c",
          paddingTop: 3,
          marginLeft: 4
        }}>
          Mode: {obj.mode}
        </Text>
      </TouchableOpacity>
    </View>

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
        paddingHorizontal: 20
      }}>

        <View style={{

        }}>

          <Text style={{
            fontSize: 20,
            paddingTop: 10,
            color: "white"
          }} >
            Available Packages
          </Text>

          <Text style={{
            marginLeft: 330,
            marginTop: -30
          }}>
            <Iconicons style={{
              marginLeft: "100"
            }} name="airplane-outline" size={33} color="white" />
          </Text>

        </View>

      </View>

      <ScrollView>
        {/* <View style={styles.myClass1}> */}

        {/* {arr.map(myFun)} */}

        {/* {arr.map(GiveUI)} */}

        {/* {arr.map(thisFun)} */}
        {thisFun(arr[0], arr[1])}
        {thisFun(arr[2], arr[3])}
        {thisFun(arr[4], arr[5])}
        {thisFun(arr[6], arr[7])}
        {thisFun(arr[8], arr[9])}



        {/* <View style={styles.grid}> */}

        {/* <View style={styles.top} >
          <Image style={styles.container} source={{ uri: "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80" }} />

          <Text style={{ color: "red" }}>   Mumbai    </Text>
          <Text> Rs: 200 </Text>
          <TouchableOpacity onPress={() => navigation.navigate("booknow", { city: "nashik" })} style={styles.link}>
            <Text>
              Book Now
            </Text>
          </TouchableOpacity>
        </View> */}

        {/* </View> */}
        {/* </View> */}

      </ScrollView>
      <View style={{ paddingBottom: 220 }}>

      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  grid: {
    flex: 2
  },
  newClass1: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "red",
    flexDirection: "row"
  },
  box: {
    height: 30,
    width: 420,
    borderWidth: 1,
    padding: 2,
    // backgroundColour:"red",
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
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    // color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    // borderColor: COLORS.green,
  },
  card: {
    height: 225,
    // backgroundColor: COLORS.light,
    width: 150,
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
});