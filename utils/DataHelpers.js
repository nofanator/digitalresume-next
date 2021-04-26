const getContentfulData = async (query) => {
    const res = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.contentfulSpaceId}/environments/${process.env.contentfulEnvironment}`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${process.env.contentfulDeliveryApiToken}`,
            },
            body: JSON.stringify({
                query,
            }),
        }
    )

    const jsonResponse = await res.json()
    return jsonResponse.data
}

export { getContentfulData }
