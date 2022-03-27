import React from "react"

import Layout from "./Layout"

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
}
