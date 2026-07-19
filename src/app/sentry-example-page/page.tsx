"use client";


export default function SentryExamplePage() {
  const triggerError = () => {
    throw new Error("Sentry Test Error from SentryExamplePage client button");
  };

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Sentry Example Page</h1>
      <p>Click the button below to trigger a test error and verify Sentry is working.</p>
      <button
        onClick={triggerError}
        style={{
          padding: "12px 24px",
          background: "#df3e3e",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Trigger Test Error
      </button>
    </div>
  );
}
