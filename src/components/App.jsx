import React from "react"
import Navbar from "./Navbar"
import FirstPage from "./FirstPage";
import SecondPage from "./Secondpages/SecondPage";
import Testimonial from "./Testimonials/Testimonial";
import FooterImage from "./FooterImage";
import Footer from "./Footer";


function App(){
    return(
        <div>
            <Navbar />
            <FirstPage />
            <SecondPage />
            <Testimonial />
            <FooterImage />
            <Footer />
        </div>
        )
}

export default App;