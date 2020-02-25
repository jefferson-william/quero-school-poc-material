import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import HomeSchoolInfoCard from '~/components/HomeSchoolInfoCard'
import { HomeSchoolSaveCard } from './styles'

export default function({ name, type, address, city, state, options, discount, price }) {
  return (
    <HomeSchoolSaveCard className="home-school-save-card">
      <HomeSchoolInfoCard name={name} type={type} address={address} city={city} state={state} options={options} />
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
