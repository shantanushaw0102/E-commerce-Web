import React from 'react'
import HeroSection from './components/HeroSection';

const About = () => {
  const data = {
    name: "Whole Apple",
    description:"Whole Apple is a well-known retail store operated by Apple Inc. This store offers a wide range of Apple products, including the latest iPhones, iPads, MacBooks, Apple Watches, and various accessories. In addition to hardware, Whole Apple provides expert customer support and technical assistance through their Genius Bar. It also offers a selection of software and services, such as the App Store, Apple Music, and iCloud. With a sleek and modern design, Whole Apple stores are known for their distinctive architecture and a focus on creating a unique customer experience"
  }
  return (
    <HeroSection myData={data}/>
  )
}

export default About;
 