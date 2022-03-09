import "!style-loader!css-loader!../src/style.css"
import "!style-loader!css-loader!../src/normalize.css"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
}

export const decorators = [
  Story => (
    <>
      <Story />
    </>
  ),
]