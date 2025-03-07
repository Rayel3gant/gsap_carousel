'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { IoPlayOutline } from "react-icons/io5";
import { AiOutlinePause } from "react-icons/ai";
import { PiRepeatThin } from "react-icons/pi";

export default function HorizontalScroll() {
  const carouselRef = useRef(null);
  const timelineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {


    // Initial slide width
    let slideWidth = window.innerWidth;

    // Function to update slide width dynamically on window resize
    const updateSlideWidth = () => {
      slideWidth = window.innerWidth;
    };

    // Add resize listener
    window.addEventListener('resize', updateSlideWidth);

    // GSAP MatchMedia Initialization
    const mm = gsap.matchMedia();

    // For screens below 768px
    mm.add('(max-width: 767px)', () => {
      const timeline = gsap.timeline({
        // repeat: -1, // Infinite loop
        paused: false, // Play by default    
      });
   
      timeline
        .to({}, { duration: 1  })
        //move slide 1 out partially
        .to(
          '#slide1',
          { x: '-80%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide1out",'<')
        //move slide 2 in view
        .to(
          '#slide2',
          { x: '-80%', duration: 1, ease: 'power1.inOut' ,scale:1.15 , onStart: () => setActiveSlide(2) },
          "slide1out"
        )
        .to({}, { duration: 2 }) // Pause with Slide 2 in center
        //slide 3 next
        .to(
          '#slide3',
          {x: '-80%', duration: 1, ease: 'power1.inOut'},
          "slide1out"
        )
        
  
        //slide 1 out fully
        .to(
          '#slide1',
          { x: '-200%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide2out",'<')
        
        //slide 2 partially out
        .to(
          '#slide2',
          { x: '-180%', duration: 1, ease: 'power1.inOut' , scale:1 },
          "slide2out"
        )
        
        //slide 3 in view
        .to(
          '#slide3',
          {x: '-180%', duration: 1, ease: 'power1.inOut' ,scale:1.15  ,onStart: () => setActiveSlide(3)}
          ,"slide2out"
        )
        .to({}, { duration: 2}) // Pause with Slide 3 in center
       
        // slide 4 next
        .to(
          '#slide4',
          {x: '-180%', duration: 1, ease: 'power1.inOut'},
          "slide2out"
        )
  
        //slide 2 out fully
        .to(
          '#slide2',
          { x: '-300%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide3out",'<')
  
  
        // slide 3 out partially
        .to(
          '#slide3',
          { x: '-290%', duration: 1, ease: 'power1.inOut' , scale:1 },
          "slide3out"
        )
        
        //slide  4 in view
        .to(
          '#slide4',
          {x: '-280%', duration: 1, ease: 'power1.inOut' ,scale:1.15 ,onStart: () => setActiveSlide(4) }
          ,"slide3out"
        )
        .to({}, { duration: 2 }) // Pause with Slide 4 in center
  
  
        //slide 5 next
        .to(
          '#slide5',
          {x: '-250%', duration: 1, ease: 'power1.inOut'},
          "slide3out"
        )
  
        //slide 3 out fully
        .to(
          '#slide3',
          { x: '-400%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide4out",'<')
  
  
        // slide 4 partially out 
        .to(
          '#slide4',
          { x: '-380%', duration: 1, ease: 'power1.inOut' , scale:1 },
          "slide4out"
        )
  
        // slide 5 in view 
        .to(
          '#slide5',
          {x: '-350%', duration: 1, ease: 'power1.inOut' ,scale:1.15 , onStart: () => setActiveSlide(5) }
          ,"slide4out"
        )
        .to({}, { duration: 2 }) // Pause with Slide 4 in center
  
        // slide 4 out
        .to(
          '#slide4',
          {x: '-500%', duration: 1, ease: 'power1.inOut'}
        ).addLabel("slide5out",'<')
  
        //slide 5 out
        .to(
          '#slide5',
          {x: '-600%', duration: 1, ease: 'power1.inOut'},
          "slide5out"
        )
  
      timelineRef.current = timeline; // Save reference to timeline
    })

    // For screens between 768px and 1024px
    mm.add('(min-width: 768px) and (max-width: 1024px)', () => {
      const timeline = gsap.timeline({
        // repeat: -1, // Infinite loop
        paused: false, // Play by default    
      });

      timeline
        .to({}, { duration: 1  })
        //move slide 1 out partially
        .to(
          '#slide1',
          { x: '-80%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide1out",'<')
        //move slide 2 in view
        .to(
          '#slide2',
          { x: '-80%', duration: 1, ease: 'power1.inOut' ,scale:1.15 , onStart: () => setActiveSlide(2) },
          "slide1out"
        )
        .to({}, { duration: 2 }) // Pause with Slide 2 in center
        //slide 3 next
        .to(
          '#slide3',
          {x: '-80%', duration: 1, ease: 'power1.inOut'},
          "slide1out"
        )
        

        //slide 1 out fully
        .to(
          '#slide1',
          { x: '-200%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide2out",'<')
        
        //slide 2 partially out
        .to(
          '#slide2',
          { x: '-180%', duration: 1, ease: 'power1.inOut' , scale:1 },
          "slide2out"
        )
        
        //slide 3 in view
        .to(
          '#slide3',
          {x: '-180%', duration: 1, ease: 'power1.inOut' ,scale:1.15  ,onStart: () => setActiveSlide(3)}
          ,"slide2out"
        )
        .to({}, { duration: 2}) // Pause with Slide 3 in center
        
        // slide 4 next
        .to(
          '#slide4',
          {x: '-180%', duration: 1, ease: 'power1.inOut'},
          "slide2out"
        )

        //slide 2 out fully
        .to(
          '#slide2',
          { x: '-300%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide3out",'<')


        // slide 3 out partially
        .to(
          '#slide3',
          { x: '-290%', duration: 1, ease: 'power1.inOut' , scale:1 },
          "slide3out"
        )
        
        //slide  4 in view
        .to(
          '#slide4',
          {x: '-280%', duration: 1, ease: 'power1.inOut' ,scale:1.15 ,onStart: () => setActiveSlide(4) }
          ,"slide3out"
        )
        .to({}, { duration: 2 }) // Pause with Slide 4 in center


        //slide 5 next
        .to(
          '#slide5',
          {x: '-280%', duration: 1, ease: 'power1.inOut'},
          "slide3out"
        )

        //slide 3 out fully
        .to(
          '#slide3',
          { x: '-400%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide4out",'<')


        // slide 4 partially out 
        .to(
          '#slide4',
          { x: '-380%', duration: 1, ease: 'power1.inOut' , scale:1 },
          "slide4out"
        )

        // slide 5 in view 
        .to(
          '#slide5',
          {x: '-380%', duration: 1, ease: 'power1.inOut' ,scale:1.15 , onStart: () => setActiveSlide(5) }
          ,"slide4out"
        )
        .to({}, { duration: 2 }) // Pause with Slide 4 in center

        // slide 4 out
        .to(
          '#slide4',
          {x: '-500%', duration: 1, ease: 'power1.inOut'}
        ).addLabel("slide5out",'<')

        //slide 5 out
        .to(
          '#slide5',
          {x: '-600%', duration: 1, ease: 'power1.inOut'},
          "slide5out"
        )

      timelineRef.current = timeline; // Save reference to timeline
    })

    // For screens above 1024px
    mm.add('(min-width: 1025px)', () => {
      const timeline = gsap.timeline({
        // repeat: -1, // Infinite loop
        paused: false, // Play by default    
      });

      timeline
        .to({}, { duration: 1  })
        //move slide 1 out partially
        .to(
          '#slide1',
          { x: '-80%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide1out",'<')
        //move slide 2 in view
        .to(
          '#slide2',
          { x: '-80%', duration: 1, ease: 'power1.inOut' ,scale:1.15 , onStart: () => setActiveSlide(2) },
          "slide1out"
        )
        .to({}, { duration: 2 }) // Pause with Slide 2 in center
        //slide 3 next
        .to(
          '#slide3',
          {x: '-80%', duration: 1, ease: 'power1.inOut'},
          "slide1out"
        )
        

        //slide 1 out fully
        .to(
          '#slide1',
          { x: '-200%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide2out",'<')
        
        //slide 2 partially out
        .to(
          '#slide2',
          { x: '-180%', duration: 1, ease: 'power1.inOut' , scale:1 },
          "slide2out"
        )
        
        //slide 3 in view
        .to(
          '#slide3',
          {x: '-180%', duration: 1, ease: 'power1.inOut' ,scale:1.15  ,onStart: () => setActiveSlide(3)}
          ,"slide2out"
        )
        .to({}, { duration: 2}) // Pause with Slide 3 in center
        
        // slide 4 next
        .to(
          '#slide4',
          {x: '-180%', duration: 1, ease: 'power1.inOut'},
          "slide2out"
        )

        //slide 2 out fully
        .to(
          '#slide2',
          { x: '-300%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide3out",'<')


        // slide 3 out partially
        .to(
          '#slide3',
          { x: '-290%', duration: 1, ease: 'power1.inOut' , scale:1 },
          "slide3out"
        )
        
        //slide  4 in view
        .to(
          '#slide4',
          {x: '-280%', duration: 1, ease: 'power1.inOut' ,scale:1.15 ,onStart: () => setActiveSlide(4) }
          ,"slide3out"
        )
        .to({}, { duration: 2 }) // Pause with Slide 4 in center


        //slide 5 next
        .to(
          '#slide5',
          {x: '-350%', duration: 1, ease: 'power1.inOut'},
          "slide3out"
        )

        //slide 3 out fully
        .to(
          '#slide3',
          { x: '-400%', duration: 1, ease: 'power1.inOut' }
        ).addLabel("slide4out",'<')


        // slide 4 partially out 
        .to(
          '#slide4',
          { x: '-380%', duration: 1, ease: 'power1.inOut' , scale:1 },
          "slide4out"
        )

        // slide 5 in view 
        .to(
          '#slide5',
          {x: '-450%', duration: 1, ease: 'power1.inOut' ,scale:1.15 , onStart: () => setActiveSlide(5) }
          ,"slide4out"
        )
        .to({}, { duration: 2 }) // Pause with Slide 4 in center

        // slide 4 out
        .to(
          '#slide4',
          {x: '-500%', duration: 1, ease: 'power1.inOut'}
        ).addLabel("slide5out",'<')

        //slide 5 out
        .to(
          '#slide5',
          {x: '-600%', duration: 1, ease: 'power1.inOut'},
          "slide5out"
        )

      timelineRef.current = timeline; // Save reference to timeline
    })

    return () => {
      timeline.kill(); // Clean up the animation on unmount
    };
  }, []);

  //change opacity of next slides
  

  const handlePlayPause = () => {
    const timeline = timelineRef.current;
    if (!timeline) {
      console.error('Timeline is not initialized.'); // Debug: Check if timeline exists
      return;
    }

    if (isPlaying) {
      timeline.pause(); // Pause the timeline
    } else {
      timeline.play(); // Play the timeline
    }

    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  const handleRepeat =()=>{
    const timeline = timelineRef.current;

    if (!timeline) {
      console.error('Timeline is not initialized.');
      return;
    }
  
    timeline.restart(); // Restart the timeline from the beginning
  }

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">   

      <div className='w-11/12   md:w-3/4 lg:w-[1/2] xl:w-[40%] mx-auto items-center  shadow-md rounded-md'>
        <div ref={carouselRef} className="relative flex h-[450px] md:h-[500px] w-full overflow-hidden    ">
        
        {/* Slide 1 */}
        <div id="slide1" className="absolute top-0 left-0 flex items-center justify-center w-3/4 md:w-[60%] lg:w-[50%]  h-full">
          <div className="flex w-full flex-col gap-y-3 items-end">
            <div className="text-6xl font-bold">NEW</div>
            <div className="text-6xl font-bold">ON</div>
            <div className="text-6xl font-bold">SALE</div>
            <div>NEWYORK, NY</div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          id="slide2"
          className="absolute top-0 left-[80%] md:left-[70%] w-3/4 md:w-[60%] mx-auto h-full flex items-center justify-center  rounded-2xl"
        >
          <div className="h-[400px] w-3/4 bg-white rounded-xl  overflow-hidden flex items-center justify-center ">
            <div className="relative h-full w-full ">
              <Image
                src="/assets/slide1.jpg"
                alt="slide1"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>


        {/* Slide 3 */}
        <div
          id="slide3"
          className="absolute top-0 left-[150%] md:left-[130%] w-3/4 md:w-[60%] mx-auto h-full flex items-center justify-center  rounded-2xl"
        >
          <div className="h-[400px] w-3/4 bg-white rounded-xl  overflow-hidden flex items-center justify-center">
            <div className="relative h-full w-full  ">
              <Image
                src="/assets/slide2.jpg"
                alt="slide2"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div
          id="slide4"
          className="absolute top-0 left-[220%] md:left-[190%] w-3/4 md:w-[60%] mx-auto h-full flex items-center justify-center  rounded-2xl"
        >
          <div className="h-[400px] w-3/4 bg-white rounded-xl  overflow-hidden flex items-center justify-center">
            <div className="relative h-full w-full  ">
              <Image
                src="/assets/slide3.jpg"
                alt="slide3"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

      {/* Slide 5 */}
        
        <div id="slide5" className="absolute top-0 left-[270%] md:left-[260%] flex items-center justify-center w-3/4 md:w-[60%] lg:w-[50%]  h-full">
          <div className="flex w-full flex-col gap-y-3 items-start">
            <div className="text-4xl font-bold">My Brand</div>
            <div className="text-3xl italic ">see full listing</div>
            <div className="text-3xl italic">in description</div>
          </div>
        </div>
        </div>

        <div className="flex gap-2 w-fit mx-auto my-2">
          {[2, 3, 4].map((slide) => (
            <div
              key={slide}
              className={`h-2 w-5 rounded-md ${
                activeSlide === slide ? 'bg-gray-800' : 'bg-gray-300'
              } transition-colors duration-1000`}
            ></div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
        {
          (isPlaying===true)? (           
            <button onClick={handlePlayPause} className='w-12 h-12 rounded-full bg-red-500 hover:bg-red-300 flex justify-center items-center transition-all duration-200  cursor-pointer'>
              <AiOutlinePause/>
            </button>
          ): (
            <button onClick={handlePlayPause} className='w-12 h-12 rounded-full bg-green-400 hover:bg-green-300 flex justify-center items-center transition-all duration-200 cursor-pointer'>
              <IoPlayOutline />
            </button>
          )
        }

        <button onClick={handleRepeat} className='w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-600 flex justify-center items-center transition-all duration-200  cursor-pointer'>
          <PiRepeatThin/>
        </button>


      </div>
    </div>
  );
}
