import React from 'react';

function Header() {
    return (
        <header style={{padding: '20px', textAlign: 'center', backgroundColor: '#201e20c4', color: 'white'}}>
            <h1>Janna Raphaelle N. Mercado</h1>
            <p>Web Developer</p>
            <nav>
                <a href="#about" style={{margin: '0 10px', color: 'white'}}>About</a>
                <a href="#education" style={{margin: '0 10px', color: 'white',}}>Education</a>
                <a href='#contact' style={{margin: '0 10px', color: 'white'}}>Contact</a>
            </nav>
        </header>
    )
}

export default Header;