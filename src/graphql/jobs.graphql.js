import { educationFields } from '@/components/Education'
import { introFields } from '@/components/Intro'
import { skillsFields } from '@/components/Skills/Skills'
import { aboutFields } from '@/components/About'

const jobDetailFields = `{
  sectionTitle
  jobsCollection(limit: 10) {
      items {
          id
          start
          end
          employer
          title
          summary {
              json
          }
          achievementsCollection(limit: 10) {
              items {
                  achievement
              }
          }
      }
  }
}`

const query = `{
  homePageCollection(limit: 1) {
    total
    items {
      pageTitle
      backgroundImage {
        url
      }
      componentsCollection(limit: 10) {
        items {
          __typename
          ... on Intro {
            ...introFields
          }
          ... on EducationComponent {
            ...educationFields
          }
          ... on Skills {
            ...skillsFields
          }
          ... on JobsComponent {
            ...jobFields
          }
          ... on AboutComponent {
            ...aboutFields
          }
        }
      }
    }
  }
}

fragment introFields on Intro ${introFields}

fragment educationFields on EducationComponent ${educationFields}

fragment skillsFields on Skills ${skillsFields}

fragment jobFields on JobsComponent ${jobDetailFields}

fragment aboutFields on AboutComponent ${aboutFields}
`

export default query
