
export default function Footer() {
  return (
    <footer className="flex flex-wrap md:justify-between justify-center md:spacey-0 space-y-2 my-12 ">
      <ul className="flex flex-wrap gap-4">
        <li><a className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  " href="#">Home</a></li>
        <li><a className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  " href="#">Articles</a></li>
        <li><a className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  " href="#">Projects</a></li>
        <li><a className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  " href="#">Speaking</a></li>
        <li><a className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  " href="#">Contact</a></li>
      </ul>

      <p className="text-subtitle">&copy; 2024 fares sonar. All rights reserved</p>
    </footer>
  )
}
