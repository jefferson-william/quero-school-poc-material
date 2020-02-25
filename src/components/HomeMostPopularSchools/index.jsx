import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React, { useState, useCallback } from 'react'
import HomeAutocomplete from '~/components/HomeAutocomplete'
import HomeSchoolInfoCard from '~/components/HomeSchoolInfoCard'
import HomeSearchDialog from '~/components/HomeSearchDialog'
import { HomeMostPopularSchools, SchoolCard, IconTrophyRender } from './styles'

export const DATA = ['São José dos Campos', 'São Paulo', 'Rio de Janeiro']

export const IconTrophy = ({ number, className }) => {
  return (
    <IconTrophyRender className={className}>
      <Typography variant="h5" component="span">
        <strong>{number}</strong>
      </Typography>
      <i className="fa fa-trophy" />
    </IconTrophyRender>
  )
}

export default function() {
  const [data, UseData] = useState('')
  const [toggle, UseToggle] = useState(false)

  const HandleToggle = useCallback(() => {
    const value = !toggle

    UseToggle(value)
  }, [toggle])

  const SetData = useCallback(
    event => {
      UseData(event.target.value)
    },
    [data, toggle]
  )

  return (
    <HomeMostPopularSchools className="home-most-popular-schools">
      <Container maxWidth="lg" className="home-most-popular-schools__container">
        <Typography variant="h5" component="h2">
          <strong>Conheça as escolas mais procuradas no último mês</strong>
        </Typography>
        <HomeAutocomplete
          value={data}
          placeholder="Filtrar ranking"
          icon="fa-trophy"
          handleClick={HandleToggle}
          handleChange={SetData}
          isShowOptions={false}
          isShowInfo={false}
        />
        {[1, 2, 3, 4].map(value => (
          <SchoolCard key={value} className="home-most-popular-schools__card">
            <HomeSchoolInfoCard
              name="Escola Recanto Do Diver"
              type="Rede privada"
              address="Rua Tibério, 265"
              city="Vila Romana"
              state="São Paulo"
              options={['Educação Infantil']}
              left={
                <IconTrophy
                  number={value}
                  className={`home-most-popular-schools__trophy home-most-popular-schools__trophy--${value}`}
                />
              }
              className="home-most-popular-schools__item"
            />
          </SchoolCard>
        ))}
        <HomeSearchDialog open={toggle} onClose={HandleToggle}>
          Hi!
        </HomeSearchDialog>
      </Container>
    </HomeMostPopularSchools>
  )
}
