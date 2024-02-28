import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ODIMS_frame_1 from './Asset/ODIMS_frame_1.jpg';
import ODIMS_frame_2 from './Asset/ODIMS_frame_2.jpg'; 
import ODIMS_frame_3 from './Asset/ODIMS_frame_3.jpg';
import './Home.css';
import logo from './Asset/logo.jpeg';
const Home = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div class="font">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
        <div style={{ flex: 1 }}>
            <img
              src={logo}
              alt="Disaster Image"
              style={{ width: '10%', height: '10%', objectFit: 'cover' }}
            />
          </div>

          <Link class="navbar-brand" to="/">
            Home
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link
                  class={`nav-link ${activeButton === 'add-disaster' ? 'active' : ''}`}
                  to="/add-disaster"
                  onClick={() => handleButtonClick('add-disaster')}
                >
                  Add Disaster
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${activeButton === 'disaster-list' ? 'active' : ''}`}
                  to="/disaster-list"
                  onClick={() => handleButtonClick('disaster-list')}
                >
                  Disaster List
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${activeButton === 'precautions' ? 'active' : ''}`}
                  to="/precautions"
                  onClick={() => handleButtonClick('precautions')}
                >
                  Precautions
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${activeButton === 'helplines' ? 'active' : ''}`}
                  to="/helplines"
                  onClick={() => handleButtonClick('helplines')}
                >
                  Helplines
                </Link>
              </li>
            </ul>
          </div>

          <div class="ml-auto">
  <ul class="navbar-nav">
    <li class="nav-item">
      <Link
        class={`nav-link ${activeButton === 'login' ? 'active' : ''}`}
        to="/login"
        onClick={() => handleButtonClick('login')}
      >
      
        <strong>Login</strong>
      </Link>
    </li>
    <li class="nav-item">
      <Link
        class={`nav-link ${activeButton === 'signup' ? 'active' : ''}`}
        to="/signup"
        onClick={() => handleButtonClick('signup')}
      >
      
       <strong> Signup</strong>
      </Link>
    </li>
  </ul>
</div>

        </div>
      </nav>

      <div class="container mt-5">
        <h1>Welcome to the Disaster Information Management System</h1>

        {/* Three frames with vh=100 */}
        <div class="d-flex justify-content-between mt-3">
          <div style={{ flex: 1 }}>
            <img
              src={ODIMS_frame_1}
              alt="Disaster Image"
              style={{ width: '80%', height: '80%', objectFit: 'cover' }}
            />
          </div>

          {/* Frame 2 */}
          <div style={{ flex: 1 }}>
            <img
              src={ODIMS_frame_2}
              alt="Disaster Image"
              style={{ width: '80%', height: '80%', objectFit: 'cover' }}
            />
          </div>

          {/* Frame 3 */}
          <div style={{ flex: 1 }}>
            <img
              src={ODIMS_frame_3}
              alt="Disaster Image"
              style={{ width: '80%', height: '80%', objectFit: 'cover' }}
            />
          </div>

           </div>
<div >
<p>Welcome to ODIMS - the Disaster Information Management System, where resilience meets innovation. In today's world, our communities are increasingly vulnerable to a myriad of natural and man-made disasters, from hurricanes and earthquakes to pandemics and industrial accidents. In the face of these challenges, ODIMS emerges as a pivotal solution, a beacon of preparedness, and a comprehensive platform designed for effective disaster response.<br/></p></div>
<div style={{ width: '100%', height: '80%', overflow: 'hidden' }}>
    <img
      src={ODIMS_frame_1}
      alt="Disaster Image"
      style={{ width: '90%', height: '50%', objectFit: 'cover' }}
    />
  </div>
<p>At ODIMS, we recognize the pressing need for a robust system that empowers communities, organizations, and individuals to proactively manage, monitor, and respond to adversity. Our platform goes beyond mere information dissemination; it is a dynamic tool that leverages real-time disaster tracking, collaborative response mechanisms, and a vast repository of knowledge to ensure that you are not just informed but equipped to navigate through the most challenging of times.
<br/></p>
<p>The cornerstone of ODIMS lies in its commitment to fostering resilience through innovation. In an age where the frequency and intensity of disasters are on the rise, a proactive approach is indispensable. ODIMS provides a comprehensive suite of features, including but not limited to, early warning systems, data-driven decision-making tools, and a collaborative space for communities to share best practices. By facilitating effective communication and coordination, ODIMS enables swift and well-coordinated responses, minimizing the impact of disasters on lives and infrastructure.
<br/></p>
<p>Imagine a world where communities are not merely victims of disasters but active participants in their own protection and recovery. ODIMS aims to turn this vision into reality by democratizing access to critical information and resources. Whether you are an individual seeking guidance on disaster preparedness or an organization involved in disaster response, ODIMS is your ally in building a safer and more resilient future.
<br/></p>
<p>One of the distinctive features of ODIMS is its real-time disaster tracking capabilities. Through advanced technology and data analytics, ODIMS provides up-to-the-minute information on the unfolding of disasters worldwide. This enables users to make informed decisions, allocate resources effectively, and mobilize response teams promptly. The collaborative response tools further enhance this capability by fostering communication and coordination among various stakeholders.
<br/></p>
<p>In the vast landscape of disaster-related information, ODIMS stands out as a reliable source. Our platform curates a wealth of information, ranging from best practices in disaster response to in-depth guides on preparing for specific types of disasters. The goal is not just to inundate users with data but to provide actionable insights that can be translated into effective strategies for disaster mitigation and recovery.
<br/></p>
<p>As you embark on this journey with ODIMS, you join a global community dedicated to creating a safer and more resilient world. Together, we stand stronger against the unpredictable forces of nature. Every individual's contribution, every community's commitment, and every organization's innovation play a crucial role in shaping the future of disaster management. Welcome to ODIMS – your gateway to a world where preparedness meets innovation, and where communities unite to build a future resilient to the challenges that lie ahead.

<br/></p>
</div>
<div>

</div>
        {/* Add more content or sections as needed */}
      </div>
    
  );
};

export default Home;
