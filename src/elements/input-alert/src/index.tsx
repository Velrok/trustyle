/** @jsx jsx */

import React from 'react'
import { css, jsx } from '@emotion/core'

import { alert, notification, root } from './styles'

type Type = 'notification' | 'alert'
export type ErrorMessages = string | { [index: string]: ErrorMessages }

interface Props {
  type: Type
  children: string
}

export const InputAlert: React.FC<Props> = ({ type, children }) => (
  <div
    css={css([
      root,
      type === 'notification' && notification,
      type === 'alert' && alert
    ])}
  >
    {children}
  </div>
)
