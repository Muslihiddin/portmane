import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        background: '#282C33',
        primary: '#C778DD',
        gray: '#ABB2BF',
      }
    },
  },
  plugins: [formsPlugin],
})