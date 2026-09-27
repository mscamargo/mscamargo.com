import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Think Twice, Code Once.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const geistSemiBold = await readFile(
  join(process.cwd(), "assets/Geist-SemiBold.ttf"),
);

// Geist dark tokens from globals.css — ImageResponse can't read CSS variables
const background100 = "#0a0a0a";
const background200 = "#000000";
const gray1000 = "#ededed";
const grayAlpha400 = "rgba(255, 255, 255, 0.14)";

// Frame distance from the image edges, and its right/bottom edge pixels
const inset = 96;
const right = size.width - inset - 1;
const bottom = size.height - inset - 1;

function Line({
  x,
  y,
  width,
  height,
  color,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        background: color,
      }}
    />
  );
}

function Crosshair({ x, y }: { x: number; y: number }) {
  return (
    <>
      <Line x={x - 11} y={y} width={23} height={1} color={gray1000} />
      <Line x={x} y={y - 11} width={1} height={23} color={gray1000} />
    </>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          background: background200,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: inset,
            right: inset,
            bottom: inset,
            left: inset,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: background100,
            color: gray1000,
            fontSize: 128,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.06em",
          }}
        >
          <div>Think Twice,</div>
          <div>Code Once.</div>
        </div>

        {/* Guides run the frame's edges out to the image edges, like the page */}
        <Line x={0} y={inset} width={size.width} height={1} color={grayAlpha400} />
        <Line x={0} y={bottom} width={size.width} height={1} color={grayAlpha400} />
        <Line x={inset} y={0} width={1} height={size.height} color={grayAlpha400} />
        <Line x={right} y={0} width={1} height={size.height} color={grayAlpha400} />
        <Crosshair x={inset} y={inset} />
        <Crosshair x={right} y={bottom} />
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: geistSemiBold, weight: 600 }],
    },
  );
}
