import React from 'react';
import Blogs from '../Books/Blogs';
import Component from '../Component/Component';

const Home = () => {

    return (
          

<div className='max-w-7xl mx-auto'>
<div
  className="hero min-h-screen px-20  rounded-lg"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/kgsMcWZk/banner-img-1.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-4xl font-bold">It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
      <p className="mb-5">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
      
    </div>
  </div>
 
</div>
<Component></Component>
<Blogs></Blogs>
</div>


    );
};

export default Home;