import { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaArrowRight,
	FaCheckCircle,
	FaClock,
	FaEnvelope,
	FaMapMarkerAlt,
	FaUtensils,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import "../styles/Contact.css";

function Contact() {
	const [messagePrepared, setMessagePrepared] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const subject = encodeURIComponent(`Website inquiry: ${formData.get("topic")}`);
		const body = encodeURIComponent(
			[
				`Name: ${formData.get("name")}`,
				`Email: ${formData.get("email")}`,
				"",
				formData.get("message"),
			].join("\n"),
		);

		window.location.href = `mailto:reservations@the-tastelab.com?subject=${subject}&body=${body}`;
		setMessagePrepared(true);
	};

	return (
		<main className="taste-contact">
			<Navbar />

			<section className="contact-hero">
				<div className="contact-hero-copy">
					<span className="contact-eyebrow">
						<span className="contact-eyebrow-line"></span>
						COME SAY HELLO
					</span>
					<h1>
						We would love
						<br />
						<span>to hear from you.</span>
					</h1>
					<p>
						Have a question, a kind word, or an idea for your next visit? Send
						our team a note and we will be glad to hear it.
					</p>
				</div>
				<div className="contact-hero-image">
					<img
						src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85"
						alt="Welcoming restaurant dining room ready for guests"
						fetchPriority="high"
					/>
					<span>There is always room at the table.</span>
				</div>
			</section>

			<section className="contact-main" aria-label="Contact The Taste Lab">
				<div className="contact-info">
					<div className="contact-section-heading">
						<span>THE DETAILS</span>
						<h2>Let’s make it easy.</h2>
					</div>

					<a
						className="contact-info-row"
						href="mailto:reservations@the-tastelab.com"
					>
						<span className="contact-info-icon">
							<FaEnvelope />
						</span>
						<span>
							<small>EMAIL OUR TEAM</small>
							<strong>reservations@the-tastelab.com</strong>
						</span>
						<FaArrowRight className="contact-info-arrow" />
					</a>

					<div className="contact-info-row">
						<span className="contact-info-icon">
							<FaClock />
						</span>
						<span>
							<small>PLANNING A VISIT?</small>
							<strong>Send us your preferred date and time</strong>
						</span>
					</div>

					<div className="contact-info-row">
						<span className="contact-info-icon">
							<FaMapMarkerAlt />
						</span>
						<span>
							<small>FIND YOUR TABLE</small>
							<strong>Get in touch for location details</strong>
						</span>
					</div>

					<div className="contact-side-note">
						<FaUtensils />
						<p>
							Looking to book a table? Share your plans on our{" "}
							<Link to="/reservation">reservation page</Link>.
						</p>
					</div>
				</div>

				<div className="contact-form-panel">
					<div className="contact-section-heading">
						<span>YOUR NOTE</span>
						<h2>Send us a message.</h2>
					</div>

					{messagePrepared && (
						<div className="contact-notice" role="status">
							<FaCheckCircle />
							<span>
								Your email draft should be ready. Send it from your email app
								to reach our team.
							</span>
						</div>
					)}

					<form className="contact-form" onSubmit={handleSubmit}>
						<label className="contact-field">
							<span>Your name</span>
							<input
								name="name"
								type="text"
								autoComplete="name"
								placeholder="Name"
								required
							/>
						</label>

						<label className="contact-field">
							<span>Email address</span>
							<input
								name="email"
								type="email"
								autoComplete="email"
								placeholder="you@example.com"
								required
							/>
						</label>

						<label className="contact-field">
							<span>What is this about?</span>
							<select name="topic" defaultValue="General question">
								<option>General question</option>
								<option>Reservation</option>
								<option>Feedback</option>
								<option>Something else</option>
							</select>
						</label>

						<label className="contact-field">
							<span>Your message</span>
							<textarea
								name="message"
								rows="5"
								placeholder="Tell us what’s on your mind..."
								required
							/>
						</label>

						<button type="submit" className="contact-submit">
							Prepare email <FaArrowRight />
						</button>
					</form>
					<p className="contact-form-footnote">
						This opens your email app with your message ready to send.
					</p>
				</div>
			</section>

			<section className="contact-map-section" aria-labelledby="contact-map-heading">
				<div className="contact-map-heading">
					<div>
						<span>AROUND THE NEIGHBORHOOD</span>
						<h2 id="contact-map-heading">Find The Taste Lab</h2>
						<p>
							This map searches for The Taste Lab restaurant. Contact our team to
							confirm the exact address before your visit.
						</p>
					</div>
					<a
						href="https://www.google.com/maps/search/?api=1&query=The%20Taste%20Lab%20restaurant"
						target="_blank"
						rel="noreferrer"
					>
						Open map <FaArrowRight />
					</a>
				</div>
				<div className="contact-map-frame">
					<iframe
						title="Google Maps search for The Taste Lab restaurant"
						src="https://maps.google.com/maps?q=The%20Taste%20Lab%20restaurant&output=embed"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						allowFullScreen
					></iframe>
				</div>
			</section>

			<section className="contact-bottom-cta">
				<div>
					<span>YOUR NEXT FAVORITE MEAL IS WAITING</span>
					<h2>Make a day of it.</h2>
				</div>
				<Link to="/menu">
					Browse the menu <FaArrowRight />
				</Link>
			</section>
		</main>
	);
}

export default Contact;
