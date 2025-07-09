import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )
  }, [])

  return (
    <section id="hero" className="relative h-screen overflow-hidden flex items-center justify-center text-center scroll-snap-start">
      <div className="absolute inset-0 z-10">
        <Spline 
          scene="https://prod.spline.design/Z0fl2oJrlLoLQ4A4/scene.splinecode"
          className="w-full h-full bg-transparent"
        />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black leading-[0.8] mb-8 uppercase tracking-tight">
            <span className="block text-text-primary">DRIP</span>
            <span className="block text-accent drop-shadow-[0_0_20px_rgb(238,63,154)]">LORD</span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-text-secondary mb-12 uppercase tracking-widest">
            1-CLICK AI UPGRADE FOR YOUR BUSINESS
          </p>
          <div ref={ctaRef} className="mb-8">
            <a href="#contact" className="inline-block px-12 py-6 text-xl font-bold bg-accent border-2 border-accent text-text-primary rounded-lg transition-all duration-300 hover:bg-transparent hover:text-accent uppercase tracking-widest">
              GET STARTED
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary text-sm font-medium uppercase tracking-widest">
          <span>SCROLL TO EXPLORE</span>
          <div className="text-2xl animate-bounce-slow">↓</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
