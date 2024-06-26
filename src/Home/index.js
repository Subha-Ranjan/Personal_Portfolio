import "./index.scss"
import logoS from "../assets/images/logo-s.png"
import { Link } from 'react-router-dom'
import AnimatedLetters from "../Components/AnimatedLettters"
import { useState, useEffect } from 'react'
import Logo from "./Logo"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['u', 'b', 'h', 'a', 'r', 'a', 'n', 'j', 'a', 'n']
    const jobArray = [
        'w', 'e', 'b', ' ',
        'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={logoS} alt='developer' />

                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2> Frontend Developer / Javascript Expert </h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
                <Logo />
            </div>

        </div>
    )
}

export default Home