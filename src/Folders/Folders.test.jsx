import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import renderer from 'react-test-renderer'
import Folders from './Folders'

describe('Folders', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<Folders />, div)
    unmountComponentAtNode(div)
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(<Folders />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
