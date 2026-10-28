import { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaArrowLeft,
	FaArrowRight,
	FaCalendarAlt,
	FaCheckCircle,
	FaClock,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaUtensils,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import "../styles/Reservation.css";

function getTodayDate() {
	const date = new Date();
	const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
	return localDate.toISOString().slice(0, 10);
}

function Reservation() {
	const [requestPrepared, setRequestPrepared] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const details = [
			`Name: ${formData.get("name")}`,
			`Email: ${formData.get("email")}`,
			`Phone: ${formData.get("phone")}`,
			`Date: ${formData.get("date")}`,
			`Time: ${formData.get("time")}`,
			`Guests: ${formData.get("guests")}`,
			`Notes: ${formData.get("notes") || "None"}`,
		].join("\n");

		const subject = encodeURIComponent("Table reservation request");
		const body = encodeURIComponent(details);
		window.location.href = `mailto:reservations@the-tastelab.com?subject=${subject}&body=${body}`;
		setRequestPrepared(true);
	};

	return (
		<main className="reservation-page">
			<Navbar />

			<section className="reservation-shell">
				<div className="reservation-copy">
					<Link to="/" className="reservation-back-link">
						<FaArrowLeft /> Back to home
					</Link>

					<span className="reservation-kicker">
						<span className="reservation-kicker-line"></span>
						GATHER AROUND THE TABLE
					</span>

					<h1>
						Make room for
						<br />
						<span>something special.</span>
					</h1>

					<p className="reservation-intro">
						Tell us when you are coming and we will help make your next meal
						one to remember.
					</p>

					<div className="reservation-photo">
						<img
							src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
							alt="Warmly lit dining room set for guests"
							fetchPriority="high"
						/>
						<div className="reservation-photo-caption">
							<span className="reservation-photo-icon">
								<FaUtensils />
							</span>
							<span>
								<strong>The Taste Lab</strong>
								<small>Good food, better company.</small>
							</span>
						</div>
					</div>

					<div className="reservation-details">
						<div>
							<FaClock />
							<span>
								<strong>Every day</strong>
								<small>10:00 AM – 10:00 PM</small>
							</span>
						</div>
						<div>
							<FaMapMarkerAlt />
							<span>
								<strong>Come on in</strong>
								<small>Contact us for directions</small>
							</span>
						</div>
					</div>
				</div>

				<div className="reservation-form-panel">
					<div className="reservation-form-heading">
						<span className="reservation-form-icon">
							<FaCalendarAlt />
						</span>
						<div>
							<p>PLAN YOUR VISIT</p>
							<h2>Request a table</h2>
						</div>
					</div>

					{requestPrepared && (
						<div className="reservation-notice" role="status">
							<FaCheckCircle />
							<span>
								Your email draft should be ready. Send it from your email app
								to complete your request.
							</span>
						</div>
					)}

					<form className="reservation-form" onSubmit={handleSubmit}>
						<label className="reservation-field reservation-field-wide">
							<span>Your name</span>
							<input
								type="text"
								name="name"
								autoComplete="name"
								placeholder="e.g. Alex Morgan"
								required
							/>
						</label>

						<label className="reservation-field">
							<span>Email address</span>
							<input
								type="email"
								name="email"
								autoComplete="email"
								placeholder="you@example.com"
								required
							/>
						</label>

						<label className="reservation-field">
							<span>Phone number</span>
							<input
								type="tel"
								name="phone"
								autoComplete="tel"
								placeholder="Your contact number"
								required
							/>
						</label>

						<label className="reservation-field">
							<span>Date</span>
							<input type="date" name="date" min={getTodayDate()} required />
						</label>

						<label className="reservation-field">
							<span>Time</span>
							<input type="time" name="time" min="12:00" max="22:00" required />
						</label>

						<label className="reservation-field reservation-field-wide">
							<span>Number of guests</span>
							<select name="guests" defaultValue="2" required>
								{Array.from({ length: 12 }, (_, index) => index + 1).map(
									(count) => (
										<option value={count} key={count}>
											{count} {count === 1 ? "guest" : "guests"}
										</option>
									),
								)}
							</select>
						</label>

						<label className="reservation-field reservation-field-wide">
							<span>Special requests <small>Optional</small></span>
							<textarea
								name="notes"
								rows="3"
								placeholder="A high chair, dietary needs, or a special occasion?"
							/>
						</label>

						<button type="submit" className="reservation-submit">
							Prepare reservation request <FaArrowRight />
						</button>
					</form>

					<p className="reservation-contact-note">
						Prefer to talk? <FaPhoneAlt />{" "}
						<a href="mailto:reservations@the-tastelab.com">Email our team</a>
					</p>
				</div>
			</section>
		</main>
	);
}

export default Reservation;
