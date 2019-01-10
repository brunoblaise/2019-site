import React from 'react'
import styled from 'styled-components'
import { Container, theme } from '@hackclub/design-system'
import { sponsors } from 'data'

const Base = styled(Container)`
  display: grid;
  grid-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  align-items: center;
  justify-content: center;
  img {
    max-width: 75%;
    max-height: 5rem;
  }
`

const Sponsors = props => (
  <Base {...props}>
    {sponsors.map(sponsor => (
      <a href={`${sponsor.link}`}>
        <img
          alt={sponsor.name}
          src={`/sponsors/${sponsor.image}`}
          key={sponsor.image}
        />
      </a>
    ))}
  </Base>
)

export default Sponsors
