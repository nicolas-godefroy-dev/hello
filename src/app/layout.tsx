import '../styles/globals.css'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <head>
      <title>Nicolas Godefroy</title>
    </head>
    <body>
      {children}
    </body>
  </html>
)


export default Layout