import React from 'react';
import { List } from './Navbar.styles';
import { Link } from 'react-router-dom';

const Pages = () => {
    return ( 
        <List>
            <Link to='/' ><li>HOME</li></Link>
            <Link to='/teaching philosophy' ><li>TEACHING PHILOSOPHY</li></Link>
            <Link to='/lesson plans and videos' ><li>LESSON PLANS AND VIDEOS</li></Link>
            <Link to='/toolbox tips' ><li>TOOLBOX TIPS</li></Link>
        </List>
     );
}
 
export default Pages;