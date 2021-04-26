import React from 'react'
import ProfileImage from './components/ProfileImage'
import Section from 'common/Section'
import FontAwesome from 'react-fontawesome'

import styled from 'styled-components'

const Div = styled.div`
    text-align: center;

    h1 {
        margin-top: 20px;
    }

    p {
        margin-bottom: 0;
    }
`

const DivContact = styled.div`
    white-space: nonwrap;
    margin-bottom: 6px;
    &:last-child {
        margin-bottom: 0;
    }

    a {
        text-transform: lowercase;
    }

    span {
        margin-right: 6px;
    }
`

const DivStatus = styled.div`
    margin: 20px 0;
    color: aqua;
`

function Intro(props) {
    const { name, summary, status, email, phone, profileImage, backgroundImage } = props
    return (
        <Section backgroundImage={backgroundImage.url}>
            <Div>
                <ProfileImage imagePath={profileImage.url} />
                <h1>{name}</h1>
                <p>{summary}</p>
                {status && (
                    <div>
                        <DivStatus>
                            <FontAwesome name="sun" />
                            {status}
                        </DivStatus>
                        <DivContact>
                            <FontAwesome name="envelope" />
                            <a href={`mailto:${email}`}>{email}</a>
                        </DivContact>
                        <DivContact>
                            <FontAwesome name="phone" />
                            {phone}
                        </DivContact>
                    </div>
                )}
            </Div>
        </Section>
    )
}

export default Intro
