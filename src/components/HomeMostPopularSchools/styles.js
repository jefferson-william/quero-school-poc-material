import { yellow, orange, grey } from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

export const HomeMostPopularSchools = styled.section`
  .home-most-popular-schools {
    &__card {
      & + .home-most-popular-schools__card {
        margin-top: var(--space-medium);
      }
    }
    &__item {
      position: relative;
    }
    &__trophy {
      position: absolute;
      top: 50%;
      left: 0;
      margin: -12px 0 0 var(--space-large);
      &--1 {
        i {
          color: ${yellow['700']};
        }
      }
      &--2 {
        i {
          color: ${orange['700']};
        }
      }
      &--3 {
        i {
          color: ${grey['500']};
        }
      }
    }
  }
  .home-autocomplete {
    margin-bottom: var(--space-jumbo);
  }
  .home-school-info-card {
    padding-bottom: var(--space-large);
  }
`
export const SchoolCard = styled(Paper)``
export const IconTrophyRender = styled.div`
  display: flex;
  span {
    margin-right: var(--space-medium);
    color: var(--color-font-major);
  }
`
