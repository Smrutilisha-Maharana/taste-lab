import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

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

function Checkout() {
  const { cartItems, cartCount, cartTotal } = useCart();
  const [fulfillment, setFulfillment] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderEmailUrl, setOrderEmailUrl] = useState("");
  const [gmailComposeUrl, setGmailComposeUrl] = useState("");

  function handleOrderRequest(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const orderLines = cartItems.map(
      (item) =>
        `${item.name} x ${item.quantity} - ${formatPrice(item.price * item.quantity)}`,
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
      ...(paymentMethod === "upi" ? [`UPI ID: ${formData.get("upiId")}`] : []),
    ];
    const body = encodeURIComponent(
      [
        `Customer name: ${formData.get("name")}`,
        `Customer email: ${formData.get("email")}`,
        "",
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
              COMPLETE YOUR ORDER
            </span>
            <h1>
              Checkout<span>.</span>
            </h1>
            <p>
              Review your details and prepare an order request for our team.
            </p>
          </div>
          <Link to="/cart" className="cart-items-heading-link">
            <FaArrowLeft /> Back to basket
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty-state">
            <h2>Your basket is empty.</h2>
            <p>Add a dish before continuing to checkout.</p>
            <Link to="/menu" className="cart-primary-link">
              Browse the menu <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <form
              className="cart-items-panel cart-checkout-form"
              onSubmit={handleOrderRequest}
            >
              <div className="cart-items-heading">
                <h2>Order details</h2>
              </div>

              <div className="cart-checkout-fields checkout-contact-fields">
                <label>
                  <span>Full name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label>
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <fieldset className="cart-fulfillment-options checkout-fulfillment">
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
                      rows="3"
                      required
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
            </form>

            <aside className="cart-summary">
              <span className="cart-summary-label">ORDER SUMMARY</span>
              <h2>Almost ready.</h2>
              <div className="cart-summary-line">
                <span>Items ({cartCount})</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="cart-summary-line">
                <span>Order type</span>
                <span>{fulfillment === "delivery" ? "Delivery" : "Dine-in"}</span>
              </div>
              <div className="cart-summary-total">
                <span>Subtotal</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </div>
              <p className="cart-summary-note">
                No payment is taken here. The email draft includes your order
                and fulfillment details.
              </p>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default Checkout;