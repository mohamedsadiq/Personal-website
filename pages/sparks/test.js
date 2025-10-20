import Head from "next/head";
import BackButton from "../../components/backButton";


export default function Test() {
  
  return (
    <>
      <Head>
        <title>3D Model Showcase</title>
        <meta name="description" content="3D Model Showcase with Three.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="container inner_container_sparks">
        <BackButton title={""} />
        <div className="inner_container inner_container_sparks">
          <h2 className="mt-10 mb-0 text-xl font-semibold inline text-black">Title</h2>
          <span className="text-xs text-stone-500"> - Jun 2024</span>
          <p>
            test
          </p>
          <div className="expBorder" >
          <div  className="exp" style={{ height: "500px", position: "relative" }}>
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
