import React from "react"
import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: "primary",
  disable: false,
  text: "primary btn",
  onClick: () => {
    console.log("click primary")
  },
}

export const Transparent = Template.bind({})
Transparent.args = {
  color: "transparent",
  disable: false,
  text: "transparent btn",
  onClick: () => {
    console.log("click transparent")
  },
}
