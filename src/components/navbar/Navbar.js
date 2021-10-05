import React from 'react';
import { List, Nav } from './Navbar.styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <Nav>
            <List>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/teaching philosophy' >TEACHING PHILOSOPHY</Link></li>
                <li><Link to='/lesson plans and videos' >LESSON PLANS AND VIDEOS</Link></li>
                <li><Link to='/toolbox tips' >TOOLBOX TIPS</Link></li>
                <li><a href='#id-with-pic'>PICTURE WITH ID</a></li>
            </List>
        </Nav>
     );
}
 
export default Navbar;