import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

export const Menu = styled.nav`
  .MuiTypography-colorPrimary,
  .MuiPaper-root,
  .menu__icon {
    color: white;
  }
  .MuiPaper-root {
    background: var(--color-primary);
  }
  .MuiExpansionPanelSummary-root {
    padding: 0 var(--space-medium);
    &.Mui-expanded {
      min-height: auto;
    }
  }
  .MuiExpansionPanelDetails-root {
    flex-direction: column;
    padding: var(--space-medium);
  }
  .MuiExpansionPanelSummary-content {
    &.Mui-expanded {
      margin: calc(var(--space-small) + var(--space-extra-small)) 0;
    }
    > p {
      flex: 1;
    }
  }
  .menu {
    &__wrapper,
    &__container {
      padding: 0;
    }
    &__icon {
      margin-top: var(--space-extra-small);
    }
    &__link {
      display: block;
      width: 100%;
      padding: var(--space-small) 0;
    }
  }
`
export const Wrapper = styled(Paper)`
  padding: var(--space-small) 0;
  &.menu__wrapper {
    border-radius: 0;
  }
`
export const MenuTextArea = styled.div`
  display: flex;
  .fa {
    margin-left: var(--space-small);
    font-size: var(--size-font-small);
  }
`
