import { grey } from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

export const HomeSchoolSaveCard = styled(Paper)`
  text-align: center;
  .home-school-save-card {
    &__name {
      display: inline-block;
      margin: var(--space-large) 0 var(--space-medium);
    }
    &__city,
    &__options,
    &__label,
    &__discount-value,
    &__address,
    &__type {
      margin: var(--space-extra-small) 0;
    }
    &__location {
      margin-top: var(--space-small);
    }
    &__options,
    &__price,
    &__discount {
      margin: var(--space-medium) 0;
    }
    &__hifen {
      margin: 0 var(--space-small);
    }
    &__label {
      border-radius: 4px;
      padding: var(--space-small);
      color: var(--color-support-success-pure);
      background: ${grey['200']};
    }
    &__city {
      & + .home-school-save-card__city {
        display: inline-block;
        margin: 0 var(--space-medium);
        content: '-';
      }
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
