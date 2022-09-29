import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
    display: inline-block;
    border-radius: 50%;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    overflow: hidden;

    img {
        width: ${(props) => props.size}px;
    }
`

const sizes = {
    small: 'small',
    medium: 'medium',
}

const ProfileImage = (props) => {
    const { imagePath, size } = props

    let pixelSize = 200
    if (size === sizes.small) {
        pixelSize = 160
    }

    return (
        <Div size={pixelSize}>
            <img src={imagePath} />
        </Div>
    )
}

ProfileImage.propTypes = {
    size: PropTypes.oneOf([sizes.small, sizes.medium]),
}

ProfileImage.defaultProps = {
    size: sizes.medium,
}

export default ProfileImage
