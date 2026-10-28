const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export class ApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

async function apiRequest(path, options = {}) {
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
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...requestOptions,
      headers: requestHeaders,
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch (error) {
    throw new ApiError(
      "The request could not be completed. Check your connection and try again.",
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
        : `The request failed with status ${response.status}.`;

    throw new ApiError(message, response.status, responseBody);
  }

  return responseBody;
}

export function getMenu() {
  return apiRequest("/menu");
}

export function getFood(foodId) {
  if (foodId === undefined || foodId === null || foodId === "") {
    throw new Error("A food ID is required.");
  }

  return apiRequest(`/menu/${encodeURIComponent(foodId)}`);
}

export function createOrder(order) {
  if (!order || typeof order !== "object") {
    throw new Error("Order details are required.");
  }

  return apiRequest("/orders", {
    method: "POST",
    body: order,
  });
}

export function createReservation(reservation) {
  if (!reservation || typeof reservation !== "object") {
    throw new Error("Reservation details are required.");
  }

  return apiRequest("/reservations", {
    method: "POST",
    body: reservation,
  });
}

export function sendContactMessage(message) {
  if (!message || typeof message !== "object") {
    throw new Error("Contact message details are required.");
  }

  return apiRequest("/contact", {
    method: "POST",
    body: message,
  });
}

export default apiRequest;