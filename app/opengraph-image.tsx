import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Aletech - Innovative Technology Solutions"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "#111",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
        <div
          style={{
            width: 200,
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 40,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "100px solid transparent",
              borderRight: "100px solid transparent",
              borderBottom: "180px solid #30C8C9",
              position: "relative",
            }}
          />
        </div>
        <div style={{ fontSize: 96, fontWeight: "bold", color: "#30C8C9" }}>ALETECH</div>
      </div>
      <div style={{ fontSize: 36, color: "#ccc" }}>Innovative Technology Solutions</div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}

