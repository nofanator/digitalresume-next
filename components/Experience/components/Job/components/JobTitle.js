import React from 'react' 
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleInner = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        text-align: right;
    }
`

function JobTitle(props) {
    const { employer, title } = props
    return (
        <TitleInner>
            { employer }
            <span>{ title }</span>
        </TitleInner>
    )
}

JobTitle.propTypes = {
    employer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default JobTitle