import React, {useEffect,useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {Link as LinkRouter} from 'react-router-native'

export default function Navbar(){
    
    return(
        <View style={styles.containerNavbar} >
            <LinkRouter to='/'> 
            <View style={styles.button}>
            <IconButton icon={props => <Icon name="home" color={'#88D317'} size={45}  />} />
            </View>
            </LinkRouter>
            <LinkRouter to='/cart'>
            <View style={styles.button}>
            <IconButton icon={props => <Icon name="cart" color={'#88D317'} size={45}  />} />
            </View>
            </LinkRouter>
            <LinkRouter to='/'>
            <View style={styles.button}>
            <IconButton icon={props => <Icon name="account" color={'#88D317'} size={45}  />} />
            </View>
            </LinkRouter>
        </View>
    )


}

const styles=StyleSheet.create({
    containerNavbar:{
    width:'100%',
    height:'8%',
    backgroundColor:'#121212',

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
