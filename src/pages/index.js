import React from "react"
import { Landing } from "../templates/landing"
import '../styles/globals.scss'
import Footer from "../components/footer"
import NavbarDesktop from '../components/navbarDesktop'


const IndexPage = () => {
  return (
    <main className="content">
      <title>🎵 Free Food 🎵</title>
      <Landing />
      <Footer />
    </main>
  )
}

export default IndexPage
