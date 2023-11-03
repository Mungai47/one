import Hero from '../components/Hero'
import MyServices from '../components/MyServices'
import About from '../components/About'
import Education from '../components/Education'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Scroll from '../components/Scroll'
import Contact from '../components/Contact'
import { Element } from 'react-scroll';

function Home() {
  return (
    <div className='flex flex-col'>
      <Element name='home'>
        <Hero />
      </Element>
      <Element name='services'>
        <MyServices />
      </Element>
      <About />
      <Education />
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Testimonials />
      <Scroll />
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  )
}

export default Home

