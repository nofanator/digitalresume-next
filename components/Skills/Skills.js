import React from 'react'
import SkillsSection from './components/SkillsSection'
import Section from 'common/Section'
import { themes } from 'colors'

function Skills(props) {

    const { skills } = props
    if (!skills) {
        return null
    }

    if (skills.length <= 0) {
        return null
    }


    return (
        <Section themeName={ themes.NEUTRAL }>
            <h2>Skills</h2>
            {skills.map((section, i) => 
                <SkillsSection 
                    key={`skills-sect-${i}`} 
                    section={ section } 
                />
            )}
        </Section>
    )
}

export default Skills