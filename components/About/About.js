import React from 'react'
import PropTypes from 'prop-types'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Section from 'common/Section'
import HorizontalList from 'common/HorizontalList'

import styled from 'styled-components'

const Div = styled.div`
    text-align: center;

    a {
        text-transform: lowercase;
    }
`

function About(props) {
    const { aboutSummary, repo, tech, themeName } = props

    return (
        <Section themeName={themeName}>
            <Div>
                <h2>About this site</h2>
                {documentToReactComponents(aboutSummary.json)}
                <h3>Tech used</h3>
                <HorizontalList listKey="tech" list={tech} center={true} />
                <p>
                    <a href={repo}>{repo}</a>
                </p>
            </Div>
        </Section>
    )
}

About.propTypes = {
    themeName: PropTypes.string,
}

export default About
