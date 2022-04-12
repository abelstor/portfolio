import { Routes, Route } from 'react-router-dom';

import { Home } from '../components/Home';
import { About } from '../components/About';
import { Header } from '../components/Header';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

import '../styles/styles.scss';

export const AppRouter = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}