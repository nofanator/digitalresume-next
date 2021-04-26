import React from 'react'
import styled from 'styled-components'
import HorizontalList from 'common/HorizontalList'

const Div = styled.div`
    margin-bottom: 12px;
`

function SkillsSection(props) {
    const { section } = props
    const { list } = section
    return (
        <Div>
            <h3>{ section.title }</h3>
            <HorizontalList listKey="skill" list={ list } />
        </Div>
    )
}

export default SkillsSection