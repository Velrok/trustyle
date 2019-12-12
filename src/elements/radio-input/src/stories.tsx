/** @jsx jsx */
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { css, jsx } from '@emotion/core'

import { RadioInput } from './.'

const wrapper = css({ padding: number('Padding', 10), 'margin-top': '10px' })

storiesOf('Elements|Radio Input', module).add('example', () => (
  <React.Fragment>
    <div css={wrapper}>
      <RadioInput label='Regular radio input field' name='radio-name' />
    </div>
    <div css={wrapper}>
      <RadioInput label="Large radio input field - you know it's large because of the bigger padding!" name='radio-name' large/>
    </div>
  </React.Fragment>
))
