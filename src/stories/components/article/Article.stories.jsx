import React from "react"
import Article from "./Article"
import imgTest from "../../../images/img-test.png"

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
   ![image1](https://tplighting.hk/wp-content/uploads/2020/10/test1.jpg) ![image2](https://tplighting.hk/wp-content/uploads/2020/10/test1.jpg)
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
