import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

export const HomeSchoolSaveCard = styled(Paper)`
  text-align: center;
  .home-school-save-card {
    &__price,
    &__discount {
      margin: var(--space-medium) 0;
    }
    &__action {
      padding: 0 var(--space-large) var(--space-large) var(--space-large);
    }
    &__price-value,
    &__discount-value {
      margin: 0 var(--space-extra-small);
      font-weight: bold;
      color: var(--color-support-success-pure);
    }
    &__action {
      margin-top: var(--space-large);
    }
  }
  .MuiButton-contained {
    width: 100%;
    text-transform: none;
    color: white;
    background: var(--color-support-success-pure);
  }
  .MuiDivider-root {
    margin: var(--space-jumbo) 0;
  }
`
