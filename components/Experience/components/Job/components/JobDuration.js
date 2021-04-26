import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Div = styled.div`
    margin-bottom: 6px;
` 

function JobDuration(props) {
    const { start, end } = props
    return (
        <Div>{`${start} - ${end}`}</Div>
    )
}

JobDuration.propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}

export default JobDuration