
import React from 'react'
import { MultiActionAreaCard } from "./cards"



export default {
  title: 'Component/MultiActionAreaCard',
  component: MultiActionAreaCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <MultiActionAreaCard {...args} />

export const changecolor = Template.bind({}) //creating a copy of template

