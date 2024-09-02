"use client";
import React from 'react';
import './App.css'
import {NaigationBar} from "./component/navbar.jsx";
import Hero from "./component/hero.jsx";
import Service from "./component/service.jsx";
import Proof from "./component/proof.jsx";
import Promo from "./component/promo.jsx";
import Footer from "./component/footer.jsx";

export default function App() {
    return (
       <>
               <div className="container">
                   <NaigationBar></NaigationBar>
               </div>
               <div className="justify-items-center">
                   <Hero></Hero>
               </div>
           <div>
               <Service></Service>
           </div>
           <div>
               <Proof>

               </Proof>
           </div>
           <div>
               <Promo></Promo>
           </div>
           <div>
               <Footer></Footer>
           </div>

       </>
    )
}

