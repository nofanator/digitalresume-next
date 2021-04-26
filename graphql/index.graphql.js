const query = `{
  homePageCollection(limit: 1) {
    total
    items {
      pageTitle
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

fragment introFields on Intro {
  name
  phone
  email
  summary
  status
  positiveStatus
  backgroundImage {
    url
  }
  profileImage {
    url
  }
}

fragment educationFields on EducationComponent {
  school
  start
  end
  major
  minor
}

fragment skillsFields on Skills {
  sectionTitle
  skillsCollection {
    items {
      title
      list
    }
  }
}

fragment jobFields on JobsComponent {
  sectionTitle
  jobsCollection {
    items {
      id
      employer
      start
      end
      title
      jobSummary: summary {
        json
      }
    }
  }
}

fragment aboutFields on AboutComponent {
  aboutSummary: summary {
    json
  }
  tech
  repo
}`

export default query
