import React from 'react';
import Navbar from '../navbar/Navbar';
import { PictureID, Wrapper } from './Id.styles';
import ID from '../../images/id.jpg'

const Id = () => {
    return ( 
        <div>
            <Navbar />
            <Wrapper>
                <PictureID src={ID}  alt='face picture with id'/>
            </Wrapper>
        </div>
     );
}
 
export default Id;