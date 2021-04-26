import React from 'react'
import Section from 'common/Section'

import { themes } from 'colors'
import styled from 'styled-components'
import HorizontalList from 'common/HorizontalList'

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

function Education(props) {
    const { school, start, end, major, minor } = props

    const list = []
    list.push(`Major: ${major}`)
    list.push(`Minor: ${minor}`)

    return (
        <Section>
            <h2>Education</h2>
            <Split>
                <h3>{ school }</h3>
                <div>{`${start} - ${end}`}</div>
            </Split>
            <HorizontalList listKey="degrees" list={ list } />
        </Section>
    )
}

export default Education