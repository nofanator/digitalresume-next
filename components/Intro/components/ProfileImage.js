import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: inline-block;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    overflow: hidden;

    img {
        width: 200px;
    }
`


function ProfileImage(props) {
    const { imagePath } = props
    
    return (
        <Div>
            <img src={ imagePath } />
        </Div>
    )
}

export default ProfileImage