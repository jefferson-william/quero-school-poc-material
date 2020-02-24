import useAutocomplete from '@material-ui/lab/useAutocomplete'
import React, { useState, useMemo, useCallback } from 'react'
import shortid from 'shortid'
import { HomeAutocomplete } from './styles'

export default function({ placeholder, className, icon, onClick, handleChange, isShowOptions, data }) {
  const id = `home-autocomplete-${shortid.generate()}`
  const [value, UseValue] = useState('')

  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } = useAutocomplete({
    id,
    options: data || [],
    getOptionLabel: option => option,
  })

  const length = useMemo(() => value && value.length, [value])

  const OnChange = useCallback(event => {
    handleChange(event)
    UseValue(event.target.value)
  }, [])

  return (
    <HomeAutocomplete className={`home-autocomplete ${className}`}>
      <div className="home-autocomplete__wrap" {...getRootProps()}>
        <input
          {...getInputProps()}
          value={value}
          className="home-autocomplete__field"
          placeholder={placeholder}
          onClick={onClick}
          onChange={OnChange}
        />
        <i className={`fa ${icon || 'fa-chevron-down'} home-autocomplete__icon`} />
      </div>
      {length <= 0 && <span className="home-autocomplete__info">Digite algo para buscar</span>}
      {isShowOptions && groupedOptions.length > 0 && (
        <ul {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option}</li>
          ))}
        </ul>
      )}
    </HomeAutocomplete>
  )
}
