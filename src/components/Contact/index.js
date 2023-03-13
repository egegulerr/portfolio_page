import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'GMAIL-SERVICE',
        'template_rcf27d5',
        refForm.current,
        '9Yw3DFVBorwCrMuug'
      )
      .then(
        () => {
          alert('Message Successfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Failed. Try again')
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
              index={15}
            ></AnimatedLetters>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            vel sequi dolore molestiae blanditiis! Iste cupiditate est dicta
            velit ipsum culpa temporibus adipisci reiciendis, qui similique
            laudantium a doloribus veniam.
          </p>
          <div className="contact-form">
            <form action="" ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
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

        <Loader type="pacman"></Loader>
      </div>
    </>
  )
}

export default Contact
