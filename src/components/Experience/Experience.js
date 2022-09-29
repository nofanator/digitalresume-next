import React, { useContext } from 'react'
import JobSummary from './JobSummary'
import Section from '@/common/Section'
import { palettes } from '@/common/Themes'

const Experience = (props) => {
    const { experience, style } = props

    return (
        <Section palette={palettes.dark} style={style}>
            <h2>Experience</h2>
            {experience.map((job, i) => (
                <JobSummary key={`job-${i}`} job={job} />
            ))}
        </Section>
    )
}

export default Experience
