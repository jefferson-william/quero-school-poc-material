import { grey } from '@material-ui/core/colors'
import styled from 'styled-components'

export const HomeAutocomplete = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  .home-autocomplete {
    &__icon {
      position: absolute;
      top: 50%;
      right: 16px;
      margin-top: -6px;
      font-family: 'Font Awesome Solid Regular', sans-serif;
      font-size: var(--size-icon-medium);
      color: ${grey[600]};
    }
    &__field {
      position: relative;
      width: 100%;
      min-height: 100%;
      padding: 0 var(--space-medium) 0 var(--space-medium);
      border: 0;
      &,
      &::placeholder {
        font-size: 18px;
        color: #333;
      }
    }
  }
  &.home-autocomplete {
    &--first {
      .home-autocomplete__field {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }
  }
  & + .home-autocomplete {
    border-top: 1px solid ${grey[300]};
  }
  > div {
    height: 100%;
  }
  > ul {
    display: none;
  }
`
