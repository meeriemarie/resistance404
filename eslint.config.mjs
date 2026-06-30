// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
)
{
  "extends": [
    "eslint:recommended",
    "prettier" // Must be the LAST item in the array
  ]
}
