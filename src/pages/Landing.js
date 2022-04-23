import React from 'react'
import landingHero from "../assets/landing-hero-image.png"

function Landing() {
  return (
    <>
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center p-3 full-height">
            <div className="container d-flex">
                <div className='p-4'>
                    <h2>Welcome to ___</h2>
                    <p>This is our official site to get rewards</p>
                </div>
                <img className='landing-images' src={landingHero} />
            </div>
        </div>
    </>
  )
}

export default Landing