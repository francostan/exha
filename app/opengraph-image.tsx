import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "exha studio — valentina motta"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8f6f3",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 300,
              color: "#1a1a1a",
              letterSpacing: "0.25em",
              textTransform: "lowercase",
              margin: 0,
            }}
          >
            exha studio
          </h1>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#737373",
              margin: 0,
            }}
          >
            valentina motta
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 300,
              color: "#737373",
              letterSpacing: "0.15em",
              textTransform: "lowercase",
              marginTop: "32px",
            }}
          >
            photographer & creative director
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
