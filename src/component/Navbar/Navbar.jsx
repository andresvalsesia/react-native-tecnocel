import React, {useEffect,useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Navbar(){
    
    return(
        <View style={styles.containerNavbar} >
            <View style={styles.button}>
            <IconButton icon={props => <Icon name="home" color={'#88D317'} size={45}  />} />
            </View>
            
            <View style={styles.button}>
            <IconButton icon={props => <Icon name="cart" color={'#88D317'} size={45}  />} />
            </View>
            <View style={styles.button}>
            <IconButton icon={props => <Icon name="account" color={'#88D317'} size={45}  />} />
            </View>
        </View>
    )


}

const styles=StyleSheet.create({
    containerNavbar:{
    width:'100%',
    height:'8%',
    backgroundColor:'#121212',
    marginBottom:'14%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
    },
    button:{
        margin: 5,
        color: 'white',
        height: 40,
        width: 40
    }

})
