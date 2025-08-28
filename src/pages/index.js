import * as React from "react"
import "../index.css"
import logo from "../assets/logo.png"
import hero from "../assets/hero.jpg"
import hero2 from "../assets/c1.jpg"
import location from "../assets/location.png"
import { GrClose, GrLocationPin } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowRight, GoArrowLeft} from "react-icons/go";

import { TfiTime } from "react-icons/tfi";
import { IoCalendarClearOutline } from "react-icons/io5";

import { useRef } from "react";
import { Link } from "gatsby"
import { useState } from "react"
import ng_icon from "../assets/ng.svg"
import eu_icon from "../assets/eu.svg"
import us_icon from "../assets/us.svg"
import uk_icon from "../assets/uk.svg"
import { BiCheckCircle, BiChevronDown } from "react-icons/bi"
import { BsCopy } from "react-icons/bs";
import { useEffect } from "react"

import { AiOutlineMenu } from "react-icons/ai";
import { SEO } from "../assets/component/seo"

const Home = ()=>{


// -------------------------------
const [openModal,setOpenmodal] = useState(false)
const [isModal,setIsmodal] = useState(false)

const [AccountInd,setAccountInd] = useState(0)
const Accounts = [{icon:ng_icon, type:"Nigerian Naira", details:[{title:"Account Holder",desc:"Promise Sunday Kpaliku"},
  {title:"Account Number",desc:"0479622568"},
{title:"Bank Name",desc:"Guaranty Trust Bank"},
  
]},
{icon:us_icon, type:"United State Dollar", details:[{title:"Account Holder",desc:"Promise Sunday Kpaliku"},
  {title:"Account Number",desc:"0893872020"},
{title:"Bank Name",desc:"Guaranty Trust Bank"},
{title:"Swift code",desc:"GTBINGLA"},
  
]},
{icon:uk_icon, type:"British Pound", details:[{title:"Account Holder",desc:"Promise Sunday Kpaliku"},
  {title:"Account Number",desc:"0893872037"},
{title:"Bank Name",desc:"Guaranty Trust Bank"},
{title:"Swift code",desc:"GTBINGLA"},
]},
{icon:eu_icon, type:"Euro", details:[{title:"Account Holder",desc:"Promise Sunday Kpaliku"},
  {title:"Account Number",desc:"0893872044"},
{title:"Bank Name",desc:"Guaranty Trust Bank"},
{title:"Swift code",desc:"GTBINGLA"},
]},
]



// -----------------------------------
const Menu = [{title:"Direction Guide",link:"#direction"},{title:"Event",link:"#event"},{title:"Photo Speaks",link:"#photo"},
  {title:"Sponsorship",link:"#sponsor"},    
  ]

// ---------------------REMINDER FUNCTION
const Reminder = (e)=>{
  e.preventDefault()
const traditionalWedding = {
  title: "Traditional Wedding",
  startDate: "20251010",
  endDate: "20251010",
  details: "Join us for the Traditional Wedding Ceremony!",
  location: "45 Redemption Road, Pipeline Rumukwurushi, Port Harcourt"
};

const whiteWedding = {
  title: "White Wedding",
  startDate: "20251011",
  endDate: "20251011",
  details: "Celebrate the White Wedding with us!",
  location: "Deeper Christian Life Ministry, Rumudara, Port Harcourt, Rivers State."
};

const createGoogleCalendarUrl = (event) => {
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;
};

const traditionalUrl = createGoogleCalendarUrl(traditionalWedding);
const whiteUrl = createGoogleCalendarUrl(whiteWedding);

window.open(traditionalUrl, '_blank');
window.open(whiteUrl, '_blank');
}

const Reminder2 = (e)=>{
  e.preventDefault()

const whiteWedding = {
  title: "White Wedding",
  startDate: "20251011",
  endDate: "20251011",
  details: "Celebrate the White Wedding with us!",
  location: "Deeper Christian Life Ministry, Rumudara, Port Harcourt, Rivers State."
};

const createGoogleCalendarUrl = (event) => {
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;
};

const whiteUrl = createGoogleCalendarUrl(whiteWedding);
window.open(whiteUrl, '_blank');
}
// ---------------------------------------------
const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };
  // ------------------------------
  const [isalert,setIsAlert] = useState(false)
  const  copyToClipboard = (text)=> {
    navigator.clipboard.writeText(text)
    
      .then(() => {
        console.log('Text copied to clipboard');
        setIsAlert(true)
    setTimeout(()=>{setIsAlert(false)},3000)
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  }
  // ---------------------
  const [headerShow,setHeaderShow]= useState(false)
   const [menuShow,setMenuShow]= useState(false)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setMenuShow(false)
      setScrollY(window.scrollY); // or use window.pageYOffset
    };

    window.addEventListener("scroll", handleScroll);

    // Call once to set initial value
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


useEffect(()=>{
  if(scrollY>140){setHeaderShow(true)}else{
    setHeaderShow(false)
  }
},[scrollY])

// ------------------------------

const toggleMenu = ()=>{
setMenuShow(true)
}

const closeMenu = ()=>{
setMenuShow(false)
}



  return <section className="body_container">
    <div className={headerShow||menuShow?"header_cont show_header":"header_cont"}>
    <header className="header">
      <img src={logo} alt={""}/>


{menuShow?<GrClose className="header_menu" onClick={closeMenu}/>:<AiOutlineMenu className="header_menu" onClick={toggleMenu}/>}


      <ul className="header_list">
{Menu.map((item,index)=>(
  <li><Link href={item.link}>{item.title}</Link></li>
))}
      </ul>
    </header>
<nav className={menuShow?"menu_nav show_menu_nav":"menu_nav"} >
  <ul className="menu_nav_list">
{Menu.map((item,index)=>(
  <li><Link href={item.link}><span>{item.title}</span><GoArrowRight className="r_icon"/></Link></li>
))}
      </ul>
</nav>

</div>
{/* ------------------------------------- */}
<div className="hero" style={{backgroundImage:`url(${hero})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backfaceVisibility:"80%"}}>
<div className="hero_overlay">
<h2>We Invite you to Our Wedding</h2>
<h1>Laura & Promise</h1>
<div className="ho_date"><p>October 10th & 11th, 2025</p> <span>| </span><p><CiLocationOn /> <span>Port Harcourt, Nigeria</span></p></div>

<p>With great joy and excitement, we invite you to celebrate our love as we begin a new chapter together.</p>

<button onClick={Reminder} className="hero_overlay_btn"><span>Create Reminder</span> <GoArrowRight className="r_icon"/></button>
</div>


</div>
{/* -----TM------------- */}
<div className="date_hero"  style={{backgroundImage:`url(${hero2})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backfaceVisibility:"80%"}} id="event">
<div className="date_hero_overlay">

<div className="dho_cont">
<div className="wedding_date">
<h2>Traditional Marriage</h2>
<div className="wd_desc">
<div className="wd_frag1">
<CiLocationOn className="wd_icon"/>
<p><Link href="https://maps.app.goo.gl/MLAGs7N2a7cAiCL4A">45 Redemption Road, Pipeline 1 Rumukwurushi, Port Harcourt, Rivers State.</Link></p>
</div>
{/* ------------- */}
<div className="wd_frag2">
<p><TfiTime className="wdf_i1"/> <span>10:00 AM</span></p>
<h4><IoCalendarClearOutline className="wdf_i2"/> <span>October 10th, 2025</span></h4>
</div>
</div>
<button onClick={Reminder} className="hero_overlay_btn"><span>Create Reminder</span> <GoArrowRight className="r_icon"/></button>
</div>

{/* -----white------------- */}
<div className="wedding_date">
<h2>White Wedding</h2>
<div className="wd_desc">
<div className="wd_frag1">
<CiLocationOn className="wd_icon"/>
<p><Link href="https://maps.app.goo.gl/eAgxJDw2DLHZtxn78">Deeper Christian Life Ministry, Rumudara, Port Harcourt, Rivers State.</Link></p>
</div>
{/* ------------- */}
<div className="wd_frag2">
<p><TfiTime className="wdf_i1"/> <span>8:00 AM</span></p>
<h4><IoCalendarClearOutline className="wdf_i2"/> <span>October 11th, 2025</span></h4>
</div>
</div>
<button onClick={Reminder2} className="hero_overlay_btn"><span>Create Reminder</span> <GoArrowRight className="r_icon"/></button>
</div>
</div>


</div>


</div>

{/* ------------------------ */}

<div className="ps_wrapper" id="photo">
<div className="ps_ctr">
<button><GoArrowLeft className="ps_icon" onClick={()=>scrollByAmount(-400)}/></button>
<button><GoArrowRight className="ps_icon" onClick={()=>scrollByAmount(400)}/></button>
</div>
{/* ------------------- */}
<div className="photo_speak" ref={scrollRef}>
{[1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=>(
  <div className="photo_speak_image">
    
  </div>
))}
</div>
</div>

{/* -------sponsor------------------ */}
<div className="sponsor" id="sponsor">
<h3>Celebrate Love With Us</h3>
<button onClick={()=>{setIsmodal(true)}} className="hero_overlay_btn"><span>Become a Sponsor</span> <GoArrowRight className="r_icon"/></button>
</div>
{/* -------------location--------------------- */}
<div className="location"  id="direction">

<div className="location_card">
<img src={location} alt="wedding location"/>
{/* ---------------------------- */}
<div className="loc">
 <span className="loc_nav"></span> 
<GrLocationPin className="loc_icon"/>
<Link href="https://maps.app.goo.gl/eAgxJDw2DLHZtxn78" className="loc_info loc1_info"><p>White Wedding</p></Link>
</div>
{/* ----- */}
<div className="loc loc2">
 <span className="loc_nav"></span> 
<GrLocationPin className="loc_icon"/>
<Link href="https://maps.app.goo.gl/zDTqCK3WtG1eero68" className="loc_info loc2_info"><p>Reception</p></Link>
</div>
{/* ----- */}
<div className="loc loc3">
 <span className="loc_nav"></span> 
<GrLocationPin className="loc_icon"/>
<Link href="https://maps.app.goo.gl/MLAGs7N2a7cAiCL4A" className="loc_info"><p>Traditional Marriage</p></Link>
</div>
{/* ----- */}

</div>


</div>

{/* ---------------------modal */}

{isModal?<div className="payment_modal">

<button onClick={()=>{setIsmodal(false)}}><GrClose/></button>
<div className="modal_card">
  <p className={isalert?"alert show_alert":"alert"}>Copied!</p>

<div className="active_account" onClick={()=>{
  setOpenmodal(true)
}}><img src={Accounts?.[AccountInd]?.icon} alt={Accounts?.[AccountInd].type}/><p>{Accounts?.[AccountInd].type}</p> <BiChevronDown/></div>
{/* -------------------------- */}
<div className="account_details">
<h4>Account Details for {Accounts?.[AccountInd].type} </h4>

{Accounts?.[AccountInd].details?.map((item,index)=>(
  <div className="ad_info">
    <p>{item.title}</p>
  <h4><span>{item.desc}</span> <BsCopy onClick={()=>{copyToClipboard(item.desc)}} className="c_btn"/></h4>
  </div>
))}




{/* ---------------------------- */}
</div>

{/* ------------modal------------ */}
{openModal?<div className="float_modal" onClick={()=>{
        setOpenmodal(false)
  }}>
<div className={openModal?"float_modal_child show_float_modal_child":"float_modal_child"}>
<div className="fmc_info">
<h4>Select Account</h4>
<ul className="fmc_list">

{Accounts?.map((item,index)=>(
  <li className="fmc_li" key={index} onClick={()=>{
    setAccountInd(index)
    setOpenmodal(false)
  }}>
    <div className="fmc_icons">
     <img src={item.icon} alt=""/>
     <h5>{item.type}</h5> 
    </div>
   { index==AccountInd&&<BiCheckCircle/>}
  </li>
))}
</ul>



</div>
</div>
</div>:<></>}
</div>

</div>:<></>}

{/* ------------------------ */}
  </section>
}











export default Home



export const Head=()=>{
  //console.log(props,data)
  const keywords =["wedding"]
  const pathname = ""
  const excerpt = "With great joy and excitement, we invite you to celebrate our love as we begin a new chapter together."
  return (
    <SEO
      title={`Laura & Promise 2025`}
      description={excerpt}
      pathname={`/${pathname}`}
      twitterUsername={"@"}
      url={"www.laura-promise.site"}
      image={
        "https://firebasestorage.googleapis.com/v0/b/oceandyn-bd23b.appspot.com/o/hero.jpg?alt=media&token=c6cc1bc6-f07b-46c2-b6bb-ac861246c4c5"
      }
      keywords={keywords}
    />
  );
} 