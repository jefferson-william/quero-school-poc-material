import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

export const HomeSearch = styled.form`
  .home-search {
    &__action {
      width: 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      padding: var(--space-large) 0;
      color: white;
      background: var(--color-support-success-pure);
    }
    &__action-text {
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
`
export const Wrapper = styled(Paper)`
  background: white;
`
