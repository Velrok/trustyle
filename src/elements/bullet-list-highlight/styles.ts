import { css, SerializedStyles } from '@emotion/core'
import { azure } from '@uswitch/trustyle.styles/colors'
import { pxToRem, spacers } from '@uswitch/trustyle.styles/helpers'
import { text } from '@uswitch/trustyle.styles/typography'

export const highlights: SerializedStyles = css({
  padding: pxToRem(0, spacers.green),
  listStyle: 'none'
})

export const highlightBulletContent: SerializedStyles = css({
  paddingLeft: pxToRem(spacers.green)
})

export const highlightBullet: SerializedStyles = css({
  backgroundColor: azure,
  width: pxToRem(28),
  height: pxToRem(28),
  padding: pxToRem(spacers.pink),
  boxSizing: 'border-box',
  borderRadius: '100%',
  display: 'inline-block',
  marginTop: pxToRem(5)
})

export const highlight: SerializedStyles = css([
  text,
  {
    paddingBottom: pxToRem(spacers.teal),
    display: 'flex'
  }
])
