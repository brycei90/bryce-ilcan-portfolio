import { ImageResponse } from "next/og";

export const alt = "Bryce Ilcan Electrical Engineering Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#05080d",
          color: "#f8fafc",
          display: "flex",
          height: "100%",
          padding: "54px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.24), transparent 34%), radial-gradient(circle at 15% 85%, rgba(37, 99, 235, 0.22), transparent 36%)",
            display: "flex",
            inset: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            border: "1px solid rgba(148, 163, 184, 0.28)",
            borderRadius: "28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 64px",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              color: "#67e8f9",
              display: "flex",
              fontSize: "27px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Electrical Engineering Portfolio
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "86px",
                fontWeight: 800,
                letterSpacing: "-0.045em",
                lineHeight: 1,
              }}
            >
              Bryce Ilcan
            </div>
            <div
              style={{
                color: "#cbd5e1",
                display: "flex",
                fontSize: "32px",
                lineHeight: 1.35,
                marginTop: "28px",
                maxWidth: "900px",
              }}
            >
              Power Electronics · PCB Design · Embedded Hardware · Autonomous UAV Systems
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              color: "#94a3b8",
              display: "flex",
              fontSize: "25px",
              justifyContent: "space-between",
            }}
          >
            <span>University of Calgary</span>
            <span>bryce-ilcan.netlify.app</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
