import React from 'react'
import './Blog.css'
function Blog() {

  const blogs=[
    {
      img:"blog1pic.jpeg",
      heading:"The Ultimate Guide To HIIT Workouts For Weight Loss ",
      para:"Have you ever wondered why High-Intensity Interval Training (HIIT) is such a trending fitness regime for weight loss these days? What’s the secret behind its ability to keep torching calories and burning fat even after you’ve finished your workout?In today’s blog, we are going to delve deep into these questions and find out the answers to them.If you’re aiming to shed weight efficiently, incorporating HIIT workouts for weight loss into your routine could be the game-changer you’ve been seeking.",
      but:"Blog"
  },{
    img:"blog2pic.jpeg",
      heading:"The Importance Of Sleep In Fitness And Muscle Recovery: Tips For A Better Sleep Schedule ",
      para:"The importance of sleep cannot be overlooked; it plays an important role in keeping up with good health and well-being throughout our life. Getting a good sleep is essential for muscle repair & recovery, energy conservation, modulation of immune responses, brain waste clearance, and more.Regular gym-goers, bodybuilders, or athletes spend an enormous amount of time and effort in their workouts, taking the correct amount of nutrition, supplements, etc. However, what they overlook is an adequate sleep routine.Physical activity is indeed an important aspect of maintaining a healthy lifestyle and so is the sleep cycle. It is all about the post-workout recovery that helps our body to adapt to the changes or process the repairing and strengthening of the muscles.The quality as well as quantity of sleep affects our physical & mental health and our overall well-being.  ” Poor Sleep = Poor Performance  “",
      but:"Blog"
  }
]


  return (
    <div className='bcontainer'>
      <div className='bwrapper'>
      <h1>BLOG</h1>
      <p>The body achieves what the mind believes...</p>
      <img src="blogpic.jpeg" alt="none" />
      </div>
      <div className='blog'>
        {blogs.map((blogg,i)=>(

       
        <div className='blog1'>


        <img src={blogg.img} alt="none" />
        <h1>{blogg.heading}</h1>
        <p>{blogg.para}</p>
        <button className='button'>Blog</button>

      </div>
       ))}
      </div>
      
    </div>
  )
}

export default Blog