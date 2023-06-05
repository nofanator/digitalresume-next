import React from 'react'
import PropTypes from 'prop-types'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Section from '@/common/Section'
import HorizontalList from '@/common/HorizontalList'

import styled from 'styled-components'
import { pageStyles } from '@/common/pageStyles'

const Div = styled.div`
    text-align: ${(props) => props.textAlign};

    a {
        text-transform: lowercase;
    }
`

const aboutFields = `{
    aboutSummary: summary {
        json
    }
    tech
    repo
}`

const About = (props) => {
    const { aboutSummary, repo, tech, style } = props
    const siteUrl = process.env.NEXT_PUBLIC_SITEURL

    if (style === pageStyles.horizontal) {
        return (
            <Section skinny style={style}>
                <Div textAlign={'left'}>
                    <h2>About this document</h2>
                    <p>
                        This document was generated from the web version of my resume:{' '}
                        <a href={siteUrl}>{siteUrl}</a>
                    </p>
                    <p>
                        Source code: <a href={repo}>{repo}</a>
                    </p>
                    <h3>Tech used</h3>
                    <HorizontalList listKey="tech" list={tech} center={false} />
                    <p></p>
                </Div>
            </Section>
        )
    }

    return (
        <Section style={style}>
            <Div textAlign={'center'}>
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
    style: PropTypes.string.isRequired,
}

About.defaultProps = {
    style: pageStyles.normal,
}

export default About
export { aboutFields }
