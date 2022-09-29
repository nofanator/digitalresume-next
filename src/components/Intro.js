import React from 'react'
import PropTypes from 'prop-types'

import ProfileImage from '@/common/ProfileImage'
import Section from '@/common/Section'
import FontAwesome from 'react-fontawesome'

import styled from 'styled-components'

import { pageStyles } from '@/common/pageStyles'

const SlimDiv = styled.div`
    display: flex;
    align-items: center;

    > div:first-child {
        margin-right: 20px;
    }
`

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

const introFields = `{
    name
    phone
    email
    summary
    status
    positiveStatus
    backgroundImage {
        url
    }
    profileImage {
        url
    }
}`

const Intro = (props) => {
    const { style, name, summary, status, email, phone, profileImage, backgroundImage } = props

    if (style === pageStyles.horizontal) {
        return (
            <Section backgroundImage={backgroundImage.url} fullbleed skinny style={style}>
                <SlimDiv>
                    <div>
                        <ProfileImage imagePath={profileImage.url} size={'small'} />
                    </div>
                    <div>
                        <h1>{name}</h1>
                        <p>{summary}</p>
                        <DivContact>
                            <FontAwesome name="envelope" />
                            <a href={`mailto:${email}`}>{email}</a>
                        </DivContact>
                        <DivContact>
                            <FontAwesome name="phone" />
                            {phone}
                        </DivContact>
                    </div>
                </SlimDiv>
            </Section>
        )
    }

    return (
        <Section backgroundImage={backgroundImage.url} fullbleed style={style}>
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

Intro.propTypes = {
    style: PropTypes.string.isRequired,
}

Intro.defaultProps = {
    style: pageStyles.normal,
}

export default Intro
export { introFields }
