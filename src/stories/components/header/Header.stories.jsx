import React from "react"
import Header from "./Header"

export default {
  title: "Components/Header",
  component: Header,
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: "search me",
  onSearch: val => {
    console.log(`search val: ${val}`)
  },
}
