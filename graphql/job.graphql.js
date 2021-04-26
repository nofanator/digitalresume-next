const getQuery = (id) => {
    return `{
        jobCollection(limit: 1, where: {id: "${id}"}) {
          items {
            id
            start
            end
            employer
            title
            summary {
              json
            }
            achievementsCollection {
              items {
                achievement
              }
            }
            photosCollection {
              items {
                url
              }
            }
          }
        }
        aboutComponentCollection(limit: 1) {
          items {
            ... aboutFields
          }
        }
      }
      
      fragment aboutFields on AboutComponent {
        aboutSummary: summary {
          json
        }
        tech
        repo
      }
    `
}

export default getQuery
