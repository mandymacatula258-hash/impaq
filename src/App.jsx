import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import FeaturedSeries from './components/FeaturedSeries'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Hero />
        <ProductGrid  />
        <FeaturedSeries />
      </main>
      <Footer />
    </div>
  )
}