import React, {useEffect,useState} from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Pressable, DevSettings } from 'react-native'
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Link as LinkRouter} from 'react-router-native'
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../redux/actions/userActions';

export default function Navbar(){
    

    const user = useSelector(store => store.userReducer.user)
    const dispatch = useDispatch()

    
    const submit = async () => {
        dispatch(userActions.signOutUser())
    }


    return(
        <View style={styles.containerNavbar} >
            <LinkRouter to='/'> 
            <View style={styles.button}>
            <Icon name="home" color={'#88D317'} size={45}  />
            </View>
            </LinkRouter>
            <LinkRouter to='/products'>
            <View style={styles.button}>
            <Icon name="devices" color={'#88D317'} size={45}  />
            </View>
            </LinkRouter>
            <LinkRouter to='/cart'>
            <View style={styles.button}>
            <Icon name="shopping-cart" color={'#88D317'} size={45}  />
            </View>
            </LinkRouter>
            {user ?
            <Pressable onPress={submit}>
            <View style={styles.button}>
            <Icon name="logout" color={'#88D317'} size={45}  />
            </View>
            </Pressable>
             :
            <LinkRouter to='/register'>
            <View style={styles.button}>
            <Icon name="person" color={'#88D317'} size={45}  />
            </View>
            </LinkRouter>
            } 
        </View>
    )


}

const styles=StyleSheet.create({
    containerNavbar:{
    width:'100%',
    height:'12%',
    backgroundColor:'#121212',
    paddingTop: 50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
    },
    button:{
        margin: 5,
        color: 'white',
        height: 50,
        width: 50
    }

})
