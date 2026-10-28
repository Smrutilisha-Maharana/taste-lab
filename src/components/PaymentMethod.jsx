import {
  FaCreditCard,
  FaMoneyBillWave,
  FaUniversity,
  FaWallet,
} from "react-icons/fa";

import "../styles/Payment.css";

const paymentOptions = [
  {
    id: "cod",
    label: "Cash on delivery",
    description: "Pay when your order arrives.",
    icon: FaMoneyBillWave,
  },
  {
    id: "upi",
    label: "UPI",
    description: "Pay securely with any UPI app.",
    icon: FaWallet,
  },
  {
    id: "card",
    label: "Credit or debit card",
    description: "Visa, Mastercard, and RuPay accepted.",
    icon: FaCreditCard,
  },
  {
    id: "netbanking",
    label: "Net banking",
    description: "Pay directly through your bank.",
    icon: FaUniversity,
  },
];

function PaymentMethod({
  value = "cod",
  onChange,
  name = "paymentMethod",
  options = paymentOptions,
}) {
  function handleChange(event) {
    onChange?.(event.target.value);
  }

  return (
    <fieldset className="payment-method">
      <legend>Payment method</legend>

      <div className="payment-method-options">
        {options.map((option) => {
          const Icon = option.icon;
          const isSelected = value === option.id;

          return (
            <label
              className={`payment-method-option ${
                isSelected ? "selected" : ""
              }`}
              key={option.id}
            >
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={isSelected}
                onChange={handleChange}
              />
              <span className="payment-method-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="payment-method-copy">
                <strong>{option.label}</strong>
                <small>{option.description}</small>
              </span>
            </label>
          );
        })}
      </div>

      {value === "upi" && (
        <label className="payment-detail-field">
          <span>UPI ID</span>
          <input
            type="text"
            name="upiId"
            inputMode="email"
            placeholder="yourname@upi"
            pattern="[^\\s]+@[^\\s]+"
            required
          />
        </label>
      )}

      {value === "card" && (
        <div className="payment-card-fields">
          <label className="payment-detail-field">
            <span>Card number</span>
            <input
              type="text"
              name="cardNumber"
              inputMode="numeric"
              autoComplete="cc-number"
              placeholder="1234 5678 9012 3456"
              minLength={12}
              maxLength={19}
              required
            />
          </label>
          <div className="payment-card-row">
            <label className="payment-detail-field">
              <span>Expiry</span>
              <input
                type="text"
                name="cardExpiry"
                inputMode="numeric"
                autoComplete="cc-exp"
                placeholder="MM/YY"
                maxLength={5}
                required
              />
            </label>
            <label className="payment-detail-field">
              <span>CVV</span>
              <input
                type="password"
                name="cardCvv"
                inputMode="numeric"
                autoComplete="cc-csc"
                placeholder="•••"
                maxLength={4}
                required
              />
            </label>
          </div>
        </div>
      )}
    </fieldset>
  );
}

export { paymentOptions };
export default PaymentMethod;