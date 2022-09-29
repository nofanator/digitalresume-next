import React from 'react'
import PropTypes from 'prop-types'

import About from './About'
import Education from './Education'
import Experience from './Experience/Experience'
import Intro from './Intro'
import Skills from './Skills/Skills'
import DetailedExperience from './Experience/DetailedExperience'

import { pageStyles } from '@/common/pageStyles'

const ComponentByType = (props) => {
    const { pageStyle, data } = props

    if (data.__typename === 'Intro') {
        return <Intro {...data} style={pageStyle} />
    }

    if (data.__typename === 'EducationComponent') {
        return <Education {...data} style={pageStyle} />
    }

    if (data.__typename === 'Skills') {
        return <Skills skills={data.skillsCollection.items} style={pageStyle} />
    }

    if (data.__typename === 'JobsComponent') {
        let jobComponent = <Experience experience={data.jobsCollection.items} style={pageStyle} />
        if (pageStyle === pageStyles.horizontal) {
            jobComponent = (
                <DetailedExperience experience={data.jobsCollection.items} style={pageStyle} />
            )
        }
        return jobComponent
    }

    if (data.__typename === 'AboutComponent') {
        return <About {...data} style={pageStyle} />
    }
}

ComponentByType.propTypes = {
    pageStyle: PropTypes.oneOf([pageStyles.normal, pageStyles.horizontal]),
}

ComponentByType.defaultProps = {
    pageStyle: pageStyles.normal,
}

export default ComponentByType
