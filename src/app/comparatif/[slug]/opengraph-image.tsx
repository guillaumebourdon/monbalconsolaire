import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MonBalconSolaire - Comparatif";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => {
      if (word.match(/^\d+w$/i)) return word.toUpperCase();
      if (word.match(/^\d+wc$/i)) return word.toUpperCase();
      if (word.match(/^\d+$/)) return word;
      if (word === "vs") return "vs";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slugToTitle(slug);

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
            padding: "0 60px",
          }}
        >
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
                fontSize: 40,
                fontWeight: 800,
                color: "#2C2C28",
                letterSpacing: "-1px",
              }}
            >
              Mon
            </span>
            <span
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "#3D7A4A",
                letterSpacing: "-1px",
              }}
            >
              Balcon
            </span>
            <span
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "#E8961A",
                letterSpacing: "-1px",
              }}
            >
              Solaire
            </span>
          </div>

          {/* Section badge */}
          <div
            style={{
              display: "flex",
              backgroundColor: "#E8961A",
              color: "#FBF8F1",
              fontSize: 24,
              fontWeight: 700,
              padding: "8px 24px",
              borderRadius: 8,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Comparatif
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

          {/* Article title */}
          <span
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "#2C2C28",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            {title}
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
