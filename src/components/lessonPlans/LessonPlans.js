import React from 'react';
//compnents
import Navbar from '../navbar/Navbar';
//styles
import { Content, Flex, List, Logo, Wrapper } from './LessonPlans.styles';
//Images
import Logoimg from '../../images/lesson-plan-logo.png'
import Logomicro from '../../images/micro-lesson-logo.png'
//Animation
import { motion } from 'framer-motion';



const LessonPlans = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Content initial={{x:'-300px', opacity:0}} animate={{x:0, opacity:1}} transition={{type:'tween', duration:0.7}}>
                    <Flex initial={{y:'-30vh', opacity:0}} animate={{y:0, opacity:1}} transition={{type: 'spring', delay:0.7}}>
                        <Logo src={Logoimg} />
                        <h3>Lesson PLans</h3>
                    </Flex>
                    <List>
                        {lessons.map(lesson => (
                            <motion.li 
                                key={lesson.id}
                                whileHover={{scale: 1.2, originX: 0, color:'var(--darkblue)'}}
                                transition= {{type: 'spring', stiffness: 400}}
                            >
                                <motion.a 
                                    whileHover={{color:'var(--darkblue)', textShadow: '0px 0px 0px rgb(237, 181, 191)'}}
                                    href={lesson.link}
                                    target="_blank"
                                    rel="noreferrer">{lesson.title}
                                </motion.a>
                            </motion.li>
                        ))}
                    </List>
                </Content>
                <Content initial={{x:'300px', opacity:0}} animate={{x:0, opacity:1}} transition={{type:'tween', duration:0.7}}>
                    <Flex initial={{y:'-30vh', opacity:0}} animate={{y:0, opacity:1}} transition={{type: 'spring', delay:0.7}}>
                        <Logo src={Logomicro} />
                        <h3>Micro lessons</h3>
                    </Flex>
                    <List>
                        {lessons.map(lesson => (
                            <motion.li 
                                key={lesson.id}
                                whileHover={{scale: 1.2, originX: 0, color:'var(--darkblue)'}}
                                transition= {{type: 'spring', stiffness: 400}}
                            >
                                <motion.a 
                                    whileHover={{color:'var(--darkblue)', textShadow: '0px 0px 0px rgb(237, 181, 191)'}}
                                    href=""
                                    target="_blank"
                                    rel="noreferrer">{lesson.title}
                                </motion.a>
                            </motion.li>
                        ))}
                    </List>
                </Content>
            </Wrapper>
        </>
    );
}
 
export default LessonPlans;

const lessons = [
    {
        title: 'Edited Reading/Writing Lesson Plan with Technology ',
        link: "https://docs.google.com/document/d/1d7GURxczRjvXuX3IZh4x6JgPAAHnPhmk/edit?rtpof=true",
        video: 'https://youtu.be/ZyJEW6ZbuGY',
        id:1
    },
     {
        title: 'Technology-Enriched Reading/Writing Lesson Plan',
        link: 'https://docs.google.com/document/d/1szm0tKSekaxn-cWQOel2LElxMawamyp5/edit?rtpof=true',
        video: 'https://www.youtube.com/watch?v=c7RReha9_bE&t=9s',
        id:2
    },
     {
        title: 'Edited Listening/Speaking Lesson Plan with Technology ',
        link: 'https://docs.google.com/document/d/1KsXoFfE4gwyKqfz2qA4LPyhXC9ZhA0Mx/edit',
        video: 'https://youtu.be/T4ZID8_x4kU',
        id:4
    },
    {
        title: 'Technology-Enriched Listening/Speaking Lesson Plan ',
        link: 'https://docs.google.com/document/d/1yyiYxVmmWNWZKsxQ03piUA05Qd9UOIgm/edit?rtpof=true',
        video: 'https://youtu.be/mu86mYiL9Bs',
        id:5
    },
    {
        title: 'Grammar Lesson Plan ',
        link: 'https://docs.google.com/document/d/1AXX3S9ouvfCr_czvutFkiMMiZKgrYoqs/edit',
        video: 'https://youtu.be/fhLI5NGE4U8',
        id:6
    },
    {
        title: 'Pronunciation Lesson Plan',
        link: 'https://docs.google.com/document/d/1PE9iuXqKecDjYN2QMbofpGsm2WZaujb8/edit',
        video: 'https://youtu.be/xoiwyYFvbzo',
        id: 7
    },
    {
        title: 'Capstone 1 Lesson Plan  Micro-lesson',
        link: 'https://docs.google.com/document/d/1CJxQjYL7Ba4jruhbtkmF2bkjD4v4QlNi/edit',
        video: 'https://youtu.be/cfm8F6BqZ-E',
        id: 8
    },
    {
        title: 'Original Reading/Writing/Grammar Lesson Plan  ',
        link: 'https://docs.google.com/document/d/1dz6EULqIqwM2AAqaprkVk2xoq6L3oyxJ/edit?usp=sharing&ouid=117204858719934608213&rtpof=true&sd=true',
        video: 'https://www.youtube.com/watch?v=0U1H_K0A38w',
        id:9
    },
    {
        title: 'Original Listening/Speaking/Pronunciation Lesson Plan',
        link: 'https://docs.google.com/document/d/1gbSDdI7S9U2VXaJM5nGmbScRosmBIW9I/edit',
        video: 'https://www.youtube.com/watch?v=06NdA9NoFDQ&t=190s',
        id:10
    },
    {
        title: 'Technology-Enriched Lesson Plan',
        link: 'https://docs.google.com/document/d/13bbFhlJZAL_x306sqzutvZcSsQl57XwD/edit',
        video: 'https://www.youtube.com/watch?v=ptqihNQsV2I&t=2s',
        id:11
    },
]