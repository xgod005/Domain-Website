import './App.css';
import Logo1 from './logo1.svg'
import Logo2 from './logo2.svg'
import Welcome from './displayimage.png'
import {GoSettings} from 'react-icons/go';
import {GoCloudUpload} from 'react-icons/go';
import {SiGooglecloud} from 'react-icons/si';
import {FaCcVisa} from 'react-icons/fa';
import {FaCcMastercard} from 'react-icons/fa';
import {FaCcPaypal} from 'react-icons/fa';
import {FaCcAmazonPay} from 'react-icons/fa';
import {FaCcApplePay} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaFulcrum} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';

function App() {

  const [change, setChange] = useState(true);
  function handleClick() {
      setChange(!change);
  }

  console.log(change);
  return (
    <div className='font-Nunito'>
      <div className='bg-darkblue md:pb-40' id="bg">
      <nav className='relative container -mt-5 mx-auto p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-1 pt-2 ml-10 text-white'>
            <img src={Logo2} alt="logo2" />
            <h3>ServiOn</h3>
          
          </div>
          <div className='hidden md:flex space-x-6 md:mr-10 text-white'>
            <a href='#' className="hover:bg-lightblue pt-6 pl-2 pr-2 rounded">Home</a>
            <a href='#' className="hover:bg-lightblue pt-6  pl-2 pr-2 rounded">Services</a>
            <a href='#' className="hover:bg-lightblue pt-6  pl-2 pr-2 rounded">Our Plans</a>
            <a href='#' className="hover:bg-lightblue pt-6  pl-2 pr-2 rounded">Tools & Resources</a>
            <a 
          href="#" className='hidden md:flex mt-5 p-1 px-4 text-black bg-white rounded baseline hover:bg-white-800'>Login</a>
          </div>

          <button id="menu-btn" className="block hamburger text-white md:hidden
          focus:outline-none" onClick={handleClick}>
            <AiOutlineMenu />
          </button>
          </div>
          <div className='md:hidden'>
          <div id="menu" className={change ? "hidden" : "relative flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-lightblue rounded sm:w-auto"}>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Our Plans</a>
            <a href="#">Tools & Resources</a>
            <a href="#" className='md:flex mt-5 p-1 px-4 text-black bg-white rounded baseline hover:bg-white-800'>Login</a>
          </div>
          </div>

        
      </nav>

      <section id="hero">
        <div className=' md:flex md:h-40 md:grid md:grid-cols-2 md:gap-10 md:items-center px-6 mx-auto mt-5 md:ml-20 space-y-0 md:space-y-0 '>
          <div>
          <h1 className='font-Poppins text-2xl text-white font-semibold text-left md:text-3xl md:textleft' >
      Web Hosting Easy and Secure
          </h1>
          <h2 className='font-Poppins text-2xl text-white font-light text-left md:text-xl md:textleft mt-20' style={{marginTop:'10px', marginBottom:'15px'}}>
            Full control of what you use and pay for
          </h2>
          <input type='text' placeholder='Search for domain name'
          className='text-white bg-darkerblue p-2 rounded' style={{marginTop:'10px'}}  />
          <select className='bg-darkerblue text-white p-2 rounded'>
            <option>.com</option>
            <option>.in</option>
            <option>.us</option>
            <option>.ca</option>
          </select>
          <span className='inline-flex bg-lightblue md:ml-3 p-2 rounded  text-white'> CHECK AVAILABILITY</span>
          </div>

          <img src={Logo1} alt="logo1" width='600px' className='md:ml-10'/>
        </div>
        
      </section>
      </div>
    <section>
    <div className='font-Poppins text-2xl text-black font-light text-center md:text-xl md:textleft mt-40'>
    <h1 className='font-Poppins text-xl text-black font-bold  md:text-2xl md:textleft mt-20'>What will you get if you'll join us</h1>
  <h2 className='font-Poppins text-xl text-black/[0.8] font-light  md:text-xl md:textleft mt-2'>Get the best web hosting service at the price you can afford</h2>
  </div>
    </section>

    <section>
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className='flex flex-col mb-12 space-y-12 md:ml-10 md:mr-20 mt-5'>
        <div className='flex items-center justify-between'>
    < div className="mr-10 -mt-10 text-lightblue"><GoSettings size={35} /> </div>
    <span>
     <h3 className='font-bold'> 
      WE GIVE A CARE
      </h3>
      <h3>
        Beside the support ew provide you with various tools
        to be able to host and manage your webistes
      </h3>
    </span>
    </div>
    <div className='flex items-center justify-between'>
    < div className='mr-10 -mt-10 text-lightblue'><GoCloudUpload size={35} /> </div>
    <span>
     <h3 className='font-bold '> 
      TWEAK AS YOU WISH
      </h3>
      <h3 className=''>
      Be able to customize your plan over time if needed 
so you pay only for what you use
      </h3>
    </span>
    </div>
    <div className='flex items-center justify-between'>
    < div className='mr-10 -mt-10 text-lightblue'><SiGooglecloud size={35} /> </div>
    <span>
     <h3 className='font-bold'> 
      SECURITY AT ITS BEST
      </h3>
      <h3>
      We are the most reliable service provider, ready to give 
you a helping hand the fastest way possible 24/7
      </h3>
    </span>
    </div>
        </div>
      

      <div className="container md:-mr-0 px-0 mx-auto space-y-0 md:space-y-0">
        <img src={Welcome} alt='welcome' width='500px' className='rounded justify-self-center' />
        
      </div>
      </div>
    </section>
    <section>
      <div className='text-black font-light text-center md:text-xl md:textleft mt-40' >
      <h2>Types of hosting that we provide</h2>
      <h3>Our service is always affordable for everyone</h3>
      </div>
      <div className='mt-20 md:ml-20 md:mr-20 md:flex md:justify-between'>
      <div className='md:w-1/6 text-center shadow-2xl rounded'>
      <h1 className='font-bold mb-5'>SHARED HOSTING</h1>
      <h2 className='text-sm'>Increase the rank of your website by the higher speed</h2>
      <p className=''></p>
      </div>
      <div className='md:w-1/6 text-center'>
      <h1 className='font-bold mb-5'>SHARED HOSTING</h1>
      <h2 className='text-sm'>Be able to conceal your ID whenever needed</h2>
      </div>
      <div className='md:w-1/6 text-center'>
      <h1 className='font-bold mb-5'>SHARED HOSTING</h1>
      <h2 className='text-sm'>Super convenient and highly customizable option</h2>
      </div>
      <div className='md:w-1/6 text-center'>
      <h1 className='font-bold mb-5'>SHARED HOSTING</h1>
      <h2 className='text-sm'>With low cost and high variety of tools, plugins of your choice</h2>
      </div>
      </div>
    </section>
    <section>
    <div className="bg-darkblue">
    <div className='ml-2 md:flex md:items-start text-white md:justify-between'>
  <div className=' mb-12 space-y-6 md:ml-20 mt-5'>
    <h3 className='font-bold text-xl'>HOSTING</h3>
    <ul>
        <li >Shared Hosting</li>
        <li>VPS Hosting</li>
        <li>Cloud Hosting</li>
        <li>Wordpress Hosting</li>
      </ul>
  </div>
  <div className='flex flex-col mb-12 space-y-6  mt-5'>
    <h3 className='font-bold text-xl' >FEATURES</h3>
    <h4>
      <ul>
        <li>Beginner Guide</li>
        <li>Move to Servion</li>
        <li>Website Builder</li>
        <li>Tools and Resources</li>
      </ul>
    </h4>
  </div>
  <div className='flex flex-col mb-12 space-y-6  md:ml-0 mt-5'>
    <h3 className='font-bold text-xl'>SUPPORT</h3>
    <h4>
      <ul>
        <li>Help</li>
        <li>Submit a Ticket</li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>
    </h4>
  </div>
  <div className='flex flex-col mb-12 space-y-6  md:mr-20 mt-5'>
    <h3 className='font-bold text-xl'>WE ACCEPT</h3>
    <h4>
      <ul className='flex '>
        <li className='pr-2 text-[#93A5FF]'><FaCcVisa size={45}/></li>
        <li className='pr-2 text-[#93A5FF]'><FaCcMastercard size={45} /></li>
        <li className='pr-2 text-[#93A5FF]'><FaCcPaypal size={45} /></li>
        <li className='pr-2 text-[#93A5FF]'><FaCcAmazonPay size={45} /></li>
        <li className='pr-2 text-[#93A5FF]'><FaCcApplePay size={45} /></li>
      </ul>
    </h4>
  </div>
</div>
<div className='ml-2 md:flex md:items-start text-white md:justify-between'>
  <div className='flex flex-col mb-6 space-y-6  md:ml-20 mt-5'>
<h4 className='flex -mb-5 -ml-1 space-x-1'>
<img src={Logo2} alt="logo2" />
  <h3>ServiOn</h3>
</h4>
<h4>
St. Patrick Ave., 10233
<h4>USA</h4>
</h4>
</div>
<div className='mb-6 space-y-6  mt-5 grid grid-rows-2 md:place-items-end md:mr-20'>
  <div className=''>
  <ul className='flex  space-x-2 text-lightblue'>
  <FaInstagram size={25} />
  <FaTwitter size={25}  />
  <FaYoutube size={25}  />
  <FaFacebookF size={25}  />
  </ul>
  </div>
  <div className='flex space-x-2'>
  <h3>Terms of Service</h3>
  <h3> |</h3>
  <h3>Privacy Policy</h3>
  </div>
</div>
</div>
</div>
</section>

    </div>
  );
}

export default App;
