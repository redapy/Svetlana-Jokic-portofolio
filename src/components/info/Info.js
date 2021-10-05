import React from 'react';
import { Background, Content, ProfilePic, Wrapper } from './Info.styles';
import profile from '../../images/profile.jpg'

const Info = () => {

    return ( 
        <Background>
            <Wrapper>
                <ProfilePic 
                    src={profile}
                    alt='profile picture'
                />
                <Content>
                    <h1>Svetlana Jokic: Teaching portfolio</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum rem necessitatibus ipsa aspernatur perspiciatis quibusdam repellendus provident eveniet nobis ullam tenetur ab magnam, delectus laboriosam facere sed labore accusamus debitis.</p>
                    <button>Read More !</button>
                </Content>
            </Wrapper>
        </Background>
     );
}
 
export default Info;