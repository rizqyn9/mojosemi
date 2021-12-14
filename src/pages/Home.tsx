import React from 'react'

export default function Home() {
    return (
        <div id='home'>
            <Hero/>
            <HomeCardSection/>
        </div>
    )
}

function Hero() {
    return (
        <div className="hero-container">
        </div>
    )
}

function HomeCardSection() {
    return (
        <section className='home-card-section'>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
        </section>
    )
}

function HomeCard() {
    return (
        <div className="card-container">
            <h2>Title</h2>
            <p>Pesan Sekarang</p>
        </div>
    )
}
