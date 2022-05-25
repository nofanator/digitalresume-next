import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import JobTitle from './components/JobTitle'
import JobDuration from './components/JobDuration'

import styled from 'styled-components'
import { getTheme } from 'colors'

const Div = styled.div`
    border-bottom: 1px dashed ${(props) => props.borderColor};
    margin: 16px 0;
    padding-bottom: 16px;

    h3 {
        margin: 6px 0 12px !important;
    }

    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`

const LinkContainer = styled.div`
    text-align: right;
`

const Job = (props) => {
    const { job, themeName } = props

    const theme = getTheme(themeName)

    return (
        <Div borderColor={theme.TEXT}>
            <JobDuration start={job.start} end={job.end} />
            <h3>
                <JobTitle employer={job.employer} title={job.title} />
            </h3>
            {documentToReactComponents(job.jobSummary.json)}
            <LinkContainer>
                <Link href={`/job/${job.id}`}>
                    <a className="right">Learn more</a>
                </Link>
            </LinkContainer>
        </Div>
    )
}

Job.propTypes = {
    themeName: PropTypes.string.isRequired,
}

export default Job
