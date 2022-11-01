import React from 'react'
import { Header } from './Header'

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Header {...args} />

export const changeBackground = Template.bind({}) //creating a copy of template


