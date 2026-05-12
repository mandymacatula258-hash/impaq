import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import FeaturedSeries from "./components/FeaturedSeries"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import "./App.css"

function HomePage() {
  return (
    <main className="app__main">
      <Hero />
      <ProductGrid />
      <FeaturedSeries />
    </main>
  )
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}
