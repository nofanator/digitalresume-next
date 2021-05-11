const getContentfulData = async (query) => {
    const res = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFULSPACEID}/environments/${process.env.CONTENTFULENVIRONMENT}`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${process.env.CONTENTFULDELIVERYAPITOKEN}`,
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
