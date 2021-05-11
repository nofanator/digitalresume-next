import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { themes } from 'colors'
import Section from 'common/Section'

import PageTemplate from 'components/PageTemplate'

import styled from 'styled-components'

const BackDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Fun = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <PageTemplate>
            <Section themeName={themes.DARK} skinny={true}>
                <BackDiv>
                    <Link href="/">Back</Link>
                    <span>Chris Knopf</span>
                </BackDiv>
            </Section>
            {`Fun page ${id}`}
        </PageTemplate>
    )
}

export default Fun
