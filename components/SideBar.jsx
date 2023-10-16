import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";

const SideBar = () => {
  return (
    <View style={styles.firstContainer}>
      {/* <Image source={require("cancelImage.jpg")} style={styles.cancelLogo} /> */}

      {/* <Image source={require("cancelImage.jpg")} style={styles.cancelLogo} />

      <Image source={require("./pepsicoLogo")} style={styles.companyLogo} /> */}
    
    <Text style = {styles.backLogoText}>Back</Text>
    <Text style = {styles.companyLogoText}   >Company Logo</Text>


    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    marginLeft: 5,
   
    alignItems: "center",
  },

  companyLogoText : {
        fontSize: 24,
        fontWeight: 'normal',
        fontFamily: "sans-serif",
        fontWeight: 'bold',
        color:"#000000"

    },

    backLogoText : {
        fontSize: 15,
        
        fontFamily: "roboto",
    },
  
});
