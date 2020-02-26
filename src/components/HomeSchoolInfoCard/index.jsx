import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { HomeSchoolInfoCard } from './styles'

export default function({ name, type, address, city, state, options, left, className }) {
  return (
    <HomeSchoolInfoCard className={`home-school-info-card ${className}`}>
      {left}
      <Link className="home-school-info-card__name" variant="h5">
        <strong>{name}</strong>
      </Link>
      <Typography className="home-school-info-card__type" variant="subtitle1" component="p">
        <strong>{type}</strong>
      </Typography>
      <Typography className="home-school-info-card__address" variant="body2" component="p">
        {address}
      </Typography>
      <div className="home-school-info-card__location">
        <Link className="home-school-info-card__city" variant="body2" component="span">
          <strong>{city}</strong>
        </Link>
        <Link className="home-school-info-card__hifen" variant="body2" component="span">
          <strong>-</strong>
        </Link>
        <Link className="home-school-info-card__state" variant="body2" component="span">
          <strong>{state}</strong>
        </Link>
      </div>
      <div className="home-school-info-card__options">
        {options.map(option => (
          <Link key={option} className="home-school-info-card__label" variant="body2" component="span">
            <strong>{option}</strong>
          </Link>
        ))}
      </div>
    </HomeSchoolInfoCard>
  )
}
