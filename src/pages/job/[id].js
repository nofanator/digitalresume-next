import React from 'react'
import Link from 'next/link'

import { palettes } from '@/common/Themes'
import Section from '@/common/Section'

import PageTemplate from '@/components/PageTemplate'
import JobDetail from '@/components/JobDetail'
import About from '@/components/About'

import { getContentfulData } from '../../../utils/DataHelpers'

import styled from 'styled-components'

const BackDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

import patshQuery from '../../graphql/jobpaths.graphql'
import getQuery from '../../graphql/job.graphql'

export const getStaticPaths = async () => {
    const data = await getContentfulData(patshQuery)
    const paths = []

    data.jobCollection.items.map((i) => paths.push({ params: i }))

    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const { id } = params
    const data = await getContentfulData(getQuery(id))

    return {
        props: {
            jobData: data.jobCollection.items[0],
            aboutData: data.aboutComponentCollection.items[0],
        },
    }
}

const Job = (props) => {
    const { jobData, aboutData } = props
    return (
        <PageTemplate>
            <Section palette={palettes.dark} skinny={true}>
                <BackDiv>
                    <Link href="/">Back</Link>
                    <span>Chris Knopf</span>
                </BackDiv>
            </Section>
            <JobDetail job={jobData} />
            <About {...aboutData} />
        </PageTemplate>
    )
}

export default Job
