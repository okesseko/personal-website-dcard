import React from "react"
import { CgMenuBoxed } from "react-icons/cg"

import imgTest from "@Images/img-test.png"
import Sidebar from "./Sidebar"

export default {
  title: "Components/Sidebar",
  component: Sidebar,
}

const Template = args => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  fixedItems: [
    { IconComponent: CgMenuBoxed, text: "I am fixed items", value: "fixed1" },
    { IconComponent: CgMenuBoxed, text: "I am fixed items", value: "fixed2" },
    { IconComponent: CgMenuBoxed, text: "I am fixed items", value: "fixed3" },
    { IconComponent: CgMenuBoxed, text: "I am fixed items", value: "fixed4" },
  ],
  topicItems: [
    { type: "title", text: "I am title" },
    {
      type: "image",
      imageUrl: imgTest,
      text: "I am topic item",
      value: "topic1",
    },
    {
      type: "image",
      imageUrl: imgTest,
      text: "I am topic item",
      value: "topic2",
    },
    {
      type: "image",
      imageUrl: imgTest,
      text: "I am topic item",
      value: "topic3",
    },
    {
      type: "image",
      imageUrl: imgTest,
      text: "I am topic item",
      value: "topic4",
    },
    {
      type: "image",
      imageUrl: imgTest,
      text: "I am topic item",
      value: "topic5",
    },
    {
      type: "image",
      imageUrl: imgTest,
      text: "I am topic item",
      value: "topic6",
    },
    {
      type: "image",
      imageUrl: imgTest,
      text: "I am topic item",
      value: "topic7",
    },
    {
      type: "image",
      imageUrl: imgTest,
      text: "I am topic item",
      value: "topic8",
    },
  ],
}
