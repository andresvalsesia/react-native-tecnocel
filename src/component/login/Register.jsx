import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, ScrollView, View, ImageBackground, Dimensions, Pressable, Text } from 'react-native'
import { Link } from 'react-router-native';

var { height } = Dimensions.get('window')

export default function Register() {

    const [input, setInput] = useState("")

    return (
        <View style={styles.backgroundlogin}>
            <TextInput  placeholder="name" required style={[styles.input, styles.inputtext]} />
            <TextInput  placeholder="email" required style={[styles.input, styles.inputtext]} />
            <TextInput secureTextEntry={true} type="password" placeholder="Contraseña" required style={[styles.input, styles.inputtext]} />
            <Pressable  style={styles.buttoncontainer} >
                <Text style={[styles.buttonlogin]}>REGISTRARSE</Text>
            </Pressable>
            <Link to="/login"  style={styles.buttonregister} >
                <Text style={[styles.button]}>Si ya estas registrado, Inicia sesion</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        maxWidth: '100%',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 10,
        color: 'black',
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 10
    },
    inputtext: {
        fontSize: 25,
        textAlign: 'center'
    },
    backgroundlogin: {
        backgroundColor: 'rgba(0, 0, 0, 0.854)',
        width: '100%',
        height: "100%"
       
    },
    buttoncontainer: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 12,
        backgroundColor: 'lightgreen',
        height: 50,
        margin: 20,
        borderRadius: 10,
    },
    buttonregister: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: 'darkblue',
        height: 40,
        margin: 60,
        borderRadius: 10,
        
    },
    button: {
        color: 'white',
        backgroundColor: 'darkblue',

    }
})