import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
`
const Li = styled.li`
    display: flex;
    align-items: center;
`

const Sep = styled.span`
    display: inline-block;
    margin: 0 6px;
    font-size: 1.4em;
    font-weight: bold;
    line-height: 1rem;

    &:first-child {
        margin-left: 0;
    }
`


function HorizontalList(props) {
    const { listKey, list, center } = props

    if (list.length <= 0) {
        return null
    }

    return (
        <Ul center={ center }>
            {list.map((item, i) => 
                <Li key={`${listKey}-item-${i}`}>
                    <Sep>&bull;</Sep>
                    { item }
                </Li>
            )}
        </Ul>
        
    )
}

HorizontalList.propTypes = {
    listKey: PropTypes.string.isRequired,
    list: PropTypes.array,
    center: PropTypes.bool,
}

HorizontalList.defaultProps = {
    list: [],
    center: false,
}

export default HorizontalList