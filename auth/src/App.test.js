import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import renderer from 'react-test-renderer'
import App, { Code } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<App />, div)
    unmountComponentAtNode(div)
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Code', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<Code />, div)
    unmountComponentAtNode(div)
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(<Code />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
