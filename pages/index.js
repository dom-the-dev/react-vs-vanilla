import Link from 'next/link'
import Layout from "../components/Layout";
import Image from 'next/image'
import simpleCounter from '../public/simpleCounter.png'


export default function Home() {
	return (
		<Layout title={"Home"} home={true}>
			<main className={"container my-16 min-h-screen"}>
				<div className="grid gap-4 grid-col-1 md:grid-cols-3">

					<Link href="/simple-counter">
						<a className={"no-underline transform transition hover:-translate-y-2"}>
							<div className={"shadow"}>
								<Image
									src={simpleCounter}
									alt="Simple Counter Screenshot"
									placeholder="blur"
								/>

								<div className="p-5">
									<h5 className={"text-xl text-center"}>Simple Counter</h5>
								</div>
							</div>
						</a>
					</Link>
				</div>
			</main>

		</Layout>
	)
}
