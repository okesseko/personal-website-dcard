import React from "react"
import SidebarItem from "./SidebarItem"
import { CgMenuBoxed } from "react-icons/cg"
import { FaFire } from "react-icons/fa"


export default {
  title: "Components/SidebarItem",
  component: SidebarItem,
}

const Template = args => <SidebarItem {...args} />

export const Menu = Template.bind({})
Menu.args = {
  IconComponent: CgMenuBoxed,
  text: "I am item",
}

export const Fire = Template.bind({})
Fire.args = {
  IconComponent: FaFire,
  text: "I am item",
}