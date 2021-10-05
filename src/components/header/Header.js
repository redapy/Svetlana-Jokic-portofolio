import React from 'react';
//styles
import { HeaderImage, Wrapper } from './Header.styles';
//components
import Navbar from '../navbar/Navbar';
//images
import ESLImage from '../../images/esl2.jpg'


const Header = () => {

    return ( 
        <Wrapper>
            <HeaderImage
                src={ESLImage}
                alt= 'english-image'
            />
            <Navbar />
        </Wrapper>
     );
}
 
export default Header;