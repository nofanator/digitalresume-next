import React, { useContext } from 'react'
import styled from 'styled-components'

import Achievements from '@/common/Achievements'
import JobDuration from '@/common/JobDuration'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Div = styled.div`
    border-bottom: 1px dashed;
    padding: 16px 0 4px 0;

    h1 {
        margin-top: 0;
    }

    h3 {
        margin-bottom: 0;
    }

    p {
        margin-bottom: 0;
    }

    &:last-child {
        border-bottom: 0;
    }
`

const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h1,
    h2,
    h3 {
        display: inline-block;
        margin: 0;
    }
`

const DivAchieemvents = styled.div`
    margin: 16px 0 12px;
`

const Job = (props) => {
    const { job } = props

    return (
        <Div>
            <h3>
                <JobDuration start={job.start} end={job.end} />
            </h3>
            <DivTitle>
                <h1>{job.employer}</h1>
                <h3>{job.title}</h3>
            </DivTitle>
            {documentToReactComponents(job.summary.json)}
            <DivAchieemvents>
                <Achievements list={job.achievementsCollection.items} />
            </DivAchieemvents>
        </Div>
    )
}

export default Job
