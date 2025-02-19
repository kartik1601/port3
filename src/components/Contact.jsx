import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setform({...form, [name]: [value]})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    
    // t6OF0VOA9-wrjVQdx
    // template_rpnzssk
    // service_kq70697

    emailjs.send(
      'service_kq70697',
      'template_rpnzssk',
      {
        from_name: form.name,
        to_name: 'Kartik',
        from_email: form.email,
        to_email: 'kartiku904@gmail.com',
        message: form.message
      },
      't6OF0VOA9-wrjVQdx'
    )
    .then(()=>{
      setloading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setform({
        name: '',
        email: '',
        message: '',
      })
    }, (error)=>{
      setloading(false)
      console.log(Error);
      alert('Something went wrong.')
    })
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left',"tween",0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text`}>Contact.</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} 
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg otlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} 
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg otlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} 
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg otlined-none border-none font-medium'
            />
          </label>
          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")