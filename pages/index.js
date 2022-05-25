import PageTemplate from 'components/PageTemplate'
import ComponentByType from 'components/ComponentByType'
import { getContentfulData } from '../utils/DataHelpers'

import query from '../graphql/index.graphql'

export const getStaticProps = async () => {
    const data = await getContentfulData(query)
    return {
        props: {
            cmsData: data ? data.homePageCollection.items[0] : null,
        },
    }
}

const Home = (props) => {
    const { cmsData } = props

    if (!cmsData) {
        return <div>Couldn't get data from contentful</div>
    }

    return (
        <PageTemplate>
            {cmsData.componentsCollection.items.map((c, i) => (
                <ComponentByType key={`component-by-type-${i}`} data={c} />
            ))}
        </PageTemplate>
    )
}

export default Home
