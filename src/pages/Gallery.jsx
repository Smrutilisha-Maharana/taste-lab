import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExpandAlt, FaInstagram, FaTimes } from "react-icons/fa";

import Navbar from "../components/Navbar";
import "../styles/Gallery.css";

const galleryImages = [
	{
		id: 1,
		title: "A table worth gathering around",
		category: "Interiors",
		image:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
		alt: "Warm restaurant dining room with tables ready for guests",
	},
	{
		id: 2,
		title: "Fresh from the kitchen",
		category: "Dishes",
		image:
			"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
		alt: "Fresh pasta with greens served on a ceramic plate",
	},
	{
		id: 3,
		title: "The first bite says it all",
		category: "Dishes",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxSv76_3d4__bXrCFLvkIdkPVCuFVB0q3pSsvkLJSaQ&s=10",
		alt: "Gourmet burger layered with fresh ingredients",
	},
	{
		id: 4,
		title: "An evening at The Taste Lab",
		category: "Interiors",
		image:
			"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
		alt: "Restaurant table set for an intimate dinner",
	},
	{
		id: 5,
		title: "Golden, crisp, and made to share",
		category: "Dishes",
		image:
			"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85",
		alt: "Freshly baked pizza topped with herbs and cheese",
	},
	{
		id: 6,
		title: "Good food, better company",
		category: "Moments",
		image:
			"https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85",
		alt: "Friends sharing a meal around a restaurant table",
	},
	{
		id: 7,
		title: "A little something sweet",
		category: "Dishes",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkX7R8wX9FTIlCFi9fFHtej6NPF4vSCQ70ptOZJE2dRK0NopOJpfUa-Sc&s=10",
		alt: "A plated dessert finished with fresh ingredients",
	},
	{
		id: 8,
		title: "Settle in and stay awhile",
		category: "Interiors",
		image:
			"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
		alt: "Inviting restaurant interior with a long dining counter",
	},
	{
		id: 9,
		title: "Made with care, served with joy",
		category: "Moments",
		image:
			"https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85",
		alt: "Chef preparing a dish in a busy restaurant kitchen",
	},
];

const categories = ["All", "Dishes", "Interiors", "Moments"];

function Gallery() {
	const [activeCategory, setActiveCategory] = useState("All");
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		if (!selectedImage) return undefined;

		const closeOnEscape = (event) => {
			if (event.key === "Escape") setSelectedImage(null);
		};

		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, [selectedImage]);

	const visibleImages =
		activeCategory === "All"
			? galleryImages
			: galleryImages.filter((image) => image.category === activeCategory);

	return (
		<main className="taste-gallery">
			<Navbar />

			<section className="gallery-intro">
				<div className="gallery-intro-copy">
					<span className="gallery-eyebrow">
						<span className="gallery-eyebrow-line"></span>
						A LOOK INSIDE THE TASTE LAB
					</span>
					<h1>
						Gathered here.
						<br />
						<span>Remembered forever.</span>
					</h1>
					<p>
						From the first plate to the last toast, take a look at the food,
						spaces, and moments that make a visit feel like yours.
					</p>
				</div>
				<Link to="/reservation" className="gallery-reserve-link">
					Find your seat <FaArrowRight />
				</Link>
			</section>

			<section className="gallery-content" aria-label="Restaurant photo gallery">
				<div className="gallery-toolbar">
					<p>
						<strong>{String(visibleImages.length).padStart(2, "0")}</strong>{" "}
						moments in the collection
					</p>
					<div className="gallery-filters" aria-label="Filter gallery photos">
						{categories.map((category) => (
							<button
								type="button"
								key={category}
								className={
									activeCategory === category ? "gallery-filter active" : "gallery-filter"
								}
								aria-pressed={activeCategory === category}
								onClick={() => setActiveCategory(category)}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				<div className="gallery-grid">
					{visibleImages.map((item, index) => (
						<button
							type="button"
							className={`gallery-tile gallery-tile-${index % 6}`}
							key={item.id}
							onClick={() => setSelectedImage(item)}
							aria-label={`View photo: ${item.title}`}
						>
							<img src={item.image} alt={item.alt} loading="lazy" />
							<span className="gallery-tile-shade"></span>
							<span className="gallery-tile-caption">
								<span>
									<small>{item.category}</small>
									<strong>{item.title}</strong>
								</span>
								<FaExpandAlt aria-hidden="true" />
							</span>
						</button>
					))}
				</div>
			</section>

			<section className="gallery-follow">
				<div className="gallery-follow-icon">
					<FaInstagram />
				</div>
				<div>
					<span>MORE FROM OUR TABLE</span>
					<h2>Follow along for the latest.</h2>
				</div>
				<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
					Find us on Instagram <FaArrowRight />
				</a>
			</section>

			{selectedImage && (
				<div
					className="gallery-lightbox-backdrop"
					role="presentation"
					onClick={() => setSelectedImage(null)}
				>
					<section
						className="gallery-lightbox"
						role="dialog"
						aria-modal="true"
						aria-label={selectedImage.title}
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							className="gallery-lightbox-close"
							onClick={() => setSelectedImage(null)}
							aria-label="Close image viewer"
						>
							<FaTimes />
						</button>
						<img src={selectedImage.image} alt={selectedImage.alt} />
						<div className="gallery-lightbox-caption">
							<span>{selectedImage.category}</span>
							<h2>{selectedImage.title}</h2>
						</div>
					</section>
				</div>
			)}
		</main>
	);
}

export default Gallery;
