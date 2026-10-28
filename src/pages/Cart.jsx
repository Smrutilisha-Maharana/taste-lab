import { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaArrowLeft,
	FaArrowRight,
	FaCheckCircle,
	FaMinus,
	FaPlus,
	FaShoppingBag,
	FaTrashAlt,
	FaUtensils,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import PaymentMethod from "../components/PaymentMethod";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

const formatPrice = (price) =>
	new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0,
	}).format(price);

function Cart() {
	const {
		cartItems,
		cartCount,
		cartTotal,
		updateQuantity,
		removeFromCart,
		clearCart,
	} = useCart();
	const [checkoutOpen, setCheckoutOpen] = useState(false);
	const [fulfillment, setFulfillment] = useState("delivery");
	const [paymentMethod, setPaymentMethod] = useState("cod");
	const [orderEmailUrl, setOrderEmailUrl] = useState("");
	const [gmailComposeUrl, setGmailComposeUrl] = useState("");

	function handleOrderRequest(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const orderLines = cartItems.map(
			(item) => `${item.name} x ${item.quantity} - ${formatPrice(item.price * item.quantity)}`,
		);
		const fulfillmentDetails =
			fulfillment === "delivery"
				? [
						"Order type: Delivery",
						`Delivery address: ${formData.get("address")}`,
						`Phone: ${formData.get("phone")}`,
					]
					: [
						"Order type: Dine-in",
						`Table number: ${formData.get("tableNumber")}`,
					];
		const paymentDetails = [
			`Payment method: ${paymentMethod}`,
			...(paymentMethod === "upi"
				? [`UPI ID: ${formData.get("upiId")}`]
				: []),
		];
		const body = encodeURIComponent(
			[
				"Hello, I would like to place this order:",
				"",
				...orderLines,
				"",
				...fulfillmentDetails,
				"",
				...paymentDetails,
				"",
				`Subtotal: ${formatPrice(cartTotal)}`,
			].join("\n"),
		);
		const subject = encodeURIComponent("Order request - The Taste Lab");

		const recipient = "smrutilisham@gmail.com";
		setOrderEmailUrl(`mailto:${recipient}?subject=${subject}&body=${body}`);
		setGmailComposeUrl(
			`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`,
		);
	}

	return (
		<main className="cart-page">
			<Navbar />

			<section className="cart-shell">
				<div className="cart-heading-row">
					<div>
						<span className="cart-eyebrow">
							<span className="cart-eyebrow-line"></span>
							YOUR TASTE LAB ORDER
						</span>
						<h1>Your basket<span>.</span></h1>
						<p>
							{cartCount === 0
								? "Your next favorite meal is just around the corner."
								: `${cartCount} ${cartCount === 1 ? "item" : "items"} selected for your table.`}
						</p>
					</div>
					{cartItems.length > 0 && (
						<button
							type="button"
							className="cart-clear-button"
							onClick={clearCart}
						>
							<FaTrashAlt /> Clear basket
						</button>
					)}
				</div>

				{cartItems.length === 0 ? (
					<div className="cart-empty-state">
						<span className="cart-empty-icon">
							<FaShoppingBag />
						</span>
						<h2>Nothing on the table yet.</h2>
						<p>Explore the menu and add something delicious to get started.</p>
						<Link to="/menu" className="cart-primary-link">
							Browse the menu <FaArrowRight />
						</Link>
					</div>
				) : (
					<div className="cart-layout">
						<div className="cart-items-panel">
							<div className="cart-items-heading">
								<h2>Items in your basket</h2>
								<Link to="/menu">
									<FaArrowLeft /> Add more dishes
								</Link>
							</div>

							<div className="cart-items-list">
								{cartItems.map((item) => (
									<article className="cart-item" key={item.id}>
										<img
											className="cart-item-image"
											src={item.image}
											alt={item.name}
											loading="lazy"
										/>

										<div className="cart-item-main">
											<span className="cart-item-category">{item.category}</span>
											<h3>{item.name}</h3>
											<span className="cart-item-unit-price">
												{formatPrice(item.price)} each
											</span>
										</div>

										<div className="cart-item-controls" aria-label={`${item.name} quantity`}>
											<button
												type="button"
												aria-label={`Decrease ${item.name} quantity`}
												onClick={() => updateQuantity(item.id, item.quantity - 1)}
											>
												<FaMinus />
											</button>
											<span aria-live="polite">{item.quantity}</span>
											<button
												type="button"
												aria-label={`Increase ${item.name} quantity`}
												onClick={() => updateQuantity(item.id, item.quantity + 1)}
											>
												<FaPlus />
											</button>
										</div>

										<strong className="cart-item-total">
											{formatPrice(item.price * item.quantity)}
										</strong>

										<button
											type="button"
											className="cart-item-remove"
											aria-label={`Remove ${item.name} from basket`}
											onClick={() => removeFromCart(item.id)}
										>
											<FaTrashAlt />
										</button>
									</article>
								))}
							</div>

							<div className="cart-continue-row">
								<FaUtensils />
								<span>Still deciding? There is always room for one more.</span>
								<Link to="/menu">Explore menu</Link>
							</div>
						</div>

						<aside className="cart-summary">
							<span className="cart-summary-label">ORDER SUMMARY</span>
							<h2>Almost ready.</h2>
							<div className="cart-summary-line">
								<span>Items ({cartCount})</span>
								<span>{formatPrice(cartTotal)}</span>
							</div>
							<div className="cart-summary-line">
								<span>Order type</span>
								<span>{checkoutOpen ? (fulfillment === "delivery" ? "Delivery" : "Dine-in") : "Choose next"}</span>
							</div>
							<div className="cart-summary-total">
								<span>Subtotal</span>
								<strong>{formatPrice(cartTotal)}</strong>
							</div>

							<button
								type="button"
								className="cart-order-button"
								onClick={() => setCheckoutOpen((open) => !open)}
								aria-expanded={checkoutOpen}
							>
								{checkoutOpen ? "Hide order details" : "Enter order details"} <FaArrowRight />
							</button>

							{checkoutOpen && (
								<form className="cart-checkout-form" onSubmit={handleOrderRequest}>
									<fieldset className="cart-fulfillment-options">
										<legend>How are you enjoying your order?</legend>
										<label className={fulfillment === "delivery" ? "selected" : ""}>
											<input
												type="radio"
												name="fulfillment"
												value="delivery"
												checked={fulfillment === "delivery"}
												onChange={() => setFulfillment("delivery")}
											/>
											Delivery
										</label>
										<label className={fulfillment === "dine-in" ? "selected" : ""}>
											<input
												type="radio"
												name="fulfillment"
												value="dine-in"
												checked={fulfillment === "dine-in"}
												onChange={() => setFulfillment("dine-in")}
											/>
											Dine-in
										</label>
									</fieldset>

									{fulfillment === "delivery" ? (
										<div className="cart-checkout-fields">
											<label>
												<span>Delivery address</span>
												<textarea
													name="address"
													autoComplete="street-address"
													placeholder="House number, street, city, and postal code"
													required
													rows="3"
												/>
											</label>
											<label>
												<span>Phone number</span>
												<input
													type="tel"
													name="phone"
													autoComplete="tel"
													placeholder="Your contact number"
													required
												/>
											</label>
										</div>
									) : (
										<div className="cart-checkout-fields">
											<label>
												<span>Table number</span>
												<input
													type="text"
													name="tableNumber"
													placeholder="Enter the number at your table"
													required
												/>
											</label>
										</div>
									)}

									<PaymentMethod
										value={paymentMethod}
										onChange={setPaymentMethod}
									/>

									<button type="submit" className="cart-order-button cart-submit-order">
										Prepare order request <FaArrowRight />
									</button>
								</form>
							)}

							{orderEmailUrl && (
								<div className="cart-request-notice" role="status">
									<FaCheckCircle />
									<span>
										<strong>Order request prepared successfully!</strong>
										<a href={orderEmailUrl}>Open your email app</a>
										<a
											href={gmailComposeUrl}
											target="_blank"
											rel="noreferrer"
										>
											Open Gmail draft
										</a>
									</span>
								</div>
							)}

							<p className="cart-summary-note">
								No payment is taken here. The email draft includes your order
								and fulfillment details.
							</p>
						</aside>
					</div>
				)}

				<div className="cart-footer-note">
					<span>Fresh ingredients. Bold flavors.</span>
					<Link to="/">Back to The Taste Lab</Link>
				</div>
			</section>
		</main>
	);
}

export default Cart;
