import React from 'react'
import Link from 'next/link'

import { themes } from 'colors'
import Section from 'common/Section'

import PageTemplate from 'components/PageTemplate'
import { Detail } from 'components/Experience'
import About from 'components/About'

import { getContentfulData } from '../../utils/DataHelpers'

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
            cmsData: data.jobCollection.items[0],
            aboutData: data.aboutComponentCollection.items[0],
        },
    }
}

const Job = (props) => {
    const { cmsData, aboutData } = props
    return (
        <PageTemplate>
            <Section themeName={themes.DARK} skinny={true}>
                <BackDiv>
                    <Link href="/">Back</Link>
                    <span>Chris Knopf</span>
                </BackDiv>
            </Section>
            <Detail job={cmsData} />
            <About {...aboutData} />
        </PageTemplate>
    )
}

export default Job
