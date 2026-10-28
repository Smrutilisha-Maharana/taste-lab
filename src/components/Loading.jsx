import "../styles/Loading.css";

function Loading({ message = "Loading..." }) {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <span className="loading-spinner" aria-hidden="true"></span>
      <span className="loading-message">{message}</span>
    </div>
  );
}

export default Loading;