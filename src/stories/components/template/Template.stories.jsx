import React from "react"

import imgTest from "@Images/img-test.png"
import Template from "./Template"

export default {
  title: "Components/Template",
  component: Template,
}

const Template = args => <Template {...args} />

export const Primary = Template.bind({})
Primary.args = {
  authImg: imgTest,
  articleImg: imgTest,
  category: "test",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  emotionIcon: "🤣🥰🤩",
  emotionNumber: 1,
  releaseTime: "2020/01/01",
  title: "Title",
  onClick: () => {
    console.log("article click")
  },
}
