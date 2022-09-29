import { educationFields } from '@/components/Education'
import { introFields } from '@/components/Intro'
import { skillsFields } from '@/components/Skills/Skills'
import { jobSummaryFields } from '@/components/Experience/JobSummary'
import { aboutFields } from '@/components/About'

const query = `{
  homePageCollection(limit: 1) {
    total
    items {
      pageTitle
      backgroundImage {
        url
      }
      componentsCollection {
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

fragment jobFields on JobsComponent ${jobSummaryFields}

fragment aboutFields on AboutComponent ${aboutFields}
`

export default query
