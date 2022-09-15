import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout.components";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<Layout>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<title>AKG | Homepage</title>
				<meta
					name="description"
					content="Hey👋! I am Aditya Krishna Gupta, final year undergraduate student at BITS Pilani, pursuing EEE. Checkout my website to know more!"
				/>
				<meta property="og:title" content="AKG | Homepage" />
				<meta
					property="og:description"
					content="Hey👋! I am Aditya Krishna Gupta, final year undergraduate student at BITS Pilani, pursuing EEE. Checkout my website to know more!"
				/>
				<meta property="og:image" content="/logo.webp" />
				<meta property="og:image" content="https://shimy.in/logo.webp" />
				<link rel="icon" type="image/png" href="/logo.ico" />
				<link rel="icon" type="image/png" href="https://shimy.in/logo.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.image_container}>
					<Image
						priority
						src="/aditya.webp"
						alt="AKG"
						width={100}
						height={100}
						className={styles.my_image}
					/>
				</div>
				<div className={styles.text_container}>
					<h1 className={styles.name}>Hi 👋, I&apos;m Aditya Krishna</h1>
					<div className={styles.title_container}>
						<p className={styles.title}>Tech Magician (Engineer/Designer)</p>
					</div>

					<section className={styles.section}>
						<h2 className={styles.heading}>About</h2>
						<p className={styles.text}>
							I am a final year engineering undergrad at{" "}
							<strong className={styles.profession}>BITS Pilani, Goa</strong>. I
							love to learn new technologies, build things and solve problems.
							<br />
							My stack includes{" "}
							<strong className={styles.profession}>
								TypeScript, Next.js, Node.js, AWS.
							</strong>
						</p>
						<div className={styles.work_buttons}>
							<Link href="/cv">
								<a target="_blank" rel="noopener noreferrer">
									<div className={styles.work_button}>
										<p>My CV</p>
									</div>
								</a>
							</Link>
							<Link href="/blog">
								<a target="_blank" rel="noopener noreferrer">
									<div className={styles.work_button}>
										<p>Blog</p>
									</div>
								</a>
							</Link>
						</div>
					</section>
					<section className={styles.section}>
						<h2 className={styles.heading}>Let&apos;s Connect</h2>
						<div className={styles.contact_container}>
							<Link href="/mail">
								<a target="_blank" rel="noopener noreferrer">
									<div className={styles.contact_crumb}>Mail</div>
								</a>
							</Link>
							<Link href="/meet">
								<a target="_blank" rel="noopener noreferrer">
									<div className={styles.contact_crumb}>Schedule Meet</div>
								</a>
							</Link>
							<Link href="/linkedin">
								<a target="_blank" rel="noopener noreferrer">
									<div className={styles.contact_crumb}>Linkedin</div>
								</a>
							</Link>
							<Link href="/twitter">
								<a target="_blank" rel="noopener noreferrer">
									<div className={styles.contact_crumb}>Twitter</div>
								</a>
							</Link>
							<Link href="/github">
								<a target="_blank" rel="noopener noreferrer">
									<div className={styles.contact_crumb}>Github</div>
								</a>
							</Link>
						</div>
					</section>
				</div>
			</main>
		</Layout>
	);
}
