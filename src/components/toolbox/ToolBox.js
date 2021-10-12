import React from 'react';
//animation
import { motion } from 'framer-motion';
//styles
import { Content, Background, Tip  } from './ToolBox.styles';
//compononets
import Navbar from '../navbar/Navbar';


const ToolBox = () => {
    return ( 
        <>
            <Navbar />
            <Background >
                <Content initial={{opacity:0.5, y:'-100vh'}} animate={{opacity:1, y:0}} transition={{type: 'spring' ,stiffness:100, duration:1}}>
                    <Tip>
                        <h3>Toolbox Tip 1</h3>
                        <li><a href="https://docs.google.com/document/d/1HDJVnIf5bDXX6MXEnDsCf-g9wWp2awUf/edit" target='_blank' rel="noreferrer">Debate</a></li>
                    </Tip>
                    <Tip>
                        <h3>Toolbox Tip 2</h3>
                        <li><a href="https://docs.google.com/document/d/1bulRaIJRzBWzDyU6EaCUQp9dDhm5oYnr/edit" target='_blank' rel="noreferrer">Geography</a></li>
                    </Tip>
                </Content>
            </Background>
        </>
     );
}
 
export default ToolBox;