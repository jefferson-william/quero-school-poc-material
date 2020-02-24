import { grey } from '@material-ui/core/colors'
import Dialog from '@material-ui/core/Dialog'
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
export const SearchDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    margin: 0;
  }
  .home-search-dialog {
    &__home-autocomplete {
      border-top: 1px solid ${grey.A100};
      border-bottom: 1px solid ${grey.A100};
    }
  }
`
