import { css } from '@emotion/core'
import {
  colors,
  inputs,
  pxToRem,
  spacers,
  typography
} from '@uswitch/trustyle.styles'

export const icon = css({
  width: '15px',
  pointerEvents: 'none',
  position: 'absolute',
  right: pxToRem(16),
  top: 'calc(50% - 15px / 2)'
})

export const root = (hasError: boolean, hasFocus: boolean) =>
  css([
    typography.input,
    {
      appearance: 'none',
      backgroundColor: colors.white,
      border: `solid 1px ${colors.lightGreyBlue}`,
      borderRadius: '3px',
      boxSizing: 'border-box',
      color: colors.black,
      outline: 'none', // rm Chrome mobile default focus
      padding: pxToRem(16, spacers.orange, 16, 16),
      verticalAlign: 'middle',
      width: '100%',
      '&:-moz-focusring': {
        color: 'transparent',
        textShadow: `0 0 0 ${colors.black}`
      }
    },
    inputs.emphasis(hasError, hasFocus)
  ])

export const container = css({
  position: 'relative'
})
