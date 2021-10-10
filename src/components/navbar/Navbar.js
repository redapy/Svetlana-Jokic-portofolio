import React, { useEffect, useState } from 'react';
//styles
import { MobileIcon, Nav } from './Navbar.styles';
//components
import Pages from './Pages';
//Icones
import { FaBars } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'



const Navbar = () => {

    const [isOpened, setIsOpened] = useState(true);

    const handleOpen = () => {
        setIsOpened(!isOpened)
    };

    useEffect(() => {
        setIsOpened(false)
    }, [setIsOpened])

    return ( 
        <>
            <Nav>
                <Pages />
            </Nav>
            <MobileIcon onClick={handleOpen}>
                {!isOpened ? (<FaBars />) : (<AiOutlineClose />)}
            </MobileIcon>
            {isOpened && <Pages />}
        </>
     );
}
 
export default Navbar;