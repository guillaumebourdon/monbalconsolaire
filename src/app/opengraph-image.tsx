import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MonBalconSolaire - Le guide indépendant du solaire de balcon";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FBF8F1",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #3D7A4A 0%, #E8961A 100%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          {/* Sun icon */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#E8961A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 40px rgba(232, 150, 26, 0.3)",
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FBF8F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </div>

          {/* Site name */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 0,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#2C2C28",
                letterSpacing: "-2px",
              }}
            >
              Mon
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#3D7A4A",
                letterSpacing: "-2px",
              }}
            >
              Balcon
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#E8961A",
                letterSpacing: "-2px",
              }}
            >
              Solaire
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 120,
              height: 4,
              borderRadius: 2,
              backgroundColor: "#3D7A4A",
              display: "flex",
            }}
          />

          {/* Tagline */}
          <span
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#2C2C28",
              opacity: 0.8,
            }}
          >
            Le guide indépendant du solaire de balcon
          </span>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #E8961A 0%, #3D7A4A 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
