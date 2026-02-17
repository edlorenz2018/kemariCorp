import Header from '../components/Header'
import Hero from '../components/home/Hero'
import Why from '../components/home/Why'
import Services from '../components/home/Services';
import Footer from '../components/Footer';

import '../App.css';

export function Home(){
    return(

        <>
           <Header/>
            <Hero/>
            <Why/> 
            <Services/>  
                         
               
           
            <Footer/>
        </>


    )


}