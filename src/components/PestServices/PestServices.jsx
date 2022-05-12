import React, { useState } from 'react';
import './PestServices.css';
import { PestServiceCard, PestServiceDetails } from '..';

function Services() {
    const services = [
        {id:0, img: "csotany.JPG", title: "Csótányírtás", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt, libero odit atque aspernatur voluptatum, sit, dolores consectetur quis sequi sunt! Quidem recusandae modi iste temporibus nobis perspiciatis, nemo possimus?"},
        {id:1, img: "hangya.JPG", title: "Hangyaírtás", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt, libero odit atque aspernatur voluptatum, sit, dolores consectetur quis sequi sunt! Quidem recusandae modi iste temporibus nobis perspiciatis, nemo possimus?"},
        {id:2, img: "legy.JPG", title: "Légyírtás", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt, libero odit atque aspernatur voluptatum, sit, dolores consectetur quis sequi sunt! Quidem recusandae modi iste temporibus nobis perspiciatis, nemo possimus?"},
        {id:3, img: "moly.JPG", title: "Molyírtás", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt, libero odit atque aspernatur voluptatum, sit, dolores consectetur quis sequi sunt! Quidem recusandae modi iste temporibus nobis perspiciatis, nemo possimus?"},
        {id:4, img: "poloska.JPG", title: "Poloskaírtás", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt, libero odit atque aspernatur voluptatum, sit, dolores consectetur quis sequi sunt! Quidem recusandae modi iste temporibus nobis perspiciatis, nemo possimus?"},
        {id:5, img: "ragcsalo.JPG", title: "Rágcsáló írtás", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt, libero odit atque aspernatur voluptatum, sit, dolores consectetur quis sequi sunt! Quidem recusandae modi iste temporibus nobis perspiciatis, nemo possimus?"},
        {id:6, img: "fertotlenit.JPG", title: "Általános fertőtlenítés", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt, libero odit atque aspernatur voluptatum, sit, dolores consectetur quis sequi sunt! Quidem recusandae modi iste temporibus nobis perspiciatis, nemo possimus?"}
    ];

    const [showDetails, setShowDetails] = useState({ show: false, id: null })

    return (
        <div id='services'>
            <h3 className='title'>Szolgáltatásaink</h3>
            <div className='serviceCards'>
                {services.map(service => <PestServiceCard key={service.id} id={service.id} img={service.img} title={service.title} setShowDetails={setShowDetails} /> )}
            </div>
            { showDetails.show && <PestServiceDetails img={services[showDetails.id].img} title={services[showDetails.id].title} text={services[showDetails.id].text} setShowDetails={setShowDetails} />}
        </div>
    )
}

export default Services