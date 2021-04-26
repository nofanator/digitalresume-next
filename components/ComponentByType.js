import React, { Component } from 'react'

import About from './About'
import Education from './Education'
import Experience from './Experience'
import Intro from './Intro'
import Skills from './Skills'

const ComponentByType = (props) => {
    const { data } = props

    if (data.__typename === 'Intro') {
        return <Intro {...data} />
    }

    if (data.__typename === 'EducationComponent') {
        return <Education {...data} />
    }

    if (data.__typename === 'Skills') {
        return <Skills skills={data.skillsCollection.items} />
    }

    if (data.__typename === 'JobsComponent') {
        return <Experience experience={data.jobsCollection.items} />
    }

    if (data.__typename === 'AboutComponent') {
        return <About {...data} />
    }
}

export default ComponentByType
