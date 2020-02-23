import useAutocomplete from '@material-ui/lab/useAutocomplete'
import React from 'react'
import { HomeAutocomplete } from './styles'

export const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
]

export default function({ placeholder, className }) {
  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } = useAutocomplete({
    id: `home-autocomplete-${placeholder.trim().toLowerCase()}`,
    options: top100Films,
    getOptionLabel: option => option.title,
  })

  return (
    <HomeAutocomplete className={`home-autocomplete ${className}`}>
      <div className="home-autocomplete__wrap" {...getRootProps()}>
        <input {...getInputProps()} className="home-autocomplete__field" placeholder={placeholder} />
        <i className="fa fa-chevron-down home-autocomplete__icon" />
      </div>
      {groupedOptions.length > 0 ? (
        <ul {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.title}</li>
          ))}
        </ul>
      ) : null}
    </HomeAutocomplete>
  )
}
