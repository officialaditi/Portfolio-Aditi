import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className="bg-gray-300 rounded-3xl">
            <div className='flex flex-col items-center justify-center mt-14'>
                <h1 className='font-medium text-purple-700 text-3xl mb-6'>ABOUT ME</h1>
                <p className='w-auto font-thin text-2xl md:text-center'>I'm a         certified full-stack web developer specializing in the MERN
                    stack (MongoDB, Express, React, Node.js) with a strong grasp of
                    Redux. My skills encompass both frontend and backend development,
                    allowing me to create seamless, efficient, and user-centric web
                    applications.
                </p>
                <button className='bg-orange-400 text-black m-5 md:mt-16 rounded-3xl p-3 font-medium text-2xl'>
                <Link to='/projects'>Explore My Work/Projects</Link>
                </button>
              
            </div>
        </div>
    )

}
export default About;