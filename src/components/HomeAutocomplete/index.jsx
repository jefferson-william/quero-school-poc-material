import { Typography } from '@material-ui/core'
import useAutocomplete from '@material-ui/lab/useAutocomplete'
import React, { useMemo, useCallback } from 'react'
import shortid from 'shortid'
import { HomeAutocomplete } from './styles'

export default function({
  placeholder,
  className,
  label,
  value,
  icon,
  handleClick,
  handleChange,
  handleClose,
  isShowOptions,
  isShowInfo,
  data,
}) {
  const id = `home-autocomplete-${shortid.generate()}`

  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } = useAutocomplete({
    id,
    options: data || [],
    getOptionLabel: option => option,
  })

  const inputProps = getInputProps()

  const length = useMemo(() => inputProps.value.length, [inputProps.value])

  const OnChange = useCallback(
    event => {
      inputProps.onChange(event)

      handleChange(event)
    },
    [inputProps.value]
  )

  const OnClose = useCallback(
    option => () => {
      const event = { target: { value: option } }
      inputProps.onChange(event)
      handleChange(event)
      handleClose()
    },
    [inputProps.value]
  )

  return (
    <HomeAutocomplete className={`home-autocomplete ${className}`}>
      {label && (
        <Typography variant="body1" component="label" className="home-autocomplete__label">
          <strong>{label}</strong>
        </Typography>
      )}
      <div className="home-autocomplete__wrap" {...getRootProps()}>
        <input
          {...inputProps}
          value={value || inputProps.value}
          className="home-autocomplete__field"
          placeholder={placeholder}
          onClick={handleClick}
          onChange={OnChange}
        />
        <i className={`fa ${icon || 'fa-chevron-down'} home-autocomplete__icon`} />
      </div>
      {isShowInfo && length <= 0 && <span className="home-autocomplete__info">Digite algo para buscar</span>}
      {isShowOptions && groupedOptions.length > 0 && (
        <ul {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li key={option} {...getOptionProps({ option, index })} onClick={OnClose(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </HomeAutocomplete>
  )
}
