import React from 'react';
import profilePic from '../assets/profile.jpg';

function About() {
    return (
        <section id="about" style={{padding: '50px', textAlign: 'center'}}>
            <h2>About</h2>
            <img src={profilePic} alt="Profile" style={{width: '150px', borderRadius: '50%'}}/>
            <p>I am a graduate of Information Technology. I excel as a back-end developer. </p>
        </section>
    )
}


export default About; //This allows you to use it in another file