import React from 'react'
import { Global } from '@emotion/core'
import { global } from '../src/styles/global'
import { addDecorator, configure, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /stories\.tsx$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

const withGlobal = story => (
  <React.Fragment>
    <Global styles={global} />
    {story()}
  </React.Fragment>
)

addDecorator(withGlobal)
addDecorator(withA11y)
addDecorator(withKnobs)

const newViewports = {
  iPhone: {
    name: 'iPhone', // iPhone 6/7/8 dimensions
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '95%',
      height: '95%'
    }
  }
}

addParameters({
  viewport: {
    viewports: newViewports,
    defaultViewport: 'iPhone'
  },
  options: {
    name: 'Energy Journey Storybook',
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: true,
    isToolshown: true,
    addonPanelInRight: true,
    sortStoriesByKind: true,
    hierarchyRootSeparator: '|',
    hierarchySeparator: /\/|\./
  }
})

configure(loadStories, module)