import React from 'react';
//styles
import { Background, Content, ProfilePic, Wrapper } from './Info.styles';
//images
import profile from '../../images/profile.jpg'
//Animation
import { motion } from "framer-motion"

const Info = () => {

    return ( 
        <Background initial={{opacity:0 }} animate={{opacity:1}} transition={ {delay: 0.3,duration:0.7} } >
            <Wrapper  initial={{opacity:0, x:'100vw'}} animate={{opacity:1, x:0}} transition={{type: 'tween' , delay:0.5, duration:2 }}>
                <ProfilePic 
                    src={profile}
                    alt='profile picture'
                />
                <Content>
                    <motion.h1 initial={{opacity:0, y:'-50vh'}} animate={{opacity:1, y:0}} transition={{type: 'spring' , delay:2, stiffness: 100}}>Svetlana Jokic: Teaching portfolio</motion.h1> 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum rem necessitatibus ipsa aspernatur perspiciatis quibusdam repellendus provident eveniet nobis ullam tenetur ab magnam, delectus laboriosam facere sed labore accusamus debitis.</p>
                    <motion.button
                        whileHover={{
                            scale: 1.2,
                            color: 'rgb(255, 255, 255)',
                            textShadow: "0px 0px 10px rgb(255, 255, 255)",
                            boxShadow: "0px 0px 8px rgb(237, 181, 191)"
                            
                        }}
                    >Read More !</motion.button>
                </Content>
            </Wrapper>
        </Background>
     );
}
 
export default Info;