import Layout from "../components/Layout";
import simpleCounter from '../public/simpleCounter.png'
import ProjectCard from "../components/ProjectCard";


export default function Home() {
	return (
		<Layout title={"Home"} headline={"React VS Vanilla"} home={true} card={"react-vs-vanilla"}>
			<main className={"container my-16 min-h-screen px-2"}>
				<div className={"text-center my-5"}>
				<h2>Projects</h2>
				</div>
				<div className="grid gap-4 grid-col-1 md:grid-cols-3">
					<ProjectCard
						thumbnail={simpleCounter}
						title={"Simple Counter"}
						link={"/simple-counter"}
					/>
				</div>
			</main>

		</Layout>
	)
}
