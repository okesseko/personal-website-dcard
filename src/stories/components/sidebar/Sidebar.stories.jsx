import React from "react"
import Sidebar from "./Sidebar"
import { CgMenuBoxed } from "react-icons/cg"
import imgTest from "../../../images/img-test.png"

export default {
  title: "Components/Sidebar",
  component: Sidebar,
}

const Template = args => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  fixedItems: [
    { IconComponent: CgMenuBoxed, text: "I am fixed items" },
    { IconComponent: CgMenuBoxed, text: "I am fixed items" },
    { IconComponent: CgMenuBoxed, text: "I am fixed items" },
    { IconComponent: CgMenuBoxed, text: "I am fixed items" },
  ],
  topicItems: [
    { type: "title", text: "I am title" },
    { type: "image", imageUrl: imgTest, text: "I am topic item" },
    { type: "image", imageUrl: imgTest, text: "I am topic item" },
    { type: "image", imageUrl: imgTest, text: "I am topic item" },
    { type: "image", imageUrl: imgTest, text: "I am topic item" },
    { type: "image", imageUrl: imgTest, text: "I am topic item" },
    { type: "image", imageUrl: imgTest, text: "I am topic item" },
    { type: "image", imageUrl: imgTest, text: "I am topic item" },
    { type: "image", imageUrl: imgTest, text: "I am topic item" },
  ],
}
