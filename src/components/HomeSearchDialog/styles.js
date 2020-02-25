import { grey } from '@material-ui/core/colors'
import Dialog from '@material-ui/core/Dialog'
import styled from 'styled-components'

export const HomeSearchDialog = styled(Dialog)`
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
