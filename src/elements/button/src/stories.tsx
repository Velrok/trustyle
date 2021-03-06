/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { boolean, number, text } from '@storybook/addon-knobs'
import { colors } from '@uswitch/trustyle.styles'
import { ThemeProvider } from 'theme-ui'

import theme from '../../../utils/theme-selector'
import { Icon } from '../../icon/src'

import { Button } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

storiesOf('Elements|Button', module).addDecorator(Story => {
  return <ThemeProvider theme={theme()}>{Story()}</ThemeProvider>
}).add('primary variant', () => (
  <div css={css({ padding: number('Padding', 10) })}>
    {theme() && Object.keys(theme().buttons).map((key, index) => (
      <React.Fragment key={index}>
        <Button variant={key} disabled={boolean("Disabled", false)}>
          {text(`${key} label`, `${key} button`)}
          {key.match('icon') && <Icon	
            color={colors.cobaltBlue}	
            direction="right"	
            glyph="caret"	
            size={20}	
          />}
        </Button>
        <Spacer />
      </React.Fragment>
    ))}
  </div>
))
