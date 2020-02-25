import styled from 'styled-components'

export const HomeSave = styled.section`
  .home-autocomplete {
    margin-bottom: var(--space-jumbo);
  }
  .home-school-save-card {
    & + .home-school-save-card {
      margin-top: var(--space-medium);
    }
  }
`
