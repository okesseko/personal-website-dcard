import React from "react"
import { CgMenuBoxed } from "react-icons/cg"
import { FaFire } from "react-icons/fa"

import imgTest from "@Images/img-test.png"
import SidebarItem from "./SidebarItem"

export default {
  title: "Components/SidebarItem",
  component: SidebarItem,
}

const Template = args => <SidebarItem {...args} />

export const Menu = Template.bind({})
Menu.args = {
  IconComponent: CgMenuBoxed,
  text: "I am item",
  value: "item1",
}

export const Fire = Template.bind({})
Fire.args = {
  IconComponent: FaFire,
  text: "I am item",
  value: "item1",
}

export const Image = Template.bind({})
Image.args = {
  imageUrl: imgTest,
  text: "I am item",
  type: "image",
  value: "item1",
}
