import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

export const HeaderContent = styled.div`
  .header-content {
    &__title {
      padding: var(--space-extra-large) 0;
      font-weight: bold;
      text-align: center;
    }
    &__wrap {
      position: relative;
      &-background {
        position: absolute;
        width: 100%;
        height: 50%;
        background: var(--color-blue-700);
        z-index: -1;
      }
    }
  }
`
export const Wrapper = styled(Paper)`
  border-radius: 0;
  color: white;
  background: var(--color-blue-700);
`
