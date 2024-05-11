import React from 'react'
import './Gallary.css'
const Gallery = () => {
  const imgg=[
    {
      img:"g1.jpeg ",

    },
    {
      img:"g2.jpeg ",

    },
    {
      img:"g3.jpeg ",

    },
    {
      img:"g4.jpeg ",

    },
    {
      img:"g5.jpeg ",

    },
    {
      img:"g6.jpeg ",

    },

    {
      img:"g7.jpeg ",

    },

    {
      img:"g8.jpeg ",

    },

    {
      img:"g9.jpeg ",

    },

    {
      img:"g10.jpeg ",

    },
    {
      img:"blog1pic.webp ",

    },
    {
      img:"blog1pic.jpeg ",

    },
  ]
  const video=[
    {
      id:"1",
      videos:"vi.mp4"
    },
    {
      id:"2",
      videos:"v2.mp4"
    }
  ]

  
  return (
    <>
     <h1 className='ph'>PHOTOS</h1>
    <div className='container'>
     
       {imgg.map((image,i)=>(

      <div className='img'>
        <img src={image.img} alt="none" key={i}/>
      </div>
    ))}
    
    <h1 className='vd'>VEDIOS</h1>
    <div className='vedio-detail'>
     
    {video.map((item,i)=>(
      <div className='vedio'>
      <video 
      autoPlay={false}
      style={{width: '100%'}}
      controls ={['PlayPause', 'Seek', 'Time','Volume', 'Fullscreen']}
      >
      <source src= {item.videos} type='video/mp4' key={i}></source>
      </video>
    </div>
  ))}
  </div>
  </div>
    </>
  )
}

export default Gallery