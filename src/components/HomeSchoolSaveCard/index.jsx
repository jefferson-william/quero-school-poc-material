import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { HomeSchoolSaveCard } from './styles'

export default function({ name, type, address, city, state, options, discount, price }) {
  return (
    <HomeSchoolSaveCard className="home-school-save-card">
      <Link className="home-school-save-card__name" variant="h5">
        <strong>{name}</strong>
      </Link>
      <Typography className="home-school-save-card__type" variant="subtitle1" component="p">
        <strong>{type}</strong>
      </Typography>
      <Typography className="home-school-save-card__address" variant="body2" component="p">
        {address}
      </Typography>
      <div className="home-school-save-card__location">
        <Link className="home-school-save-card__city" variant="body2" component="span">
          <strong>{city}</strong>
        </Link>
        <Link className="home-school-save-card__hifen" variant="body2" component="span">
          <strong>-</strong>
        </Link>
        <Link className="home-school-save-card__state" variant="body2" component="span">
          <strong>{state}</strong>
        </Link>
      </div>
      <div className="home-school-save-card__options">
        {options.map(option => (
          <Link className="home-school-save-card__label" variant="body2" component="span">
            <strong>{option}</strong>
          </Link>
        ))}
      </div>
      <Divider />
      <div className="home-school-save-card__discount">
        <Typography className="home-school-save-card__text" variant="body1" component="span">
          até
        </Typography>
        <Typography className="home-school-save-card__discount-value" variant="h5" component="span">
          <strong>{discount}%</strong>
        </Typography>
        <Typography className="home-school-save-card__text" variant="body1" component="span">
          de desconto
        </Typography>
      </div>
      <div className="home-school-save-card__price">
        <Typography className="home-school-save-card__text" variant="body1" component="p">
          Mensalidades a partir de:
        </Typography>
        <Typography className="home-school-save-card__price-value" variant="h6" component="span">
          <strong>{price}</strong>
        </Typography>
      </div>
      <div className="home-school-save-card__action">
        <Button className="home-school-save-card__button" variant="contained" size="large">
          <strong>Detalhes da escola</strong>
        </Button>
      </div>
    </HomeSchoolSaveCard>
  )
}
