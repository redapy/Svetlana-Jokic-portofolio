import React from 'react';
//styles
import { Background, Content, ProfilePic, Wrapper } from './Info.styles';
//images
import profile from '../../images/profile.jpg'
//Animation
import { motion } from "framer-motion"

const Info = () => {

    return ( 
        <Background initial={{opacity:0 }} animate={{opacity:1}} transition={ {duration:0.7} } >
            <Wrapper  initial={{opacity:0.2, x:'300px'}} animate={{opacity:1, x:0}} transition={{type: 'tween' , delay:0.5, duration:1.5 }}>
                <ProfilePic 
                    src={profile}
                    alt='profile picture'
                />
                <Content>
                    <motion.h1 initial={{opacity:0, y:'-50vh'}} animate={{opacity:1, y:0}} transition={{type: 'spring' , delay:1.5, stiffness: 100}}>Svetlana Jokic: Teaching portfolio</motion.h1> 
                    <p>Welcome to my teaching portfolio !! Please take some time to review all my work.</p>
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