import AboutProject from "../components/AboutProject"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import Team from "../components/Team"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <AboutProject />
        <ContactUs />
        <Team />
        <Footer />

    </>
  )
}

export default HomePage