import './App.css'
import Brand from './brands/Brand'
import FooterSmall from './multi-footer/FooterSmall'
import Category from './categories/Category'
import ContactUs from './contact-page/ContactUs'
import Feedback from './feedback/Feedback'
import Footer from './footer/Footer'
import Info from './information-page/Info'
import Entering from './entering/Entering'
import Header from './header/Header'
import Options from './options/Options'
import Products from './products/Products'

function App() {
  return (
    <div className="App">
      <Header />
      <Entering />
      <Info />
      <Products />
      <FooterSmall />
      <ContactUs />
      <Category />
      <Options />
      <Feedback />
      <Brand />
      <Footer />
    </div>
  )
}

export default App
