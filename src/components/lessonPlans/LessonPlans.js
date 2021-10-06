import React from 'react';
//compnents
import Navbar from '../navbar/Navbar';
//styles
import { Content, Flex, List, Logo, Wrapper } from './LessonPlans.styles';
//Images
import Logoimg from '../../images/lesson-plan-logo.jpg'


const LessonPlans = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Content>
                    <Flex>
                        <Logo src={Logoimg} />
                        <h3>Lesson PLans</h3>
                    </Flex>
                    <List>
                        <li><a href="https://docs.google.com/document/d/1d7GURxczRjvXuX3IZh4x6JgPAAHnPhmk/edit?rtpof=true" target="_blank">Edited Reading/Writing Lesson Plan with Technology </a></li>
                        <li><a href="https://docs.google.com/document/d/1szm0tKSekaxn-cWQOel2LElxMawamyp5/edit?rtpof=true" target="_blank">Technology-Enriched Reading/Writing Lesson Plan </a></li>
                        <li><a href="https://docs.google.com/document/d/1KsXoFfE4gwyKqfz2qA4LPyhXC9ZhA0Mx/edit" target="_blank">Edited Listening/Speaking Lesson Plan with Technology</a></li>
                        <li><a href="https://docs.google.com/document/d/1yyiYxVmmWNWZKsxQ03piUA05Qd9UOIgm/edit?rtpof=true" target="_blank">Technology-Enriched Listening/Speaking Lesson Plan</a></li>
                        <li><a href="https://docs.google.com/document/d/1AXX3S9ouvfCr_czvutFkiMMiZKgrYoqs/edit " target="_blank">Grammar Lesson Plan</a></li>
                        <li><a href="https://docs.google.com/document/d/1PE9iuXqKecDjYN2QMbofpGsm2WZaujb8/edit" target="_blank">Pronunciation Lesson Plan</a></li>
                        <li><a href="https://docs.google.com/document/d/1CJxQjYL7Ba4jruhbtkmF2bkjD4v4QlNi/edit" target="_blank">Capstone 1 Lesson Plan  Micro-lesson</a></li>
                        <li><a href="https://docs.google.com/document/d/1dz6EULqIqwM2AAqaprkVk2xoq6L3oyxJ/edit?usp=sharing&ouid=117204858719934608213&rtpof=true&sd=true" target="_blank">Original Reading/Writing/Grammar Lesson Plan</a></li>
                        <li><a href="https://docs.google.com/document/d/1gbSDdI7S9U2VXaJM5nGmbScRosmBIW9I/edit" target="_blank">Original Listening/Speaking/Pronunciation Lesson Plan</a></li>
                        <li><a href="https://docs.google.com/document/d/13bbFhlJZAL_x306sqzutvZcSsQl57XwD/edit" target="_blank">Technology-Enriched Lesson Plan</a></li>
                    </List>
                </Content>
                <Content>
                    <Flex>
                        <Logo src={Logoimg} />
                        <h3>Micro lessons</h3>
                    </Flex>
                    <List>
                        <li><a href="https://youtu.be/ZyJEW6ZbuGY" target="_blank">Edited Reading/Writing Lesson Plan with Technology </a></li>
                        <li><a href="https://www.youtube.com/watch?v=c7RReha9_bE&t=9s" target="_blank">Technology-Enriched Reading/Writing Lesson Plan </a></li>
                        <li><a href="https://youtu.be/T4ZID8_x4kU" target="_blank">Edited Listening/Speaking Lesson Plan with Technology</a></li>
                        <li><a href="https://youtu.be/mu86mYiL9Bs" target="_blank">Technology-Enriched Listening/Speaking Lesson Plan</a></li>
                        <li><a href="https://youtu.be/fhLI5NGE4U8" target="_blank">Grammar Lesson Plan</a></li>
                        <li><a href="https://youtu.be/xoiwyYFvbzo" target="_blank">Pronunciation Lesson Plan</a></li>
                        <li><a href="https://youtu.be/cfm8F6BqZ-E" target="_blank">Capstone 1 Lesson Plan  Micro-lesson</a></li>
                        <li><a href="https://www.youtube.com/watch?v=0U1H_K0A38w" target="_blank">Original Reading/Writing/Grammar Lesson Plan</a></li>
                        <li><a href="https://www.youtube.com/watch?v=06NdA9NoFDQ&t=190s" target="_blank">Original Listening/Speaking/Pronunciation Lesson Plan</a></li>
                        <li><a href="https://www.youtube.com/watch?v=ptqihNQsV2I&t=2s" target="_blank">Technology-Enriched Lesson Plan</a></li>
                    </List>
                </Content>
            </Wrapper>
        </>
    );
}
 
export default LessonPlans;