
import React, {useState} from "react"
import {useKey} from 'react-use';
import { useRouter } from 'next/router';
import useSound from 'use-sound';

  const KeyNav =  ()=> {
    const [play] = useSound("/sound.mp3");
    const router = useRouter()
  //const [count, set] = useState(0);
    const page1 = () => {
      router.push('/');
      play()
    }
    const page2 = () => {
      router.push('/projects');
      play()
    }
    const page3 = () => {
      router.push('/blogs');
      play()
    }
    const page4 = () => {
      router.push('/taste');
      play()
    }
    const page5 = () => {
      router.push('/store');
      play()
    }
    const page6 = () => {
      router.push('/chat');
      play()
    }
    const page7 = () => {
      router.push('/mail');
      play()
    }
    
    useKey('1', page1);
    useKey('2', page2);
    useKey('3', page3);
    useKey('4', page4);
    useKey('5', page5);
    useKey('6', page6);
    useKey('7', page7);

    const  [show, useShow] = useState(false);
   
    const keyNavFun = () => {
      useShow(!show);
    }
    const parentFun = () => {
      keyNavFun();
      play()
    }
  return (
  
    <div className="key_nav">
      <div  className="key_nav_button" onClick={ ()=>parentFun() }>?</div>
      <div className={show ? "key_nav_content show_ele": "key_nav_content hide_ele"}>
        <h3>Keyboard Shortcuts ∙ ⇧?</h3>
       
        <div className="elements" >
        <div className="element">
          <div className="icon_element">
          <svg id="homeIcon" width="17" height="17" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.29442 22.4449C1.75167 19.586 0.980302 18.1566 0.769474 16.6275C0.66278 15.8537 0.66278 15.0688 0.769474 14.295C0.980302 12.7658 1.75167 11.3364 3.29442 8.47761L3.6773 7.7681C4.99519 5.32595 5.65414 4.10488 6.58443 3.19745C7.53987 2.26549 8.70063 1.57198 9.9729 1.17298C11.2117 0.784485 12.5965 0.784485 15.3662 0.784485C18.1359 0.784485 19.5207 0.784485 20.7595 1.17298C22.0318 1.57198 23.1925 2.26549 24.148 3.19745C25.0783 4.10488 25.7372 5.32595 27.0551 7.76811L27.438 8.47762C28.9807 11.3364 29.7521 12.7658 29.9629 14.295C30.0696 15.0688 30.0696 15.8537 29.9629 16.6275C29.7521 18.1566 28.9807 19.586 27.438 22.4449L27.0551 23.1544C25.7372 25.5965 25.0783 26.8176 24.148 27.725C23.1925 28.657 22.0318 29.3505 20.7595 29.7495C19.5207 30.138 18.1359 30.138 15.3662 30.138C12.5965 30.138 11.2117 30.138 9.9729 29.7495C8.70063 29.3505 7.53987 28.657 6.58443 27.725C5.65414 26.8176 4.99519 25.5965 3.6773 23.1544L3.29442 22.4449Z" fill="url(#paint0_linear_231_3060)"></path><defs><linearGradient id="paint0_linear_231_3060" x1="15.3662" y1="0.784485" x2="15.3662" y2="30.138" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg>
          </div>
          <div className="title_element">Home</div>
          <div className="number_element">
          <span>1</span>
          </div>
        </div>
        <div className="element">
          <div className="icon_element">
          <svg id="projectsIcon" width="20" height="20" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4767 37.9031H19.4906C19.7686 27.4251 28.3497 19.0165 38.8948 19.0165C39.0704 19.0165 39.2455 19.0189 39.42 19.0235V19.0096C39.2455 19.0142 39.0704 19.0165 38.8948 19.0165C28.3497 19.0165 19.7686 10.608 19.4906 0.130005H19.4767C19.2033 10.4335 10.901 18.7359 0.597656 19.0096V19.0235C10.901 19.2972 19.2033 27.5996 19.4767 37.9031Z" fill="white"></path></svg>
          </div>
          <div className="title_element">Project</div>
          <div className="number_element">
          <span>2</span>
          </div>
        </div>
        <div className="element">
          <div className="icon_element">

          <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4464 2.75646L11.244 3.95879L8.92498 1.71079L10.1628 0.472934C10.4656 0.170119 10.8764 0 11.3046 0C11.7328 0 12.1435 0.170119 12.4464 0.472934C12.7492 0.775749 12.9193 1.18645 12.9193 1.6147C12.9193 2.04294 12.7492 2.45365 12.4464 2.75646ZM10.5399 4.66209L3.14752 12.0545L0 12.9314L0.863187 9.77177L8.22813 2.40683L10.5399 4.66209Z" fill="white"/>
          </svg>

          </div>
          <div className="title_element">Blog</div>
          <div className="number_element">
          <span>3</span>
          </div>
        </div>
        <div className="element">
          <div className="icon_element">
          <svg width="17" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_748_3348)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.94256e-05 16.001V8.00098V0.00102234H16V8.00098V16.001H8.00003H2.94256e-05ZM16 0.00102234H16.0078V16.0088H0V0.00102234H2.94256e-05V0.000976562H8.00003H16V0.00102234ZM7.45315 2.64785C7.31253 2.10723 6.8969 1.68848 6.3594 1.54785C6.09378 1.4791 2.8844 1.48223 2.62815 1.55098C2.10003 1.6916 1.68753 2.11348 1.5469 2.64785C1.47815 2.91348 1.47815 6.08848 1.5469 6.3541C1.68753 6.89473 2.10315 7.31348 2.64065 7.4541C2.91565 7.52285 6.0844 7.52285 6.3594 7.4541C6.8969 7.31348 7.31253 6.89473 7.45315 6.3541C7.5219 6.08848 7.5219 2.91348 7.45315 2.64785ZM14.4532 2.64785C14.3125 2.10723 13.8969 1.68848 13.3594 1.54785C13.0938 1.4791 9.88441 1.48223 9.62815 1.55098C9.10003 1.6916 8.68753 2.11348 8.5469 2.64785C8.47816 2.91348 8.47816 6.08848 8.5469 6.3541C8.68753 6.89473 9.10316 7.31348 9.64065 7.4541C9.91566 7.52285 13.0844 7.52285 13.3594 7.4541C13.8969 7.31348 14.3125 6.89473 14.4532 6.3541C14.5219 6.08848 14.5219 2.91348 14.4532 2.64785ZM7.45315 9.64785C7.31253 9.10723 6.8969 8.68848 6.3594 8.54785C6.09378 8.4791 2.8844 8.48223 2.62815 8.55098C2.10003 8.6916 1.68753 9.11348 1.5469 9.64785C1.47815 9.91348 1.47815 13.0885 1.5469 13.3541C1.68753 13.8947 2.10315 14.3135 2.64065 14.4541C2.91565 14.5229 6.0844 14.5229 6.3594 14.4541C6.8969 14.3135 7.31253 13.8947 7.45315 13.3541C7.5219 13.0885 7.5219 9.91348 7.45315 9.64785ZM14.4125 10.7791C14.0907 9.60098 13.1719 8.75098 12.0094 8.54785C10.8094 8.33848 9.58753 8.8916 8.94378 9.93848C8.1094 11.2947 8.50315 13.1041 9.83128 13.9885C10.3 14.301 10.7907 14.4635 11.3594 14.4916C12.7813 14.5635 14.025 13.6385 14.4125 12.2229C14.5094 11.8791 14.5094 11.1229 14.4125 10.7791Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_748_3348">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>
          </div>
          <div className="title_element">Taste</div>
          <div className="number_element">
            <span>4</span>
          </div>
        </div>
        <div className="element">
          <div className="icon_element">
          <svg width="17" height="17" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.106 3.2322C14.0341 2.8647 13.7066 2.59306 13.3231 2.59306H1.85053C1.46704 2.59306 1.13948 2.8647 1.06758 3.2322L0.396484 6.58769V7.38662C0.396484 7.82602 0.756001 8.18554 1.19541 8.18554V12.1802C1.19541 12.6196 1.55493 12.9791 1.99433 12.9791H8.38574C8.82514 12.9791 9.18466 12.6196 9.18466 12.1802V8.18554H12.3804V12.1802C12.3804 12.6196 12.7399 12.9791 13.1793 12.9791C13.6187 12.9791 13.9782 12.6196 13.9782 12.1802V8.18554C14.4176 8.18554 14.7771 7.82602 14.7771 7.38662V6.58769L14.106 3.2322ZM7.58681 11.3812H2.79326V8.18554H7.58681V11.3812ZM1.99433 1.79414H13.1793C13.6187 1.79414 13.9782 1.43462 13.9782 0.995214C13.9782 0.555805 13.6187 0.196289 13.1793 0.196289H1.99433C1.55493 0.196289 1.19541 0.555805 1.19541 0.995214C1.19541 1.43462 1.55493 1.79414 1.99433 1.79414Z" fill="white"/>
                </svg>
          </div>
          <div className="title_element">Store</div>
          <div className="number_element">
          <span>5</span>
          </div>
        </div>
        <div className="element">
          <div className="icon_element">
          <svg width="20" height="20" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.54978 17.749C14.3418 17.749 18.2265 13.8643 18.2265 9.07224C18.2265 4.28021 14.3418 0.395508 9.54978 0.395508C4.75775 0.395508 0.873047 4.28021 0.873047 9.07224C0.873047 10.8262 1.39346 12.4586 2.28829 13.8234L1.61508 19.7477C1.57562 20.0949 1.94194 20.3439 2.2503 20.1794L7.33984 17.465C8.0454 17.6503 8.78607 17.749 9.54978 17.749ZM6.51316 8.20371C6.27356 8.20371 6.07933 8.39795 6.07933 8.63755V9.50522C6.07933 9.74482 6.27356 9.93906 6.51316 9.93906H12.5869C12.8265 9.93906 13.0207 9.74482 13.0207 9.50522V8.63755C13.0207 8.39795 12.8265 8.20371 12.5869 8.20371H6.51316Z" fill="white"/>
            </svg>
          </div>
          <div className="title_element">Dm</div>
          <div className="number_element">
          <span>6</span>
          </div>
        </div>
        <div className="element">
          <div className="icon_element">
          <svg width="20" height="20" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M2.93164 10.012V28.9841L12.4177 19.498L2.93164 10.012ZM4.81653 8.11102L16.826 20.1205C18.3428 21.6373 20.9881 21.6373 22.5048 20.1205L34.5143 8.11102H4.81653Z" fill="white"/>
                 <path d="M24.3972 22.0134C23.1348 23.2771 21.4534 23.9746 19.6649 23.9746C17.8763 23.9746 16.1949 23.2771 14.9325 22.0134L14.31 21.3909L4.83203 30.8689H34.4977L25.0197 21.3909L24.3972 22.0134ZM26.9126 19.4979L36.3986 28.984V10.0119L26.9126 19.4979Z" fill="white"/>
               </svg>
          </div>
          <div className="title_element">Mail</div>
          <div className="number_element">
          <span>7</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
  export default KeyNav
  