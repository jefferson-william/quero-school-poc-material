import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

export const HeaderContent = styled.header`
  .header-content {
    &__title {
      padding: var(--space-extra-large) 0;
      font-weight: bold;
      text-align: center;
    }
  }
`
export const Wrapper = styled(Paper)`
  border-radius: 0;
  color: white;
  background: var(--color-blue-700);
`
