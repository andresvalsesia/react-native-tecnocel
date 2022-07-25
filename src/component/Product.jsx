import React, {useEffect,useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,FlatList,Image,Dimensions,SafeAreaView,Animated,TextInput,ImageBackground,ScrollView,Alert} from 'react-native';
import productActions from '../redux/actions/productActions';
import {useDispatch,useSelector} from 'react-redux';


const width =Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const ANCHO_CONTENEDOR=width*0.7;
const ESPACIO=10;


const Product= () => {
  const [search, setSearch] = useState("");
  const dispatch=useDispatch()

  useEffect(() => {


    dispatch(productActions.getAllProducts())
    /* dispatch(cityActions.filterCitie(search)) */
   
    

}, [search])


const addToCart = async (id) => {

    await dispatch(productActions.agregarCarrito(id))
    
    Alert.alert("Has agregado el producto al carrito")
  
  };


let products=useSelector(store=>store.productReducer.products)
let carrito=useSelector(store=>store.productReducer.carrito)
/* let filter= products.filter(product=>product.name.toLowerCase().startsWith(search.trim().toLocaleLowerCase())) */

console.log(carrito)

  return (
    <ImageBackground source="https://wallpapercave.com/wp/wp4568512.jpg" resizeMode="cover" style={styles.image}>
      <View style={{alignItems: 'center'}}>
    <ScrollView >
    
        <TextInput
        style={styles.input}
        placeholder='SEARCH'
        onChangeText={(val)=>setSearch(val)}
        
      />



 
     <Animated.FlatList data={products}
      
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingTop:5}}
      decelerationRate={0}
      snapToInterval={ANCHO_CONTENEDOR}
      scrollEventThrottl={16}
      keyExtractor={(item) => item}
      renderItem={({item,index})=>{
       return (
           <View style={{width:ANCHO_CONTENEDOR}}>

            
            <View 
            style={styles.card}
            >
     
                     
                     <Image key={index} source={{uri:item.images}} style={styles.imgStore}/>
                     <Text style={styles.titulo}>{item.name}</Text>
                     <Text style={styles.direccion}>USD {item.price}</Text>
                     <TouchableOpacity
                      
             style={{backgroundColor:'grey',
                     padding:5,
                     marginTop: "1%",
                     width:"60%",
                     alignSelf:"center",
                     borderRadius:35,
                     borderColor:'black',
                     borderWidth:2,
                     marginBottom:8,
           }}
             >
              <Text style={{fontSize:25,textAlign: 'center',color: 'white',fontWeight: 'bold'}}>
                      VER MAS
              </Text>
               
              
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>addToCart(item._id)}>
              <Text style={{fontSize:55,textAlign: 'center',color: 'white',fontWeight: 'bold',marginTop:5}}>🛒</Text>
             </TouchableOpacity>
   
            </View>
            
           </View>
       )
      }}
      />
     
    </ScrollView>
    </View>  
    </ImageBackground> 
    
  )
}

const styles=StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    imgStore:{
        padding:18,
        backgroundColor: "white",
        width:'100%',
        height: ANCHO_CONTENEDOR*1.2,
        resizeMode:"cover",
        borderRadius:35,
        borderColor:'white',
        margin:0,
        marginBottom:10,
        borderWidth:3,

    },
    input: {
      width:180,
      height: 40,
      margin: 60,
      borderWidth: 3,
      padding: 10,
      borderColor:'black',
      backgroundColor:'white'
    },
    card:{
         backgroundColor:'#354259',
         marginTop:15,
         borderWidth:3,

    },
    titulo:{
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: '#354259',
    },
    direccion:{
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: '#354259',
    },
 
  });

export default Product;


