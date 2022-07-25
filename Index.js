import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import Product from './src/component/Product';
import Cart from './src/component/Cart/Cart'

const Index = () => {
  return (
    <View style={styles.container}>
        <Routes>
            <Route exact path="/product" element={<Product/>}/>
            <Route exact path="/" element={<Cart/>}/>
          {/* <Route path="/" element={<Home />} />
          {user && user.role=="admin" &&  <Route path="/admin" element={<Admin/>}/>}
          <Route path="/cart" element={<Cart props={carrito}/>}/>
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<EditarProduct />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    text:{
       fontSize:30,
       fontWeight: 'bold'
    }
  });