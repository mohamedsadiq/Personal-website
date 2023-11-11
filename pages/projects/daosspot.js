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

const DeveloperDAO = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DAOs Spot | Mohamed Sadiq</title>
        <meta name="description" content="DAOs Spot case study" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mohamedsadiq.me" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="DAOs sPOT" />
        <meta name="twitter:image" content="https://i.ibb.co/xsRLjwQ/daosspot1.png" />
        
      </Head>
      <main>
        <div className="container">
          <div className="inner_container inner_container_mobile">
            <WorkIntro
              title={"DeveloperDao"}
              link={"https://www.daosspot.xyz/"}
            />
             <div className="project_title">
             <h1>DAOs Spot</h1>
             <p>Your gateway to decentralized communities.  <span className="dateProject">-  Jun 2023 </span></p>
             </div>
            <div className="blog_photo inner_blog work_intro_image">
              <Image
                src={img1}
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                placeholder="blur"
                quality={100}
              />
            </div>
            

            
            <h2>Project Overview</h2>
            <div className="project_info">
             
              <a
                className="projectLink"
                target="_blink"
                href="https://www.daosspot.xyz/"
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
              DAOs Spot is my second venture that I bootstrapped with almost
              zero budget. Taking on the responsibility for product design and
              development, my aim was to address a critical challenge: How can I
              actively engage with DAOs, contribute effectively, stay informed
              about their news, and identify tools to streamline these
              processes? This challenge became apparent as I joined various
              DAOs. Notably, the project has captured the attention of an
              original DAO, aligning with their mission. Additionally, a leading
              international investment firm focused on Web3 has reached out. I
              am Enthusiastic about the future of DAOs Spot, And I look forward to the exciting opportunities that the future holds.
              
            </p>
            <h2>Awards and recognition</h2>
            <p>DAOs Spot pleasantly surprised me by securing the 4th position for Product of the Week in the Web3 category on Product Hunt. It's a humble nod that what I've done worthwhile. <a className="linkProductHunt" href="https://www.producthunt.com/products/daos-spot">DAOsSpot on Product Hunt</a> </p>
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
          <div className="blog_photo inner_blog">
            <Image
              src={img2}
              alt="Picture of the author"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              placeholder="blur"
              quality={100}
            />
          </div>
          <span className="project_img_des">( The Home page) </span>


          <div className="blog_photo inner_blog ">
            <Image
              src={img3}
              alt="Picture of the author"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              placeholder="blur"
              quality={100}
            />
          </div>

          <div className="blog_photo inner_blog ">
            <Image
              src={img4}
              alt="Picture of the author"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              placeholder="blur"
              quality={100}
            />
          </div>

          <div className="blog_photo inner_blog ">
            <Image
              src={img5}
              alt="Picture of the author"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>

        <div className="container ">
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
            link={"https://www.daosspot.xyz/"}
          />
        </div>
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
