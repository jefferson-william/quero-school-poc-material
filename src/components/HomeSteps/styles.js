import styled from 'styled-components'

export const HomeSteps = styled.section`
  text-align: center;
  ul {
    list-style-type: none;
  }
  li + li {
    margin-top: var(--space-jumbo);
  }
  svg {
    height: 64px;
    margin-bottom: var(--space-large);
  }
`
