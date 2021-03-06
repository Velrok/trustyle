import { css } from '@emotion/core'
import { colors, helpers, pxToRem, typography } from '@uswitch/trustyle.styles'

export const label = (slim: boolean) =>
  css({
    marginBottom: pxToRem(slim ? 16 : 8),
    width: '100%',
    '&:nth-last-of-type(1)': {
      marginBottom: 0
    }
  })

const svgSafeAzure = colors.azure.replace('#', '%23')

export const input = (slim: boolean) =>
  css({
    marginLeft: '-1000px',
    appearance: 'none',
    position: 'absolute',
    '&:checked + span': {
      color: colors.black,
      ...(!slim && {
        border: `1px solid ${colors.azure}`,
        boxShadow: helpers.insetBorder(colors.azure)
      }),
      '&::before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="${svgSafeAzure}" viewBox="-1 -2 14 12"><path d="M9.603 1L11 2.507 4.681 9 1 4.898l1.453-1.446L4.74 5.999z" /></svg>')`,
        backgroundColor: colors.white,
        borderColor: colors.azure,
        boxShadow: helpers.insetBorder(colors.azure)
      }
    }
  })

export const span = (slim: boolean) =>
  css([
    typography.label,
    {
      color: colors.slateGrey,
      cursor: 'pointer',
      display: 'flex',
      fontWeight: 'normal',
      ...(!slim && {
        borderRadius: 3,
        border: `1px solid ${colors.lightGreyBlue}`,
        padding: pxToRem(13, 16),
        transition: 'background-color 200ms, border-color 200ms'
      }),
      '&:before': {
        borderColor: colors.lightGreyBlue,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        content: '" "',
        display: 'block',
        height: 16,
        margin: pxToRem(2, 16, 2, 0),
        width: 16,
        flexGrow: 0,
        flexShrink: 0
      }
    }
  ])
