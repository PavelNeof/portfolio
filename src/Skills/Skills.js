import React from "react";
import s from './Skills.module.css'
import sContainer from "../Common/Styles/Container.module.css";
import Skill from "./Skill/Skill";
import js from "../assets/image/skills/js.png";
import ts from "../assets/image/skills/ts.png";
import react from "../assets/image/skills/react.png";
import redux from "../assets/image/skills/redux.png";
import git from "../assets/image/skills/git.png";
import css from "../assets/image/skills/css.png";
import storybook from "../assets/image/skills/storybook.png";
import restapi from "../assets/image/skills/api.png";
import unitest from "../assets/image/skills/unit-test.png";
import Fade from 'react-reveal/Fade';


function Skills() {

    return (
        <div id={'skills'} className={s.block}>
            <div className={`${s.container}`}>
                <h2 className={"titleOnBlack"}>Skills</h2>
                <div className={s.skills}>
                    <Fade bottom>
                    <Skill title={'JavaScript'} img={js} description={'functional components, class components'}/>


                    <Skill title={'TypeScript'} img={ts} description={'functional components, class components'} />


                    {/*<Skill title={'React'} img={react} description={'Redux, Route, Formik'}/>*/}
                    <Skill title={'React'} img={react} description={'Create SPA application with Redux, React-router-dom, Formik, and other libraries.'}/>


                    {/*<Skill title={'Redux'} img={redux} description={'Redux-Thunk, reducers'}/>*/}
                    <Skill title={'Redux'} img={redux} description={'Interaction with application data using redux (redux-thunk, reducer, etc.)'}/>


                    {/*<Skill title={'Git'} img={git} description={'GitHab, work in a team, git merge'}/>*/}
                    <Skill title={'Git'} img={git} description={'Teamwork on Github, merge projects and deploy on gh.pages'}/>


                    {/*<Skill title={'CSS'} img={css} description={'adaptive layout, SASS, BEM, Tailwind CSS, Material UI'}/>*/}
                    <Skill title={'CSS'} img={css} description={'Creating adaptive layout with CSS and SASS. Understanding BEM. Working with Tailwind CSS, MaterialUI libraries'}/>


                    {/*<Skill title={'Storybook'} img={storybook} description={'Create component'}/>*/}
                    <Skill title={'Storybook'} img={storybook} description={'Creating components in the storybook library'}/>


                    {/*<Skill title={'Rest Api'} img={restapi} description={'Axios, Postman'}/>*/}
                    <Skill title={'Rest Api'} img={restapi} description={'requests to the server using the axios library. Testing requests in Postman'}/>


                    <Skill title={'Unit testing'} img={unitest} description={'Unit testing component'}/>
                        </Fade>

                    {/*<Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. ' +
                        'Pellentesque iaculis accumsan felis. Mauris suscipit dui quis sem venenatis, quis ultricies tellus sagittis. ' +
                        'Pellentesque est velit, hendrerit in tristique vitae, ultrices nec enim.'}/>*/}

                </div>
            </div>
        </div>
    );
}

export default Skills;
