import React from 'react'
import Section from 'common/Section'
import { themes } from 'colors'

import styled from 'styled-components'
import { JobDuration, JobTitle, Achievements } from '../components/Job'
import ImageGrid from 'common/ImageGrid'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Div = styled.div`
    h1 {
        margin-top: 0;
    }

    p {
        margin-bottom: 0;
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

function Detail(props) {
    const { job } = props

    const hasPhotos = job.photosCollection.items && job.photosCollection.items.length > 0
    return (
        <div>
            <Section themeName={themes.LIGHT}>
                <Div>
                    <h3>
                        <JobDuration start={job.start} end={job.end} />
                    </h3>
                    <DivTitle>
                        <h1>{job.employer}</h1>
                        <h3>{job.title}</h3>
                    </DivTitle>
                    {documentToReactComponents(job.summary.json)}
                </Div>
            </Section>
            <Section themeName={themes.NEUTRAL}>
                <h3>Achievements</h3>
                <Achievements list={job.achievementsCollection.items} />
            </Section>
            {hasPhotos && (
                <Section themeName={themes.DARK}>
                    <ImageGrid images={job.photosCollection.items} />
                </Section>
            )}
        </div>
    )
}

export default Detail
