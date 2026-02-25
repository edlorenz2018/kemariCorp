import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from '../components/Header';
import Hero1 from '../components/home/Hero1';
import Why from '../components/home/Why';
import Services from '../components/home/Services';
import Hero from '../components/home/Hero';
import Footer from '../components/Footer';

import '../App.css';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#hero-section") {
      const hero = document.getElementById("hero-section");

      if (hero) {
        setTimeout(() => {
          hero.scrollIntoView({ behavior: "smooth" });
        }, 100); // ensures DOM fully loads
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero1 />
      <Why />
      <Services />
      <Hero />
      <Footer />
    </>
  );
}