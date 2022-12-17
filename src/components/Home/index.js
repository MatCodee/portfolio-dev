import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import "./index.css";
import Button from "../Button";
import projects from "../../utils/projects.json";
import {AnimatePresence, motion} from "framer-motion";


// images
import img1 from "../../assets/design-01.png";
import img2 from "../../assets/design-02.png";
// icon Images:
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";
import icon9 from "../../assets/icons/icon9.png";
import icon10 from "../../assets/icons/icon10.png";
import icon11 from "../../assets/icons/icon11.png";
import icon12 from "../../assets/icons/icon12.png";


//icons:
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube, BsTwitter, BsGithub } from "react-icons/bs";



const BannerScrollIcons = ({ playMarquee }) => {
  return (
    <>
      <div className="scroll-h-icon-s">
        <div className="container-h-icon">
          <img src={icon1} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon2} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon3} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon4} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon5} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon6} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon7} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon8} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon9} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon10} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon11} alt="icon"/>
        </div>
        <div className="container-h-icon">
          <img src={icon12} alt="icon"/>
        </div>
      </div>
    </>
  )
}


const Banner = ({playMarquee}) => {
  return (
    <div className={`Bannerp-content ${playMarquee && "animate"}`}>
      <div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='scroll-h-icon'>
          <BannerScrollIcons/>
          <BannerScrollIcons/>
          <BannerScrollIcons/>
          <BannerScrollIcons/>

      </div>
    </div>
  )
}


const Home = () => {
  const [playMarquee, setPlayMarquee] = useState(false);
  const [element,setElement] = useState(projects)
  const category_filter = [
    'Frontend',
    'Backend',
    'FullStack',
    'Inteligencia Arificial',
    'Mobile',
  ]

  const filter_element = (category) => {
      const data = projects.filter((e) => e.category === category)
      setElement(data)
  }  

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
    consoleText(["Hi, i'm Matias"], 'text',['rgb(18, 46, 98)']);
  }, [])
  return (
    <>
      <div className="container-home">
        <div className="box-layout">
          <div className="item1">
            <div className="dinamic-text">
              <h1 id="text"> Hi, i'm Matias</h1>
            </div>
            <p className="content-text-des">Builder of things.</p>
            <Link style={{ marginTop: '20px' }} className="button-secundary">Get Started</Link>
            <div className="fig-c"></div>
          </div>
          <div className="item2">
            <div className="container-pos-img1">
              <img src={img1} alt="Imagen de Tegnologia" />
            </div>
            <div className="container-pos-img2">
              <img src={img2} alt="Imagen de Tegnologia" />
            </div>
          </div>
        </div>
        <div className="container-icon">
          <a href="#"> <AiOutlineInstagram className="icon" /></a>
          <a href="#"> <BsYoutube className="icon" /></a>
          <a href="#"> <BsTwitter className="icon" /></a>
          <a href="#"><BsGithub className='icon' /></a>
        </div>
      </div>

      <div className="container-banner ">
        <Banner playMarquee={playMarquee}  />
      </div>




      <div className="container-home">
        <section className="section-layout">
          <p>SELECTED PROJECTS</p>
          <h3>Algunos de mis proyectos </h3>

          <div className="category">
            <ul>
              {category_filter.map((e,index) => <Button  key={index} filter_element={filter_element}>{e}</Button>)}
            </ul>
          </div>

          <div className="list">
            {element.map((e, index) => {
              return  <AnimatePresence key={index}>
                  <motion.div
                    layout
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration: 1}}
                  >
                    <div className="list-item-1 animation-list">
                      <Card key={index} data={e} />
                    </div>
                  </motion.div>
              </AnimatePresence>
            })}
          </div>

        </section>

      </div>
    </>
  )
}


export default Home


function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      //con.className = 'console-underscore hidden'
      visible = false;

    } else {
      //con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
