import React from "react";
import '../Styes/mainpage.css' 


function MainPage(){
    return(
        <div className="main_page_">

           {/* Beginning Of Header */}
                
           <div className="header">
                 <h1>My React App Header</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        {/* Add more navigation items */}
                    </ul>       
                </nav>
            </div>
        {/* End Of Header For Now */}


                    {/* Beginning Of Content */}
            
            <div className="content">
                 <section>

                    <div className="fashion-home">
                        <h2>YOUR ONE-STOP FASHION HOME</h2>
                        <p>we stand for luxury, efficiency, and honesty</p>
                        <button>SHOP NOW</button>
                    </div>

                    <div className="collections">
                        Collections
                    </div>

                    <div className="flex-container">
                         <div className="items">Item 1</div>
                         <div className="items">Item 2</div>
                         <div className="items">Item 3</div>
                    </div>

                    {/* <div id="grid">
                        <div className="item">1</div>
                        <div className="item">2</div>
                        <div className="item">3</div>
                        <div className="item">4</div>
                        <div className="item">5</div>
                        <div className="item">6</div>

                    </div> */}

                    

                </section>
            </div>






    <div className="main_page_">
    Hello Zainab
        </div>





        </div>
        
    )
}
export default MainPage;