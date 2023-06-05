import PageTemplate from '@/components/PageTemplate'
import ComponentByType from '@/components/ComponentByType'
import { getContentfulData } from '../../utils/DataHelpers'
import { pageStyles } from '@/common/pageStyles'

import { getTheme, themes } from '@/common/Themes'

import query from '../graphql/jobs.graphql'

export const getStaticProps = async () => {
    const data = await getContentfulData(query)
    return {
        props: {
            cmsData: data ? data.homePageCollection.items[0] : null,
        },
    }
}

const Print = (props) => {
    const { cmsData } = props

    if (!cmsData) {
        return <div>Couldn't get data from contentful</div>
    }

    return (
        <PageTemplate defaultTheme={getTheme(themes.light)} showThemeSwitcher={false}>
            {cmsData.componentsCollection.items.map((c, i) => (
                <ComponentByType
                    key={`component-by-type-${i}`}
                    pageStyle={pageStyles.horizontal}
                    data={c}
                />
            ))}
        </PageTemplate>
    )
}

export default Print
