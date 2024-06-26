import React from 'react'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../Components/AnimatedLettters/index';
import 'leaflet/dist/leaflet.css';//1
import { icon } from "leaflet";
import img from "./../marker-icon.png"
import './index.scss';

const ICON = icon({
  iconUrl: img,
})
const myLocation=[22.5846897,88.4435725]

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()



  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_uzur5nl', 'template_6mddsvr', form.current, 'Z6Pz29vz5KLs5719O')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Subha Ranjan Bhowmick,
          <br />
          AF Block, Newtown
          <br />
          Kolkata - 700102 <br />
          West Bengal, India <br />
          <br />
          <span>subharanjanbhowmick@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={myLocation} zoom={13} style={{ width: "100%", height: "calc(100vh - 4rem)" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker  icon={ICON} position={myLocation} >
              <Popup>Subha lives here, come over for a cup of coffee</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact