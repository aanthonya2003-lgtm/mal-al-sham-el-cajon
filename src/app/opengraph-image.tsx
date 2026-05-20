import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mal Al Sham — The Taste of Damascus, served in El Cajon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(120% 80% at 20% 0%, hsl(30,20%,13%) 0%, hsl(25,15%,6%) 65%, hsl(25,15%,4%) 100%)",
          color: "hsl(38,15%,93%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "hsl(38,85%,52%)",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "hsl(38,85%,52%)",
            }}
          />
          Since 2018 · El Cajon, California
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 110,
              lineHeight: 1.0,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              maxWidth: 1000,
              color: "hsl(38,15%,93%)",
            }}
          >
            The Taste of <span style={{ color: "hsl(38,85%,52%)" }}>Damascus</span>,
          </div>
          <div
            style={{
              fontSize: 110,
              lineHeight: 1.0,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "hsl(38,15%,93%)",
            }}
          >
            served in El Cajon.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ color: "hsl(38,15%,93%)", fontWeight: 600 }}>
              Mal Al Sham
            </div>
            <div style={{ color: "hsl(35,10%,58%)" }}>
              388 E Main St · (619) 401-1055
            </div>
          </div>
          <div
            style={{
              color: "hsl(38,85%,52%)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontSize: 18,
            }}
          >
            100% Halal · 1,500+ ★★★★★
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
