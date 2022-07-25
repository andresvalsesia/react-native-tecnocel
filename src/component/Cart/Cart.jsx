import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import productActions from '../../redux/actions/productActions';
// import { Typography,Button } from "@material-ui/core";
// import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-native";
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import logo from '../../../assets/Tecnocel.png';
import EmptyCart from "./EmptyCart";
import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const Cart = () => {

  
  const [reload,setReload]=useState(false);
  const dispatch = useDispatch();

  let carrito = useSelector(store => store.productReducer.carrito) 

  let subtotal = carrito.map((item) => item.price * item.__v) 

  let total = subtotal.reduce((sum, a) => sum + a, 0)
  
  


const addToCart = async (id) => {

  await dispatch(productActions.agregarCarrito(id))


};

const removeToCart = async (id, all = false) => {

  if (all) {

    await dispatch(productActions.removerTodoCarrito(id))
   

  } else {
    await dispatch(productActions.removerCarrito(id))
    
  }

};

const clearCart = async () => {
  
  await dispatch(productActions.limpiarCarrito())
 

};

console.log(carrito.length)


  return (
    <ImageBackground source={{uri: "https://besthqwallpapers.com/Uploads/20-8-2019/102143/thumb2-black-stylish-background-green-neon-lines-green-light-effects-abstract-black-background.jpg"}} className="contenedor">
    <View className="logo-linkdiv">
      <View className="logo-link">
        <Link className="link-inicio" to="/"><Text>Ir al Inicio</Text></Link>
        <Image source={logo} alt="logo" style={{height: 10, width: 10}}></Image>
      </View>
    </View>
       
       {/*  <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Items In Cart</Typography>
          <Link to="/products">View Products</Link>
          <BottomTab />
        </div> */}
       
        {/* <EmptyCart/> */}
          <Text className="text-envios-gratis"> Envio gratis y 12 cuotas sin interes desde $1.000</Text>
          <View className="boxes">
            <View className="box-productos">
              <View className="titulo-productos" style={carrito.length !== 0 ? { display:'grid'} : {display : 'none'}}>
              <Text>Producto</Text>
              <Text>Precio unitario</Text>
              <Text>Cantidad</Text>
              <Text>Subtotal</Text>
            </View>
              {carrito.length !== 0 ? carrito.map(item=>
              
              
                
                <View key={item.name} className="productos">
                    <View className="img-texto">
                    <Image source={{uri: item.images}} alt="" height="90rem" width="90rem"></Image>
                    <Text>{item.name}</Text>
                    </View>
                    <Text style={{fontWeight: "bold", fontSize: "16px"}}>$ {item.price}</Text>
                    <View className="cantidad">
                  <Button title="hola" className="button-cart" onClick={()=>removeToCart(item._id)}> <Icon name="remove" style={{color: "#88D317", cursor: "pointer", fontSize: 23}}/></Button>
                    <Text style={{fontWeight: "bold"}}>{item.__v}</Text>
                   <Button title="hola" className="button-cart" onClick={()=>addToCart(item._id)}><Icon name="add" style={{color: "#88D317", cursor: "pointer", fontSize: 23}}/></Button>
                    </View>
                    <Text>$ {item.price*item.__v}</Text>
                 <Button title="hola" className="button-cart" onClick={()=>removeToCart(item._id,true)}><Icon name="remove" style={{color: "#88D317", cursor: "pointer", fontSize: 23}} /></Button>
                  </View>
                
                
                ):<EmptyCart/>}


                <Button title="hola" onClick={clearCart} className="vaciar-carrito" style={carrito.length !== 0 ? { display:'flex', backgroundColor: 'transparent', border: 'none', justifyContent: 'center'} : {display : 'none'}}> <Icon name="remove" style={{color: "#88D317", cursor: "pointer", fontSize: 23}} /><Text>Vaciar Carrito</Text></Button>
            </View>
            <View className="box-resumen" style={carrito.length !== 0 ? { display:'block'} : {display : 'none'}}>
              <Text>Resumen de compra</Text>
              <View className="total-link">
                <Text>Total:${total}</Text>
                
                <Button title="Iniciar Compra" className="button-compra"/>

            {/*     <Paypal/> */}
              </View>
            </View>
          </View> 
          </ImageBackground>
      )
      
};

export default Cart;

const styles = StyleSheet.create({
  contenedor: {
    paddingHorizontal: 100,
    height: "100vh",
    width: "100%",
  },
})