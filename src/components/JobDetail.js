import React, { useContext } from 'react'
import styled from 'styled-components'

import { palettes } from '@/common/Themes'
import Section from '@/common/Section'

import Achievements from '@/common/Achievements'
import JobDuration from '@/common/JobDuration'
import ImageGrid from '@/common/ImageGrid'

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

const jobDetailFields = `{
    sectionTitle
    jobsCollection {
        items {
            id
            start
            end
            employer
            title
            jobSummary: summary {
                json
            }
            achievementsCollection(limit: 10) {
                items {
                    achievement
                }
            }
            photosCollection(limit: 10) {
                items {
                    url
                }
            }
        }
    }
}`

const JobDetail = (props) => {
    const { job } = props

    const hasPhotos =
        job.photosCollection && job.photosCollection.items && job.photosCollection.items.length > 0

    return (
        <div>
            <Section palette={palettes.light}>
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
            <Section palette={palettes.neutral}>
                <h3>Achievements</h3>
                <Achievements list={job.achievementsCollection.items} />
            </Section>
            {hasPhotos && (
                <Section palette={palettes.dark}>
                    <ImageGrid images={job.photosCollection.items} />
                </Section>
            )}
        </div>
    )
}

export default JobDetail
export { jobDetailFields }
