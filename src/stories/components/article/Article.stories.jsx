import React from "react"
import Article from "./Article"
import imgTest from "@Images/img-test.png"

export default {
  title: "Components/Article",
  component: Article,
}

const Template = args => (
  <div style={{ background: "white" }}>
    <Article {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  article: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n
   ![image1](https://pic1.zhimg.com/v2-81a06ae54177e4beccf4fd9c20f267a8_b.jpg) ![image2](https://pic1.zhimg.com/v2-81a06ae54177e4beccf4fd9c20f267a8_b.jpg)
  Lorem Ipsum is simply dummy [google link](https://google.com)  Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
  `,
  authImg: imgTest,
  category: { text: "category", path: "/category" },
  emotionIcon: "🤣🥰🤩",
  emotionNumber: 1,
  releaseTime: "2020/01/01",
  title: "Title",
  topic: [
    { text: "topic1", path: "/topic1" },
    { text: "topic2", path: "/topic2" },
  ],
}
