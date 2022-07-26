import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, ScrollView, View, ImageBackground, Dimensions, Pressable, Text, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-native';
import userActions from '../../redux/actions/userActions';

var { height } = Dimensions.get('window')

export default function Register() {
    
    const [input, setInput] = useState("")
    const [email, setEmail] = useState({email: ""});
    const [password, setPassword] = useState({password: ""})
    const [name, setName] = useState({name: ""})

    const dispatch = useDispatch();
    let navigate = useNavigate()

    const message = useSelector(store => store.userReducer.snackbar)

    

    

    const registerSubmit  = async (e) => {
        e.preventDefault();
        const logedUser={

          name: name.name,
          email: email.email,
          password: password.password,
          from:'signup'
        }
        
        dispatch(userActions.signUpUserMessage(logedUser))

          setEmail("")
          setPassword("")
          setName("")
      };

      useEffect(() => {
        if(message.view) {
            Alert.alert(message?.message)
            navigate("/", {replace: true})
            dispatch({type:'MESSAGE', payload: {view:false,message:"",success:false}});
        }
      },[message.view])

    return (
        <View style={styles.backgroundlogin}>
            <TextInput   value={name.name || ''} placeholder="Name" required style={[styles.input, styles.inputtext]} onChangeText={(text) => setName({...name, name: text})} />
            <TextInput  value={email.email || ''} placeholder="Email" required style={[styles.input, styles.inputtext]} onChangeText={(text) => setEmail({...email, email: text})} />
            <TextInput  value={password.password || ''} secureTextEntry={true} type="Password" placeholder="Contraseña" required style={[styles.input, styles.inputtext]} onChangeText={(text) => setPassword({...password, password: text})}/>
            <Pressable  style={styles.buttoncontainer} onPress={registerSubmit} >
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