import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React,{useState} from "react";

const LoginForms = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <View style={styles.loginContainer}>
      <Text style = {styles.headingText} >
        Login
      </Text>
      {/* Create Login using email and password */}

      <View style = {styles.loginBox}>
       
        <TextInput
          placeholder="Enter Your Email"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />

        </View>
     

      {/* for password */}

        <View style = {styles.loginBox} >  
      
        
        <TextInput
          placeholder="Enter your Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>

      {/* for login button */}

      <TouchableOpacity style = {styles.btnContainer}  >
        <Text style = {styles.btnText} >Login</Text>
      </TouchableOpacity>
    
    {/* forgot Password Text */}

    <Text style = {styles.forgotPasswordText} >forgot your Password</Text>


    </View>
  );
};

export default LoginForms;

const styles = StyleSheet.create({
    btnContainer : {
        backgroundColor : '#0077b6',
        padding : 10,
        borderRadius : 10,
        margin : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    btnText : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 24
    },
    loginBox : {
        padding : 10,
        margin : 10,
        borderWidth : 1,
        borderRadius : 10,
        marginHorizontal : 20,
        marginTop : 30
    },
    headingText : {
        fontSize : 30,
        fontWeight : 'bold',
        margin : 10,
        color : '#0077b6'
    },
    loginContainer : {
        flex : 1,
        justifyContent : 'center',
        marginTop:30
    },
    forgotPasswordText : {
        fontSize : 18,
        fontWeight : 'bold',
        margin : 10,
        color : '#00b4d8',
        textAlign : 'center'
    }
    
});
