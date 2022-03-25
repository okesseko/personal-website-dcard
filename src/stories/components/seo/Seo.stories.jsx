import React from "react"
import Seo from "./Seo"

export default {
  title: "Components/Seo",
  component: Seo,
}

const Template = args => <Seo {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: "Jimmy personal website",
}
