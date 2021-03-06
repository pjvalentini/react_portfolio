// This is the babel way
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1 className="text-center" id="home-header">Welcome to my Site</h1>
        <ul id="gallery">
            <li>
              <a href="https://github.com/pjvalentini/Lake-Tahoe-Website">
                <img src="./images/image 1.jpg" alt=""/>
                <p className="img-title">Lake Tahoe Tourist Site.</p>
              </a>
            </li>
            <li>
              <a href="https://www.pjvalentini.com/">
                <img src="./images/pjvweb.jpg" alt=""/>
                <p className="img-title">Photography website.</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/pjvalentini/Dice-App-Version-2.0">
                <img src="./images/diceapp.png" alt=""/>
                <p className="img-title">Virtual Dice Application</p>
              </a>
            </li>
            <li>
              <a href="img/image 3.jpg">
                <img src="./images/image 3.jpg" alt=""/>
                <p className="img-title">Altar Group Solutions Site.</p>
              </a>
            </li>
            <li>
              <a href="img/image 5.jpg">
                <img src="./images/image 5.jpg" alt=""/>
                <p className="img-title">3M Innovations Website.</p>
              </a>
            </li>
            <li>
              <a href="img/image 6.jpg">
                <img src="./images/image 6.jpg" alt=""/>
                <p className="img-title">Site made with Wordpress.</p>
              </a>
            </li>
          </ul>
        <Footer/>
      </div>
    )
  }
}
