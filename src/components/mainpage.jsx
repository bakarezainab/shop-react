import React from "react";
import '../Styes/mainpage.css' 
import show1 from '../Assets/Images/show1.png';
import men from '../Assets/Images/men.png';
import women from '../Assets/Images/women.png';
import rectangle10 from '../Assets/Images/Rectangle 10.png';
import rectangle11 from '../Assets/Images/Rectangle 11.png';
import rectangle42 from '../Assets/Images/Rectangle 42.png';
import internationalMobile from '../Assets/Images/International Mobile.png';
import ellipse6 from '../Assets/Images/Ellipse 6.png';
import vector from '../Assets/Images/Vector.png';
import vector1 from '../Assets/Images/Vector (1).png';
import security from '../Assets/Images/security.png';
import shoptacle from '../Assets/Images/Shoptacle.png';
import man61 from '../Assets/Images/man 61.png';




        function MainPage(){
        return(      

            <div id="grid">
                {/* Beginning Of Header */}
                <div className="header" id="header-grid1">

                    <div className="header-grid1"><img src={shoptacle} alt="shoptacle"/></div>

                    <div className="header-grid1">
                    <nav>
                    <ul className="horizontal-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Clothings</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>   
                   </nav>
                    </div>
                    <div className="header-grid1">
                        <button><a href="#">JOIN US</a></button>
                    </div>       
               
                 </div>
        {/* End Of Header For Now */}


        {/* Beginning Of Fashion Home */}
        <div className="fashion-home">
            
             <div className="abs-1">
             <img src={internationalMobile} alt="internationalMobile"/>            
            </div>

            <div className="abs-2">
            <h1>YOUR ONE-STOP FASHION HOME</h1>
            <p>we stand for luxury, efficiency, and honesty</p>
            <button>SHOP NOW</button>
            </div>
        
            </div>
            {/* End Of Fashion Home */}

            <div className="collections">
                <h1>Collections</h1>               
            </div>
                        {/* Beginning of Launches */}

            <div className="launches" id="launches-grid1">
                <div className="launch1 launches-grid2">

                    <div className="launch2"> 
                    <img src={show1} alt="show1"/>                            
                    </div>
                                            
                    <div className="launch2">Launches</div>
                    <div className="launch2"><button>SHOP NOW</button></div>

                </div>

                <div className="launch1 launches-grid2">

                    <div className="launch2"><img src={men} alt="men"/></div>
                    <div className="launch2">Men</div>
                    <div className="launch2"><button>SHOP NOW</button></div>

                </div>

                <div className="launch1 launches-grid2">

                    <div className="launch2"><img src={women} alt="women"/></div>
                    <div className="launch2">Women</div>
                    <div className="launch2"><button>SHOP NOW</button></div>

                </div>
                
            </div>
        {/* End of Launches

        {/* Beginning Of New Arrivals */}

        <div className="new-arrivals">
            <h1 className="arrival-text">New Arrivals</h1>

            <div id="arrivals-grid1">                                       
            
            <div className="arrivals1" id="arrivals-grid2">
                <div className="arrivals-grid2"><img src={rectangle10} alt="rectangle10"/></div>
                <div className="arrivals-grid2"><h1>New Men</h1></div>
            </div>                               

            <div className="arrivals1">
            <div className="arrivals-grid2"><img src={rectangle11} alt="rectangle11"/></div>
                <div className="arrivals-grid2"><h1>New Women</h1></div>
            </div>
        </div>
            </div>
            {/* End Of New Arrivals */}


            {/* Beginning Of Top Selling */}

            <div className="top-selling">
            <h1 className="selling-text">Top Selling</h1>

            <div id="selling-grid1">
                <div className="selling-grid1"><img src={rectangle42} alt="rectangle42"/></div>

                <div className="selling-grid1" id="selling-grid2">
                    <div className="selling-grid2"><h1>Adilette sneakers</h1></div>
                    <div className="selling-grid2"><h1 className="adilette-text">Shoptacle sneak are a tangible product because they can be seen, touched and worn. They can be classified as a consumer product because they are bought to satisfy an individual’s personal needs. </h1></div>
                    <div className="selling-grid2"><button>SHOP NOW</button></div>
                </div>
            </div>
            </div>
            {/* End Of Top Selling */}


            {/* Beginning Of About Us */}

            <div className="about-us" id="about-grid1">

                <div className="about-grid1"id="about-grid2">

                    <div className="about-grid2"><h1>About us</h1></div>
                    <div className="about-grid2"><h3> Shoptacle is a luxury online store that sells the finest women apparel, footwear, and accessories. We also have a wide variety of other brands such as Chanel, Prada, Louis Vuitton and many more. Our high quality merchandise is available at factory outlet, wholesale price at discount prices</h3></div>
                    <div className="about-grid2"><button>Contact Us</button></div>
                </div>    
                <div className="about-grid1"><img src={internationalMobile} alt="internationalMobile"/></div>

                </div>           
                        {/* End Of About Us */}


                        {/* Beginning Of Testimony */}

                        <div className="testimony">
                            <ul>
                                <li><h1>Testimony</h1></li>
                                <li>I enjoy shoptacle services. The best luxury online space to shop from, Im amazed by their swift delivery. You rock.</li>
                                <li><img src={ellipse6} alt="ellipse6"/></li>
                            </ul>
                        </div>









                        {/* <div className="testimony" id="testimony-grid1">

                            <div className="testimony-grid1"><h1>Testimony</h1></div>
                            <div className="testimony-grid1">I enjoy shoptacle services. The best luxury online space to shop from, Im amazed by their swift delivery. You rock.</div>
                            <div className="testimony-grid1"><img src={ellipse6} alt="ellipse6"/></div>

                        </div> */}
                        {/* End Of Testimony */}


                        {/* Beginning Of Superior */}

                        <div className="superior" id="superior-grid1">

                        <div className="superior-grid1">
                                <ul>
                                    <li><img src={vector1} alt="vector1"/></li>
                                    <li><h1>SUPERIOR QUALITY</h1></li>
                                    <li>All our luxury designed pieces are made with unique custom fabrics with quality in every detail</li>
                                </ul>
                            </div>     
                            
                     <div className="superior-grid1">
                                <ul>
                                    <li><img src={vector1} alt="vector1"/></li>
                                    <li><h1>Express Shipping</h1></li>
                                    <li>Free Shipping Available. Stress free home door delivery</li>
                                </ul>
                                </div>
                            <div className="superior-grid1">
                                 <ul>
                                    <li><img src={security} alt="security"/></li>
                                    <li><h1>100% Secured</h1></li>
                                    <li>100% quaranteed on safe goods delivery on all orders</li>
                                </ul>                               
                                </div>              
                        </div>
                                                {/* End Of Superior */}   

                                        {/* Beginning Of stay-in */}           

                        <div className="stay-in" id="stay-in1-grid1">

                        <div className="stay-in1-grid1"> 
                        <ul>
                            <li><h1>Stay in touch</h1></li>
                            <li><h2>Subscribe to the Shoptacle newsletter for exclusive products, new arrivals and wears launches
.</h2></li>
                            <li>
                                {/* <form>ds</form> */}
                            </li>
                            <li></li>
                        </ul>
                        
                        
                        
                        </div>
                        <div className="stay-in1-grid1"><img src={man61} alt="man61"/></div>






                        </div>





                                            {/* End Of stay-in */}           

                                        {/* Beginning Of shopping */}           
           
                                 <div className="shopping" id="shopping-grid1">

                                    <div className="shopping-grid1">

                                        <ul> <h1>Shopping</h1>
                                            <li>Men's Wear</li>
                                            <li>Women's Wear</li>
                                            <li>Shoes</li>
                                            <li>Accessories</li>                                            
                                        </ul>
                                    </div>

                                  <div className="shopping-grid1">

                                    <ul> <h1>Information</h1>
                                            <li>About Us</li>
                                            <li>Contact Us</li>
                                            <li>Shipping</li>
                                            <li>FAQs</li>                                            
                                        </ul>
                                    </div>

                                    <div className="shopping-grid1">

                                    <ul> <h1>Legal</h1>
                                            <li>Terms And Conditions</li>
                                            <li>Privacy policy</li>
                                            <li>Our Story</li>                                                                             
                                        </ul>
                                    </div>
                                    <div className="shopping-grid1">

                                    <ul> <h1>Socials</h1>
                                            <li>Facebook</li>
                                            <li>Instagram</li>
                                            <li>Twitter</li>
                                            <li>Pinterest</li>                                                                             
                                        </ul>
                                    </div>
                                 </div>
                                            {/* End Of shopping */}  



                                       {/* Beginning Of footer */}                                   

                                    <footer className="footer" id="footer-grid1">

                                        <div className="footer-grid1">
                                        <ul className="footer-list1">
                                            <li>Copyright © 2022 Shoptacle.</li>
                                            <li>Powered by Shopify</li>
                                            
                                        </ul>
                                         
                                        </div>
                                        <div className="footer-grid1">

                                        <ul className="footer-list2">
                                            <li>Google Play</li>
                                            <li>Visa</li>
                                            <li>Master Card</li>
                                            <li>Opay</li>
                                            <li>BitCoin</li>                                                                             
                                        </ul>
                                        </div>                                  
                                                               
                                        
                                        </footer>                   
   







                {/* <div className="item item4">4</div>
                <div className="item item8">8</div>
                <div className="item item9">9</div>
                <div className="item item10">10</div>
                <div className="item item11">11</div>
                <div className="item item12">12</div> */}
            </div>


            // <div id="container">
            //     <div>Left</div>
            //     <div>Right</div>
            // </div>

            









        )
        }
        export default MainPage;