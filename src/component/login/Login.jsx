import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, ScrollView, View, ImageBackground, Dimensions, Pressable, Text, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../redux/actions/userActions';


var { height } = Dimensions.get('window')

export default function Login() {

    const [input, setInput] = useState("")
    const [email, setEmail] = useState({email: ""});
    const [password, setPassword] = useState({password: ""})
    const dispatch = useDispatch();

    const message = useSelector(store => store.userReducer.snackbar)

    console.log(message.message)


    let carrito=useSelector(store=>store.productReducer.carrito)
    const loginSubmit  = async (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        const logedUser={
          
          email: email.email,
          password: password.password,
          from:'signup'
        }
        
          dispatch(userActions.signInUser(logedUser))

        await Alert.alert(message?.message)

          setEmail("")
          setPassword("")
          
          
      };

    return (
        <View style={styles.backgroundlogin}>
            <TextInput value={email.email}  type="email" placeholder="email" required style={[styles.input, styles.inputtext]} onChangeText={(text) => setEmail({...email, email: text})} />
            <TextInput secureTextEntry={true} value={password.password} placeholder="Contraseña" required style={[styles.input, styles.inputtext]} onChangeText={(text) => setPassword({...password, password: text})} />
            <Pressable  style={styles.buttoncontainer} onPress={loginSubmit} >
                <Text style={[styles.buttonlogin]}>LOGIN</Text>
            </Pressable>
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
})