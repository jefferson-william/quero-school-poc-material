import Typography from '@material-ui/core/Typography'
import React from 'react'
import { ReactComponent as IconComputer } from '~/assets/images/computer.svg'
import { ReactComponent as IconEnvelope } from '~/assets/images/envelope.svg'
import { ReactComponent as IconSuccess } from '~/assets/images/success.svg'
import { HomeSteps } from './styles'

export default function() {
  return (
    <HomeSteps className="home-steps">
      <Typography variant="h5" component="h2">
        <strong>Garantir sua bolsa é simples e rápido</strong>
      </Typography>
      <ul>
        <li>
          <IconComputer />
          <Typography variant="body1">Busque e selecione a bolsa de estudos ideal para você em nosso site.</Typography>
        </li>
        <li>
          <IconEnvelope />
          <Typography variant="body1">
            Solicite a reserva da bolsa e receba a fatura de pré-matrícula em seu e-mail.
          </Typography>
        </li>
        <li>
          <IconSuccess />
          <Typography variant="body1">Após a confirmação do pagamento, sua bolsa será efetivada.</Typography>
        </li>
      </ul>
    </HomeSteps>
  )
}
