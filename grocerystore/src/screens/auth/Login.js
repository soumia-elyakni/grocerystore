import { StyleSheet, View, Text, TextInput, ImageBackground, Image, Pressable, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const logo = require('../../assets/image/logo.png')
const back = require('../../assets/image/groceryback.jpg')
const navigation = useNavigation();
import React from 'react'


const Login = () => {
  return (
    <ImageBackground source={back} style={styles.container}>

            <View style={styles.logoContainer}>
            <Image source={logo}/>
            

            </View>

            <View style={styles.titlecontainer}>
              <Text style={styles.bigtitle}>Grocery Store</Text>
              </View>

              <TextInput style={styles.inputs} />
              <TextInput style={styles.inputs} secureTextEntry={true} />

              <View style={styles.titlecontainer}>
              <Pressable title='Login' onPress={()=> navigation.navigate("Store")} ><Text style={styles.title} >Login</Text></Pressable>
            </View>
            <TouchableOpacity>créer un compte</TouchableOpacity>

          
            
     </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
  backgroundColor: '#ffe',
  flex : 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  },

  inputs : {
    backgroundColor : 'white',
    borderTopWidth : 0 ,
    borderLeftWidth : 0,
    borderRightWidth : 0,
    fontSize : 26,
    fontFamily : 'serif',
    fontStyle : 'italic',
    borderBottomColor : 'grey',
    borderWidth : 2 ,
    borderRadius : 2, 
    width : 270,
    marginBottom : 30,
  },

  titlecontainer: {
    // flex: 1,
    padding: 10,
    // backgroundColor: '#eaeaea',
  },

  title: {
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 93,
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius: 10,
    backgroundColor: 'rgba(254, 253, 255, 0.3)',
    color: 'orange',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  bigtitle : {
    color: 'green',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle : 'italic' ,
    marginBottom : 10,
  },
  logoContainer : {
    borderRadius : 100,
    backgroundColor : '#fffe',
    width: 'auto'
  }
});

export default Login
