import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"

export const alt = "exha studio — valentina motta"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo_exha.png"))
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`

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
        }}
      >
        <img
          src={logoBase64}
          alt="exha studio logo"
          style={{
            maxWidth: "400px",
            maxHeight: "400px",
            objectFit: "contain",
          }}
        />
        <p
          style={{
            fontSize: "20px",
            fontWeight: 300,
            color: "#737373",
            letterSpacing: "0.15em",
            textTransform: "lowercase",
            marginTop: "40px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          photographer & creative director
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
