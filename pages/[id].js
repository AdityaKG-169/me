import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout.components";

const SocialPage = () => {
	const [showError, setShowError] = useState(false);

	const router = useRouter();
	let socialType = router.query.id;

	useEffect(() => {
		switch (socialType) {
			case "mail":
				window.location.href = "mailto:adityakrishnaoff@gmail.com";
				break;
			case "meet":
				window.location.href = "https://calendly.com/shimyhq/chat";
				break;
			case "linkedin":
				window.location.href = "https://linkedin.com/in/adityakrishnagupta";
				break;
			case "twitter":
				window.location.href = "https://twitter.com/adityakrishnag_";
				break;
			case "github":
				window.location.href = "https://github.com/adityakg-169";
				break;
			case "blog":
				alert("Blog coming soon!");
				window.location.href = "https://www.shimy.in";
				break;
			case "cv":
				window.location.href =
					"https://drive.google.com/file/d/18rptdf9rB3oVh3aYRaZG_XbgC-xuINd6/view?usp=sharing";
				break;
			default:
				setShowError(() => true);
				break;
		}
	}, [socialType]);

	return showError ? <Layout></Layout> : <Layout></Layout>;
};

export default SocialPage;
