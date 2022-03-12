import React, { useState } from "react"
import Menu from "./Menu"
import Button from "../button/Button"

export default {
  title: "Components/Menu",
  component: Menu,
}

const Template = args => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div style={{ padding: "20px" }}>
      <Button text="click me" onClick={() => setOpenMenu(true)} />
      {openMenu && <Menu {...args} closeMenu={() => setOpenMenu(false)} />}
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  triangleRight: "120px",
  selectedItem: "item1",
  items: [
    {
      text: "item1",
      value: "item1",
    },
    {
      text: "item2",
      value: "item2",
    },
  ],
  onClick: item => {
    console.log(item)
  },
}
