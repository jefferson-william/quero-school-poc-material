import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const Header = styled.header`
  background: white;
  .header {
    &__container {
      justify-content: center;
      display: flex;
      > div:first-child {
        flex: 1;
      }
    }
    &__logo {
      max-width: 136px;
    }
  }
  @media (min-width: ${breakpoints.md}) {
    .header {
      &__logo {
        max-width: 182px;
      }
    }
  }
`
export const Wrapper = styled(Paper)`
  padding: var(--space-medium) 0;
`
