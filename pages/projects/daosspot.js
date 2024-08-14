import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import WorkIntro from "../../components/WorkIntro";
// import imgWork from "../../img/developerdao.png"

import imgWork2 from "../../img/44.png";
import imgWork3 from "../../img/42f3.png";
import imgWork4 from "../../img/4343.png";
import imgWork5 from "../../img/Body  2 Dark (After launching).png";
import imgWork6 from "../../img/develight.png";




import img1 from "../../img/11111111.png";
import img2 from "../../img/DAOs Spot/1.png";
import img3 from "../../img/DAOs Spot/2.png";
import img4 from "../../img/DAOs Spot/3.png";
import img5 from "../../img/DAOs Spot/4.png";
import img6 from "../../img/DAOs Spot/5.png";
const DeveloperDAO = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DAOs Spot</title>
        <meta name="description" content="DAOs Spot case study" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mohamedsadiq.me" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="DAOs Spot" />
        <meta name="twitter:image" content="https://i.ibb.co/xsRLjwQ/daosspot1.png" />
        
      </Head>
      <main>
        <div className="container">
          <div className="inner_container_project_parent inner_container inner_container_mobile">
            <WorkIntro
              title={"DeveloperDao"}
              link={"https://www.daospot.xyz/"}
            />
             <div className="project_title">
             <h1>DAOs Spot</h1>
             <p>Your gateway to decentralized communities.  <span className="dateProject">-  Jun 2023 </span></p>
             </div>
         
              <Image
                src={img1}
                alt="Picture of the author"
                objectFit="cover"
                // layout="fill"
                objectPosition="center"
                placeholder="blur"
                quality={100}
                 className="rounded-xl block mt-4"
              />
         
            

            
            <h2 className="text-slate-950">Project Overview</h2>
            <div className="project_info">
             
              <a
                className="projectLink"
                target="_blink"
                href="https://www.daospot.xyz/"
              >
                {" "}
                Visit Live ↗
              </a>
              <div className="projects_tags">
                <span>Bootstrapped</span>
                <span>Ventures</span>
                <span>DAOs</span>
              </div>
            </div>
            <p>
            Initiating the journey of DAOs Spot marked my first venture, a bootstrap endeavor fueled by minimal resources. Taking charge of both product design and development, my primary goal centered around tackling a crucial challenge: How could I actively immerse myself in DAOs, contribute meaningfully, stay abreast of their updates, and discover tools to streamline these processes? This challenge materialized as I became a part of various DAOs. Significantly, the project has garnered the attention of an original DAO, aligning seamlessly with their mission. Moreover, a prominent international investment firm focused on Web3 has expressed interest. The prospect of DAOs Spot excites me, and I eagerly anticipate the promising opportunities that lie ahead.


              
            </p>
            <h2>Awards and recognition</h2>
            <p>DAOs Spot pleasantly surprised me by clinching the 4th position for Product of the Week in the Web3 category on Product Hunt. It serves as a modest acknowledgment that the efforts invested have proven worthwhile. DAOsSpot on Product Hunt has been an encouraging experience. </p>
            <h2>Embracing Minimalism in Design</h2>
            <p>My approach to design for DAOs Spot was rooted in a desire to evoke a premium feel through minimalism, a departure from the often cluttered landscape of Web3 interfaces. I aimed to bring forth a user experience that exuded simplicity, yet sophistication, ensuring that engagement with the platform was both intuitive and aesthetically pleasing. This emphasis on minimalism sought to address a gap in the Web3 space, where the user experience can sometimes be overwhelming and complex.</p>
           
            {/* <div className="blog_photo inner_blog work_intro_image">
              <Image
                src={daosspotProductHunt}
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                placeholder="blur"
                quality={100}
              />
            </div> */}
          </div>
        </div>
        <div className="container_work_inner">
         
            <Image
              src={img2}
              alt="Picture of the author"
              objectFit="cover"
              // layout="fill"
              objectPosition="center"
              placeholder="blur"
              quality={100}
              className="rounded-xl block mt-20"
            />
          
          <span className="project_img_des">(The Home page) </span>


         
            <Image
              src={img3}
              alt="Picture of the author"
              objectFit="cover"
              // layout="fill"
              objectPosition="center"
              placeholder="blur"
              quality={100}
              className="rounded-xl block mt-20"
            />
       
       
            <Image
              src={img6}
              alt="Picture of the author"
              objectFit="cover"
              // layout="fill"
              objectPosition="center"
              placeholder="blur"
              quality={100}
              className="rounded-xl block mt-20"
            />
        

         
        

         
            <Image
              src={img5}
              alt="Picture of the author"
              objectFit="cover"
              // layout="fill"
              objectPosition="center"
              placeholder="blur"
              quality={100}
              className="rounded-xl block mt-20"
            />
         
        </div>

        {/* <div className="container ">
          <div className="footer_projects"></div>
          <div className="footer_projects_content">
            <h2> Want a deeper dive?</h2>
            <p>Get in touch to schedule a presentation</p>
            <ul>
              <li>
                <a href="mailto:mohamed.sadiq@outlook.sa" target="_blink">Email ↗</a>
              </li>
              <li>
                <a href="https://twitter.com/sadiq_moo" target="_blink">X.com ↗</a>
              </li>
              <li>
                <a href="https://dribbble.com/Mohamed-Sadiq" target="_blink">Dribble ↗</a>
              </li>
              <li>
                <a href="https://www.behance.net/mohamed_sadiq" target="_blink">Behance ↗</a>
              </li>
              <li>
                <a href="https://github.com/mohamedsadiq" target="_blink">GitHub ↗</a>
              </li>
            </ul>
          </div>
          <WorkIntro
            title={"DeveloperDao"}
            link={"https://www.daospot.xyz/"}
          />
        </div> */}
      </main>
    </div>
  );
};
export default DeveloperDAO;

const data = {
  projectOverview: "Project Overview",
  projectOverviewPara:
    "Developer DAO is a DAO that exists to accelerate the education and impact of a new wave of web3 builders. The website was among the priorities for the DAO, because of its importance in bringing in new partners and sponsors",
  myContributions: "My Contributions",
  myContributionsPara:
    "I was the champion of the project on the design side. The existing website did not represent the DAO, the design was so simple, and it did not deliver what it should have been delivering, first step was to analyze the flow and overall aesthetic appeal of the website and figure out the direction that we should take. After that, my job was to simplify the process as much as possible and make it intuitive for the users, as well as improve the visual appeal of the entire site",
};
