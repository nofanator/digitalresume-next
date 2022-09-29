import React from 'react'
import PropTypes from 'prop-types'

import Section from '@/common/Section'
import { palettes } from '@/common/Themes'

import SkillsSection from './SkillsSection'
import { pageStyles } from '@/common/pageStyles'

const skillsFields = `{
    sectionTitle
    skillsCollection {
        items {
        title
        list
        }
    }
}`

const Skills = (props) => {
    const { skills, style } = props
    if (!skills) {
        return null
    }

    if (skills.length <= 0) {
        return null
    }

    return (
        <Section palette={palettes.neutral} skinny={style === pageStyles.horizontal} style={style}>
            <h2>Skills</h2>
            {skills.map((section, i) => (
                <SkillsSection key={`skills-sect-${i}`} section={section} />
            ))}
        </Section>
    )
}

export default Skills

Skills.propTypes = {
    style: PropTypes.string.isRequired,
}

Skills.defaultProps = {
    style: pageStyles.normal,
}

export { skillsFields }
