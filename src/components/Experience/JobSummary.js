import React, { useContext } from 'react'
import Link from 'next/link'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import styled from 'styled-components'

import { ThemeContext } from '@/common/Themes'
import JobTitle from '@/common/JobTitle'
import JobDuration from '@/common/JobDuration'

const Div = styled.div`
    border-bottom: 1px dashed;
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

const jobSummaryFields = `{
    sectionTitle
    jobsCollection {
        items {
            id
            employer
            start
            end
            title
            jobSummary: summary {
                json
            }
        }
    }
}`

const JobSummary = (props) => {
    const { job } = props

    return (
        <Div>
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

export default JobSummary
export { jobSummaryFields }
