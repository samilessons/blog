import Link from "next/link"

export default function Nav() {
  return (
    <nav className="container mx-auto p-4 flex gap-4">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="blog">Blog</Link>
      </div>
      <div>
        <Link href="contact">Contact</Link>
      </div>
    </nav>
  )
}