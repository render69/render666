import Image from 'next/image'
import avatarAmg from '../public/images/imgrender.gif'
import './globals.css'        // глобальные стили

import '../public/css/main.css'        // подключаем основной стиль

import img1 from '/imgrender.gif'
import img2 from '/main_bg.png'
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div
                className="lm-animated-bg"
                style={{
                    backgroundImage: 'url(./images/main_bg.png)', // правильный путь из public
                }}
            ></div>
            <div className="preloader">
                <div className="preloader-animation">
                    <div className="preloader-spinner">
                    </div>
                </div>
            </div>
            <div className="page">
                <div className="page-content">

                    <header id="site_header" className="header mobile-menu-hide">
                        <div className="header-content">
                            <div className="header-photo">
                                <Image src={avatarAmg} alt="RendeR" priority/>
                            </div>
                            <div className="header-titles">
                                <h2>RendeR#1492</h2>
                                <h4>Frontend Developer</h4>
                            </div>
                        </div>

                        <ul className="main-menu">
                            <li className="active">
                                <a href="#home" className="nav-anim">
                                    <span className="menu-icon lnr lnr-home"></span>
                                    <span className="link-text">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#about-me" className="nav-anim">
                                    <span className="menu-icon lnr lnr-user"></span>
                                    <span className="link-text">About Me</span>
                                </a>
                            </li>
                            <li>
                                <a href="#resume" className="nav-anim">
                                    <span className="menu-icon lnr lnr-graduation-hat"></span>
                                    <span className="link-text">Education</span>
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="nav-anim">
                                    <span className="menu-icon lnr lnr-users"></span>
                                    <span className="link-text">Guilds</span>
                                </a>
                            </li>
                            <li>
                                <a href="#signs" className="nav-anim">
                                    <span className="menu-icon lnr lnr-rocket"></span>
                                    <span className="link-text">Signs</span>
                                </a>
                            </li>



                            <li>
                                <a href="#team" className="nav-anim">
                                    <span className="menu-icon lnr lnr-code"></span>
                                    <span className="link-text">My team</span>
                                </a>
                            </li> 

                            <li>
                                <a href="#blog" className="nav-anim">
                                    <span className="menu-icon lnr lnr-book"></span>
                                    <span className="link-text">Blog</span>
                                </a>
                            </li>
                             <li>
                                <a href="#contact" className="nav-anim">
                                    <span className="menu-icon lnr lnr-envelope"></span>
                                    <span className="link-text">Contact</span>
                                </a>
                            </li>
                        </ul>

                        <div className="social-links">
                            <ul>
                                <li><a href="" target="_blank"><i className="fab fa-telegram"></i></a></li>
                                <li><a href="" target="_blank"><i className="fab fa-discord"></i></a></li>
                            </ul>
                        </div>

                        <div className="header-buttons">
                            <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
                        </div>

                        <div className="copyrights">© 2022 All rights reserved.</div>
                    </header>

                    
                    <div className="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                    <div className="lmpixels-arrows-nav">
                        <div className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right"></i></div>
                        <div className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left"></i></div>
                    </div>
                   

                    <div className="content-area">
                        <div className="animated-sections">
                           
                            <section data-id="home" className="animated-section start-page">
                                <div className="section-content vcentered">

                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="title-block">
                                                <h2>Никитосик</h2>
                                                <div className="owl-carousel text-rotation">
                                                    <div className="item">
                                                        <div className="sp-subtitle">Web-Developer</div>
                                                    </div>

                                                    <div className="item">
                                                        <div className="sp-subtitle">UI/UX Designer</div>
                                                    </div>

                                                    <div className="item">
                                                        <div className="sp-subtitle">Mobile Developer</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>

                            <div className="content-area">
                                <div className="animated-sections">
                                  
                                    <section data-id="hello" className="animated-section start-page">
                                        <div className="section-content vcentered">

                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="title-block">
                                                        <h2>RendeR рекомендует!</h2>
                                                        <div className="owl-carousel text-rotation">
                                                            <div className="item">
                                                                <div className="sp-subtitle">пожалуйста, не начинайте общение в чате только с Привет</div>
                                                            </div>

                                                            <div className="item">
                                                                <div className="sp-subtitle">UI/UX Designer</div>
                                                            </div>

                                                            <div className="item">
                                                                <div className="sp-subtitle">Mobile Developer</div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                    <section data-id="about-me" className="animated-section">
                                        <div className="page-title">
                                            <h2>About <span>Me</span></h2>
                                        </div>

                                        <div className="section-content">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-7">
                                                    <p>Hi, I am Nikita, a self-taught programmer. Right now I am writing discord bots, actively studying programming in various industries.</p>
                                                </div>

                                                <div className="col-xs-12 col-sm-5">
                                                    <div className="info-list">
                                                        <ul>
                                                            <li>
                                                                <span className="title">Age</span>
                                                                <span className="value">17</span>
                                                            </li>

                                                            <li>
                                                                <span className="title">Accommodation</span>
                                                                <span className="value">Russia</span>
                                                            </li>
<li>
                                                                <span className="title">e-mail</span>
                                                                <span className="value"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b8ddd5d9d1d4f8ddc0d9d5c8d4dd96dbd7d5">[email protected]</a></span>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="white-space-50"></div>

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12">
                                                    <div className="block-title">
                                                        <h3>What <span>I Do</span></h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6">
                                                    <div className="col-inner">
                                                        <div className="info-list-w-icon">
                                                            <div className="info-block-w-icon">
                                                                <div className="ci-icon">
                                                                    <i className="lnr lnr-tablet"></i>
                                                                </div>
                                                                <div className="ci-text">
                                                                    <h4>Application Development</h4>
                                                                    <p>I am starting training in mobile application development. I plan to write in JS and also in Python.</p>
                                                                </div>
                                                            </div>
                                                            <div className="info-block-w-icon">
                                                                <div className="ci-icon">
                                                                    <i className="lnr lnr-picture"></i>
                                                                </div><div className="ci-text">
                                                                    <h4>Web Design</h4>
                                                                    <p>I have been designing for about 1 months. I work in Photoshop and Figma, do design for websites, bots, process my photos.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xs-12 col-sm-6">
                                                    <div className="col-inner">
                                                        <div className="info-list-w-icon">
                                                            <div className="info-block-w-icon">
                                                                <div className="ci-icon">
                                                                    <i className="lnr lnr-keyboard"></i>
                                                                </div>
                                                                <div className="ci-text">
                                                                    <h4>Bot Development</h4>
                                                                    <p>I have been writing bots for discord for more than 1 week and I can say that I am not doing it very well. I write in Python using the library discord.py .</p>
                                                                </div>
                                                            </div>
                                                            <div className="info-block-w-icon">
                                                                <div className="ci-icon">
                                                                    <i className="lnr lnr-camera-video"></i>
                                                                </div><div className="ci-text">
                                                                    <h4>Video Editing</h4>
                                                                    <p>I am waiting for your video, working at Adobe Premiere and Sony Vegas. I can edit videos both for private authors and cuts for myself.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12">

                                                    <div className="block-title">
                                                        <h3>Pricing</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className=" col-xs-12 col-sm-12 ">
                                                    <div className="fw-pricing clearfix row">
                                                        <div className="fw-package-wrap col-md-6 highlight-col">
                                                            <div className="fw-package">
                                                                <div className="fw-heading-row">
                                                                    <span>Экономика</span>
                                                                </div>
                                                                <div className="fw-pricing-row">
                                                                    <span>2.000₽</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="fw-package-wrap col-md-6 highlight-col">
                                                            <div className="fw-package">
                                                                <div className="fw-heading-row">
                                                                    <span>Модерация</span>
                                                                </div>
                                                                <div className="fw-pricing-row">
                                                                    <span>1.500₽</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="fw-package-wrap col-md-6 highlight-col">
                                                            <div className="fw-package">
                                                                <div className="fw-heading-row">
                                                                    <span>Знакомства</span>
                                                                </div>
                                                                <div className="fw-pricing-row">
                                                                    <span>1.000₽</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="fw-package-wrap col-md-6 highlight-col">
                                                            <div className="fw-package">
                                                                <div className="fw-heading-row">
                                                                    <span>Gif баннер</span>
                                                                </div>
                                                                <div className="fw-pricing-row">
                                                                    <span>1.000₽</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="fw-package-wrap col-md-6 highlight-col">
                                                            <div className="fw-package">
                                                                <div className="fw-heading-row">
                                                                    <span>Наборы</span>
                                                                </div>
                                                                <div className="fw-pricing-row">
                                                                    <span>1.000₽</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="fw-package-wrap col-md-6 highlight-col">
                                                            <div className="fw-package">
                                                                <div className="fw-heading-row">
                                                                    <span>Профиль</span>
                                                                </div>
                                                                <div className="fw-pricing-row">
                                                                    <span>500₽</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section data-id="resume" className="animated-section">
                                        <div className="page-title">
                                            <h2>Education</h2>
                                        </div>

                                        <div className="section-content">

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-7">

                                                    <div className="timeline timeline-second-style clearfix">
                                                        <div className="timeline-item clearfix">
                                                            <div className="left-part">
                                                                <h5 className="item-period">2022</h5>
                                                                <span className="item-company">Independent learning</span>
                                                            </div>
                                                            <div className="divider"></div>
                                                            <div className="right-part">
                                                                <h4 className="item-title">Development of websites, bots and scripts</h4>
                                                                <p>Here I started developing both static sites and full-fledged ones, I learned to write bots in python a little bit.</p>
                                                            </div>
                                                        </div>

                                                        <div className="timeline-item clearfix">
                                                            <div className="left-part">
                                                                <h5 className="item-period">2020</h5>
                                                                <span className="item-company">LMK & IT</span>
                                                            </div>
                                                            <div className="divider"></div>
                                                            <div className="right-part">
                                                                <h4 className="item-title">Basic Education</h4>
                                                                <p>In this college I got started to get basic knowledge about programming, but I know a lot without this college.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section data-id="portfolio" className="animated-section">
                                        <div className="page-title">
                                            <h2>Guilds</h2>
                                        </div>
                                        <div className="section-content">
                                        </div></section>
                                    <section data-id="signs" className="animated-section">
                                        <div className="page-title">
                                            <h2>Signs</h2>
                                        </div>
                                        <div className="section-content">
                                        </div></section>
                                </div>

                            </div>



                            
                        </div>
                    </div>
                </div>


                <section data-id="team" className="animated-section">
                    <div className="page-title">
                        <h2>Anti-Raid Developers</h2>
                    </div>

                    <div className="section-content">

                        <div className="row">
                            <div className="col-xs-12 col-sm-12">

                                <div className="portfolio-content">

                                    <div className="portfolio-grid three-columns">

                                        <figure className="item lbaudio">
                                            <div className="portfolio-item-img">
                                                {/* <Image src="images/sweetness.gif" alt="infinity" className="guild_avatar"> */}
                                                    <a href="" target="_blank"></a>
                                            </div>
                                            <h4 className="name">ап</h4>

                                        </figure>

                        

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                </div>
        </main>
    )
}
