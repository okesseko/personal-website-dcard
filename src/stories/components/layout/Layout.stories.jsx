import React from "react"
import Layout from "./Layout"
import { CgMenuBoxed } from "react-icons/cg"
import imgTest from "../../../images/img-test.png"

export default {
  title: "Components/Layout",
  component: Layout,
}

const Template = args => (
  <Layout {...args}>
    <div>I am children</div>
  </Layout>
)

export const Default = Template.bind({})
Default.args = {
  asideContent: (
    <div
      style={{
        background: "white",
        height: "18.75rem",
        borderRadius: "0.2rem",
      }}
    >
      I am aside content
    </div>
  ),
  headerProps: {
    placeholder: "search something",
    onSearch: val => {
      console.log(`search val: ${val}`)
    },
  },
  sidebarProps: {
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
  },
}
