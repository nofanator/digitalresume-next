import React from 'react'
import PropTypes from 'prop-types'

import Section from '@/common/Section'
import { palettes } from '@/common/Themes'

import styled from 'styled-components'
import HorizontalList from '@/common/HorizontalList'
import { pageStyles } from '@/common/pageStyles'

const Split = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        margin: 0;
    }

    div {
        margin-left: 10px;
        white-space: nowrap;
    }

    margin-bottom: 12px;
`

const educationFields = `{
    school
    start
    end
    major
    minor
}`

const Education = (props) => {
    const { school, start, end, major, minor, style } = props

    const list = []
    list.push(`Major: ${major}`)
    list.push(`Minor: ${minor}`)

    return (
        <Section palette={palettes.light} skinny={style === pageStyles.horizontal} style={style}>
            <h2>Education</h2>
            <Split>
                <h3>{school}</h3>
                <div>{`${start} - ${end}`}</div>
            </Split>
            <HorizontalList listKey="degrees" list={list} />
        </Section>
    )
}

export default Education

Education.propTypes = {
    style: PropTypes.string.isRequired,
}

Education.defaultProps = {
    style: pageStyles.normal,
}

export { educationFields }
