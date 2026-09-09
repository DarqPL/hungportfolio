import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#f5f5f5",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, letterSpacing: 8, color: "#a1a1aa" }}>DARQPL</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#bbf7d0" }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#4ade80" }} />
            {profile.status}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>
            {profile.asciiName}
          </div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#d4d4d8" }}>
            Backend Developer / Web3 Developer
          </div>
        </div>

        <div style={{ display: "flex", gap: 28, fontSize: 28, color: "#a1a1aa" }}>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Backend Systems</span>
          <span>Web3</span>
        </div>
      </div>
    ),
    size,
  );
}
