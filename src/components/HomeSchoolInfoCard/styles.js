import { grey } from '@material-ui/core/colors'
import styled from 'styled-components'

export const HomeSchoolInfoCard = styled.div`
  text-align: center;
  .home-school-info-card {
    &__name {
      display: inline-block;
      margin: var(--space-large) 0 var(--space-medium);
    }
    &__city,
    &__options,
    &__label,
    &__address,
    &__type {
      margin: var(--space-extra-small) 0;
    }
    &__location {
      margin-top: var(--space-small);
    }
    &__options {
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
  }
`
