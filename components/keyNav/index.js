
import React, { useState } from "react"
import { useKey } from 'react-use';
import { useRouter } from 'next/router';
import useSound from 'use-sound';

const KeyNav = () => {
  const [play] = useSound("../button.mp3");
  const router = useRouter()
  //const [count, set] = useState(0);
  const page1 = () => {
    play()
    router.push('/');
  
  }
  const page2 = () => {
    play()
    router.push('/projects');
   
  }
  const page3 = () => {
    play()
    router.push('/blogs');
    
  }
  const page4 = () => {
    play()
    router.push('/oasis');
  
  }
  const page5 = () => {
    play()
    router.push('/sparks');
   
  }
  const page6 = () => {
    play()
    router.push('/about');
   
  }
  const page7 = () => {
    play()
    router.push('/mail');
    
  }

  useKey('1', page1);
  useKey('2', page2);
  useKey('3', page3);
  useKey('4', page4);
  useKey('5', page5);
  useKey('6', page6);
  useKey('7', page7);

  const [show, useeShow] = useState(false);

  const keyNavFun = () => {
    useeShow(!show);
  }
  const parentFun = () => {
    keyNavFun();
    play()
  }
  return (

    <div className="key_nav" >
      <div className="key_nav_button" onClick={() => parentFun()}>?</div>
      <div className={show ? "key_nav_content show_ele" : "key_nav_content hide_ele"}>
        
        <h3>Keyboard Shortcuts ∙ ⇧?</h3>

        <div className="elements" >
          <div className="element">
            <div className="icon_element">
              <svg id="homeIcon" width="17" height="17" viewBox="0 0 31 31" fill="#626262" xmlns="http://www.w3.org/2000/svg"><path d="M3.29442 22.4449C1.75167 19.586 0.980302 18.1566 0.769474 16.6275C0.66278 15.8537 0.66278 15.0688 0.769474 14.295C0.980302 12.7658 1.75167 11.3364 3.29442 8.47761L3.6773 7.7681C4.99519 5.32595 5.65414 4.10488 6.58443 3.19745C7.53987 2.26549 8.70063 1.57198 9.9729 1.17298C11.2117 0.784485 12.5965 0.784485 15.3662 0.784485C18.1359 0.784485 19.5207 0.784485 20.7595 1.17298C22.0318 1.57198 23.1925 2.26549 24.148 3.19745C25.0783 4.10488 25.7372 5.32595 27.0551 7.76811L27.438 8.47762C28.9807 11.3364 29.7521 12.7658 29.9629 14.295C30.0696 15.0688 30.0696 15.8537 29.9629 16.6275C29.7521 18.1566 28.9807 19.586 27.438 22.4449L27.0551 23.1544C25.7372 25.5965 25.0783 26.8176 24.148 27.725C23.1925 28.657 22.0318 29.3505 20.7595 29.7495C19.5207 30.138 18.1359 30.138 15.3662 30.138C12.5965 30.138 11.2117 30.138 9.9729 29.7495C8.70063 29.3505 7.53987 28.657 6.58443 27.725C5.65414 26.8176 4.99519 25.5965 3.6773 23.1544L3.29442 22.4449Z" fill="#626262"></path><defs><linearGradient id="paint0_linear_231_3060" x1="15.3662" y1="0.784485" x2="15.3662" y2="30.138" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="#626262"></stop></linearGradient></defs></svg>
            </div>
            <div className="title_element">Home</div>
            <div className="number_element">
              <span>1</span>
            </div>
          </div>
          <div className="element">
            <div className="icon_element">
              <svg id="projectsIcon" width="20" height="20" viewBox="0 0 40 38" fill="#626262" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.4767 37.9031H19.4906C19.7686 27.4251 28.3497 19.0165 38.8948 19.0165C39.0704 19.0165 39.2455 19.0189 39.42 19.0235V19.0096C39.2455 19.0142 39.0704 19.0165 38.8948 19.0165C28.3497 19.0165 19.7686 10.608 19.4906 0.130005H19.4767C19.2033 10.4335 10.901 18.7359 0.597656 19.0096V19.0235C10.901 19.2972 19.2033 27.5996 19.4767 37.9031Z" fill="#626262"></path></svg>
            </div>
            <div className="title_element">Project</div>
            <div className="number_element">
              <span>2</span>
            </div>
          </div>
         
          <div className="element">
            <div className="icon_element">
            <svg width="16" height="16" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66512 2.1316L8.73448 3.06137L6.93945 1.32297L7.89759 0.365724C8.13198 0.131555 8.44988 0 8.78136 0C9.11284 0 9.43073 0.131555 9.66512 0.365724C9.89951 0.599894 10.0312 0.917496 10.0312 1.24866C10.0312 1.57983 9.89951 1.89743 9.66512 2.1316Z" fill="#C7C7C7"/>
<path d="M8.15826 3.60535L2.43629 9.32196L0 10.0001L0.668136 7.55671L6.36886 1.86133L8.15826 3.60535Z" fill="#858585"/>
</svg>

            </div>
            <div className="title_element">Blog</div>
            <div className="number_element">
              <span>3</span>
            </div>
          </div>
          <div className="element">
            <div className="icon_element">
            <svg width="17" height="17" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="4.88889" height="4.88889" rx="1.22222" fill="#858585"/>
<rect y="6.11133" width="4.88889" height="4.88889" rx="1.22222" fill="#858585"/>
<rect x="6.11133" width="4.88889" height="4.88889" rx="1.22222" fill="#858585"/>
<rect x="6.11133" y="6.11133" width="4.88889" height="4.88889" rx="2.44444" fill="#D8D8D8"/>
</svg>
            </div>
            <div className="title_element">Taste</div>
            <div className="number_element">
              <span>4</span>
            </div>
          </div>
          <div className="element">
            <div className="icon_element">
              <svg width="15" height="15" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.8493 52.0444L54.2141 17.1589H47.777V10.1705C47.777 4.56247 43.212 0 37.6006 0H23.3989C17.7877 0 13.2226 4.56235 13.2226 10.1705V17.1589H6.78547L0.150257 52.0444C-0.832712 57.2132 3.13192 62 8.39664 62H52.6038C57.8681 62 61.8327 57.2132 60.8497 52.0444H60.8493ZM41.988 17.1589H19.0116V10.1705C19.0116 7.75278 20.9798 5.78569 23.3989 5.78569H37.6006C40.0197 5.78569 41.988 7.75278 41.988 10.1705V17.1589Z" fill="#858585" />
              </svg>
            </div>
            <div className="title_element">Sparks</div>
            <div className="number_element">
              <span>5</span>
            </div>
          </div>
          <div className="element">
            <div className="icon_element">
              

            <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0C5.33696 0 4.70107 0.263392 4.23223 0.732233C3.76339 1.20107 3.5 1.83696 3.5 2.5C3.5 3.16304 3.76339 3.79893 4.23223 4.26777C4.70107 4.73661 5.33696 5 6 5C6.66304 5 7.29893 4.73661 7.76777 4.26777C8.23661 3.79893 8.5 3.16304 8.5 2.5C8.5 1.83696 8.23661 1.20107 7.76777 0.732233C7.29893 0.263392 6.66304 0 6 0Z" fill="#858585"/>
<path d="M0.996189 11.0004H10.9962V10.6004C11.0231 9.92715 10.9137 9.2554 10.6746 8.6255C10.4354 7.9956 10.0714 7.42053 9.60436 6.93485C9.13735 6.44916 8.577 6.06288 7.95696 5.79919C7.33691 5.5355 6.66997 5.39985 5.99619 5.40039C5.32241 5.39985 4.65546 5.5355 4.03542 5.79919C3.41538 6.06288 2.85503 6.44916 2.38802 6.93485C1.92102 7.42053 1.55699 7.9956 1.31782 8.6255C1.07864 9.2554 0.969238 9.92715 0.996189 10.6004V11.0004Z" fill="#C7C7C7"/>
</svg>

            </div>
            <div className="title_element">About</div>
            <div className="number_element">
              <span>6</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default KeyNav
