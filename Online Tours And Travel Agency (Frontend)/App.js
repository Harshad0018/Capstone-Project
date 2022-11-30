import HomeScreeen from "./screens/LoginScreen";
import SecondScreeen from "./screens/SecondScreen";
import SignScreen from "./screens/SignScreen";
import ViewBalance from "./screens/ViewBalance";
import BookedPackages from "./screens/BookedPackages";
import ContactUs from "./screens/ContactUs";
import booknow from "./screens/booknow";
import Review from "./screens/Review";
import OurServices from "./screens/OurServices";
import Gallaryy from "./screens/Gallaryy";
import Payment from "./screens/Payment";
// import demo from "./screens/showpack";



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewBase } from "react-native";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { ShowPackage } from "./screens/ShowPackage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (


    
    <NavigationContainer>
    <Stack.Navigator>

    

      <Stack.Screen
      name="Login"
      component={HomeScreeen}
      options={{title: "HARSH Tours & Travels"}}
      />

      <Stack.Screen
      name="Payment Page"
      component={Payment}
      options={{title: "HARSH Tours & Travels"}}
      />

      <Stack.Screen
      name="Landing Page"
      component={SecondScreeen}
      options={{title: "HARSH Tours & Travels"}}
      />



      <Stack.Screen
      name="SignUp"
      component={SignScreen}
      options={{title: "HARSH Tours & Travels"}}
     
      />
      <Stack.Screen
      name="booknow"
      component={booknow}
      options={{title: "HARSH Tours & Travels"}}
     
      />

      {/* my routes here */}

      <Stack.Screen
      name="ShowPackage"
      component={ShowPackage}
      options={{title: "HARSH Tours & Travels"}}
     
      />

  <Stack.Screen
      name="ViewBal"
      component={ViewBalance}
      options={{title: "HARSH Tours & Travels"}}
     
      />



<Stack.Screen
      name="BookedPackages"
      component={BookedPackages}
      options={{title: "HARSH Tours & Travels"}}
     
      />

      <Stack.Screen
      name="ContactUs"
      component={ContactUs}
      options={{title: "HARSH Tours & Travels"}}

      />
{/* 
    <Stack.Screen
      name="myscreen1"
      component={Deposit}
      options={{title: " Swiss Bank ==> Deposit Money"}}

      /> */}

<Stack.Screen
      name="Review"
      component={Review}
      options={{title: "HARSH Tours & Travels"}}
      />
 <Stack.Screen
      name="OurServices"
      component={OurServices}
      options={{title: "HARSH Tours & Travels"}}
     
      />
       <Stack.Screen
      name="Gallaryy"
      component={Gallaryy}
      options={{title: "Gallery"}}
     
      />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

