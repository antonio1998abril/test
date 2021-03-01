import React, { useEffect } from 'react'



function Header() {

    const [scrolled,setScrolled]=React.useState(false)
    const handleScroll=()=>{
        const offset=window.scrollY;
        if(offset>10){
            setScrolled(true);
        }else{
            setScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled')
    }

    return (
        <header className={navbarClasses.join(" ")}>
        <h2>HEADER</h2>
        </header>
    )
}

export default Header
