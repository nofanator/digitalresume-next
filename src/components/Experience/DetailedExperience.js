import React from 'react'
import styled from 'styled-components'

import { palettes } from '@/common/Themes'
import Section from '@/common/Section'
import Job from './Job'

const H2 = styled.h2`
    margin-bottom: 0;
`

const DetailedExperience = (props) => {
    const { experience } = props

    return (
        <Section palette={palettes.dark} skinny>
            <H2>Experience</H2>
            {experience.map((job, i) => (
                <Job key={`job-${i}`} job={job} />
            ))}
        </Section>
    )
}

export default DetailedExperience
