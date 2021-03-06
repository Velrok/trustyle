/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  current: number
  max: number
}

export const ProgressBar: React.FC<Props> = ({ current, max }) => (
  <progress css={st.progress} value={current + 1} max={max + 1} />
)
