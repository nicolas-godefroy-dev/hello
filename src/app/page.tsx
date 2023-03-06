
import Balancer from 'react-wrap-balancer'

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <main className="flex flex-col items-center justify-center flex-1 w-full px-5 text-center sm:px-20">
      <h1 className="text-4xl font-bold sm:text-6xl">
        <Balancer>Hello! 👋 I’m Nicolas, a passionate software engineer</Balancer>
      </h1>
      <p className="mt-3 text-xl sm:text-2xl">
        Specialties: TypeScript, React, React Native, Node, Next.js
      </p>
    </main>
    <footer className="flex flex-row items-center justify-center w-full h-24 px-5 border-t">
      <span>
        Available at
      </span>
      <ul className="flex flex-row items-center">
        <li className="ml-2 underline"><a href="https://github.com/nicolas-godefroy-dev">Github</a></li>
        <li className="ml-2 underline"><a href="https://www.linkedin.com/in/nicolas-g-9b9a2b244/">Linkedin</a></li>
      </ul>
    </footer>
  </div>
)


export default Home
