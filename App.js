import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View,ScrollView } from 'react-native';
import SideBar from './components/SideBar';
import LoginForms from './components/LoginForms';

export default function App() {
  return (
    <>
    <ScrollView>

    <SideBar/>

    <LoginForms/>

    </ScrollView>
    
    </>
  );
}

const styles = StyleSheet.create({

 
});
