import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import Product from './src/component/product/Product';
import Cart from './src/component/Cart/Cart'
<<<<<<< HEAD
import ProductDetails from './src/component/product/ProductDetails'
import Home from './src/component/Home/Home';

const Index = () => {
  return (
    <View style={styles.container}>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/productDetails/:id" element={<ProductDetails/>}/>
=======


const Index = () => {
  return (
    <View>
      <Routes>
            <Route exact path="/" element={<Product/>}/>
            <Route exact path="/product" element={<Cart/>}/>
>>>>>>> 9bbc6d1ee2602a9c701c45188e71281c234afe9f
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