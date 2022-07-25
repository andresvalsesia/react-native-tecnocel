import React, {useEffect} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,FlatList,Image,Dimensions,SafeAreaView,Animated,TextInput,ImageBackground,ScrollView} from 'react-native';
import productActions from '../../redux/actions/productActions';

import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-native';

const width =Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const ANCHO_CONTENEDOR=width*0.7;
const ESPACIO=10;


const ProductDetail = () => {
   
  const dispatch=useDispatch()
  const {id}=useParams();
 
  useEffect(() => {


    dispatch(productActions.getOneProduct(id))
  
   
    

}, [])


let product = useSelector(store => store.productReducer.oneProduct);

const addToCart = async (id) => {

    await dispatch(productActions.agregarCarrito(id))
    
    Alert.alert("Has agregado el producto al carrito")
  
  };

  return (
     
             
    <ScrollView
    style={styles.card}
    >
      <Text style={{fontSize:35,textAlign: 'center',color: 'white',fontWeight: 'bold',paddingTop:15,textTransform:'uppercase'}}>
       {product.name}
      </Text>
      <Image source={{uri:product.images}} style={styles.imgStore}/>
      <Text style={styles.titulo}>USD {product.price}</Text>
      <Text style={styles.direccion}>{product.description}</Text>
      <TouchableOpacity onPress={()=>addToCart(product._id)}>
              <Text style={{fontSize:55,textAlign: 'center',color: 'white',fontWeight: 'bold',marginTop:5}}>🛒</Text>
      </TouchableOpacity>
  
    </ScrollView>
   
  )
}

const styles=StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    imgStore:{
        marginTop:15,
        padding:18,
        backgroundColor: "white",
        width:'100%',
        height: ANCHO_CONTENEDOR*1.2,
        resizeMode:"cover",
        borderColor: "white",
        borderWidth: 3,
        borderRadius:24,
        margin:0,
        marginBottom:10,

    },

    card:{
         backgroundColor:'#354259',
         marginTop:15,
         padding:20,
         

    },
    titulo:{
      color: "white",
      fontSize: 30,
      textTransform:'uppercase',
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#354259",
    },
    direccion:{
      color: "white",
      fontSize: 20,
      textAlign:"justify",
      fontWeight: "bold",
      backgroundColor: "#354259",
    },
  });



export default ProductDetail;