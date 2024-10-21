
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignIn/SignUp'
import Footer from './components/Footer/Footer'
import Cart from './Pages/Cart/Cart'
import NewsLetter from './Pages/Newsletter/NewsLetter'
import Faq from './Pages/Faq/Faq'
import Contact from './Pages/Contact/Contact'
import CreateProduct from './Pages/CreateProduct.jsx/CreateProduct'
import { useEffect, useState } from 'react'
import { auth } from './Firebase/Firebase'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import ScrollToTop from './components/ScrollToTop'
import { Toaster } from 'react-hot-toast';

function App() {

  // const [productsList, setProductsList] = useState([])

  // const getFetchData = async () => {
  //   let ab = []
  //   const docs = query(collection(db, 'products'))
  //   const docRef = await getDocs(docs)
  //   docRef.forEach((doc) => {
  //     // setProductsList(...productsList, doc.data())
  //     ab.push(doc.data())
  //   })
  //   setProductsList(ab)
  //   getProductData(productsList)
  //   console.log(productsList);


  // }

  // useEffect(() => {
  //   getFetchData()

  // }, [])
  const [authid, setAuthID] = useState()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setAuthID(user.email))
    return unsubscribe
  }, [])



  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/newsletter' element={<NewsLetter />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products' >
          <Route path=':priduct_id' element={<ProductDetails />} />
        </Route>
        <Route path='add_product' element={<ProtectedRoutes><CreateProduct /></ProtectedRoutes>} />
        <Route path='cart' element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App
