// tailwind.config.js
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'


export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: { container: { center: true, padding: '1rem' } },
  plugins: [forms, typography],
}

