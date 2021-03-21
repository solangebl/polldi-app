import Link from 'next/link'

export default function Home() {
  return (
		<>
			<h1>
			Welcome to Polldi
			</h1>
			<Link href="/add"><a>New Poll</a></Link>
		</>
  )
}
