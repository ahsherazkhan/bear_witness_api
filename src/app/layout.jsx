import '../styles/tailwind.css'
import '../styles/index.css'

export const metadata = {
  title: 'Bear Witness AI',
  description: 'Web site created using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbearwitne4257back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.5"></script>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
      </body>
    </html>
  )
} 