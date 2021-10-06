import React from 'react';
import { List, Nav } from './Navbar.styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <Nav>
            <List>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/teaching philosophy' ><li>TEACHING PHILOSOPHY</li></Link>
                <Link to='/lesson plans and videos' ><li>LESSON PLANS AND VIDEOS</li></Link>
                <Link to='/toolbox tips' ><li>TOOLBOX TIPS</li></Link>
                <li><a href='#id-with-pic'>PICTURE WITH ID</a></li>
            </List>
        </Nav>
     );
}
 
export default Navbar;