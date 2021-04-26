import PageTemplate from 'components/PageTemplate'
import ComponentByType from 'components/ComponentByType'
import { getContentfulData } from '../utils/DataHelpers'

import query from '../graphql/index.graphql'

export const getStaticProps = async () => {
    const data = await getContentfulData(query)
    return {
        props: {
            cmsData: data.homePageCollection.items[0],
        },
    }
}

const Home = (props) => {
    const { cmsData } = props
    return (
        <PageTemplate>
            {cmsData.componentsCollection.items.map((c, i) => (
                <ComponentByType key={`component-by-type-${i}`} data={c} />
            ))}
        </PageTemplate>
    )
}

export default Home
