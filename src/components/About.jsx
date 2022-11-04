import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            My name is Peter Schmidt
              I have been programming since 2015, I like creating things and finishing things in a best possible way.
              I consider myself a team player, because I love doing things, where everybody has a role, and we all contribute something to the project.
            </p>
            <br />
            <p className='text-xl'>
            My current goal is to get a challenging a job, where I could grow in different ways than I could do with little own projects.            </p>
        </div>

    </div>
  )
}

export default About