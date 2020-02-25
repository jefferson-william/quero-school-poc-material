import styled from 'styled-components'

export const HomeSave = styled.section`
  .home-save {
    &__action {
      display: block;
      margin-top: var(--space-jumbo);
      text-align: center;
    }
  }
  .home-autocomplete {
    margin-bottom: var(--space-jumbo);
  }
  .home-school-save-card {
    & + .home-school-save-card {
      margin-top: var(--space-medium);
    }
  }
`
