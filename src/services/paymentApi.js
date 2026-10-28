const PAYMENT_API_URL = (
  import.meta.env.VITE_PAYMENT_API_URL ||
  import.meta.env.VITE_API_URL ||
  ""
).replace(/\/$/, "");

export class PaymentApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.name = "PaymentApiError";
    this.status = status;
    this.details = details;
  }
}

async function paymentRequest(path, options = {}) {
  const { body, headers, ...requestOptions } = options;
  const requestHeaders = {
    Accept: "application/json",
    ...headers,
  };

  if (body !== undefined) {
    requestHeaders["Content-Type"] = "application/json";
  }

  let response;

  try {
    response = await fetch(`${PAYMENT_API_URL}${path}`, {
      ...requestOptions,
      headers: requestHeaders,
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch (error) {
    throw new PaymentApiError(
      "Unable to connect to the payment service. Please try again.",
      0,
      error,
    );
  }

  const contentType = response.headers.get("content-type") || "";
  const responseBody = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message =
      typeof responseBody === "object" && responseBody?.message
        ? responseBody.message
        : `The payment request failed with status ${response.status}.`;

    throw new PaymentApiError(message, response.status, responseBody);
  }

  return responseBody;
}

function assertPaymentDetails(paymentDetails) {
  if (!paymentDetails || typeof paymentDetails !== "object") {
    throw new Error("Payment details are required.");
  }

  if (!paymentDetails.amount || paymentDetails.amount <= 0) {
    throw new Error("A valid payment amount is required.");
  }

  if (!paymentDetails.currency) {
    throw new Error("A payment currency is required.");
  }
}

export function createCashOnDeliveryOrder(order) {
  if (!order || typeof order !== "object") {
    throw new Error("Order details are required.");
  }

  return paymentRequest("/payments/cod", {
    method: "POST",
    body: {
      ...order,
      paymentMethod: "cod",
    },
  });
}

export function createOnlinePaymentOrder(paymentDetails) {
  assertPaymentDetails(paymentDetails);

  return paymentRequest("/payments/order", {
    method: "POST",
    body: paymentDetails,
  });
}

export function verifyOnlinePayment(paymentDetails) {
  if (
    !paymentDetails?.orderId ||
    !paymentDetails?.paymentId ||
    !paymentDetails?.signature
  ) {
    throw new Error(
      "Payment order ID, payment ID, and signature are required for verification.",
    );
  }

  return paymentRequest("/payments/verify", {
    method: "POST",
    body: paymentDetails,
  });
}

export function getPaymentStatus(paymentId) {
  if (!paymentId) {
    throw new Error("A payment ID is required.");
  }

  return paymentRequest(`/payments/${encodeURIComponent(paymentId)}`);
}

export default {
  createCashOnDeliveryOrder,
  createOnlinePaymentOrder,
  verifyOnlinePayment,
  getPaymentStatus,
};