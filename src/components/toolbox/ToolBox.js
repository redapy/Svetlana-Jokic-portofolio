import React from 'react';
import { Content, Background } from './ToolBox.styles';

import Navbar from '../navbar/Navbar';
import { Tip } from './ToolBox.styles';

const ToolBox = () => {
    return ( 
        <>
            <Navbar />
            <Background >
                <Content>
                    <Tip>
                        <h3>Toolbox Tip 1</h3>
                        <li><a href="https://docs.google.com/document/d/1HDJVnIf5bDXX6MXEnDsCf-g9wWp2awUf/edit" target='_blank'>Debate</a></li>
                    </Tip>
                    <Tip>
                        <h3>Toolbox Tip 2</h3>
                        <li><a href="https://docs.google.com/document/d/1HDJVnIf5bDXX6MXEnDsCf-g9wWp2awUf/edit" target='_blank'>Geography</a></li>
                    </Tip>
                </Content>
            </Background>
        </>
     );
}
 
export default ToolBox;