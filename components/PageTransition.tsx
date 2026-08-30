"use client";

import { useState } from "react";

const LOADER_COLS = 8;
const LOADER_ROWS = 16;
const CELL_COUNT = LOADER_COLS * LOADER_ROWS;

const LINES = [
  "LET'S GET WEIRD",
  "NO BORING HELLOS",
  "NO BORING DESKS",
  "NO BORING BIOS",
  "NO BORING CASES",
  "MAKE BORING ILLEGAL",
  "GETTING WEIRD",
  "CLOSED TO BEIGE",
  "THE PLOT",
  "THE HUMAN",
  "DHRUVIK PATEL",
  "ANAND 2018",
  "CRAFTED THINGS",
  "TYPED THINGS",
  "STRANGE TERRAINS",
  "NO BORING INDUSTRIES",
  "NO BORING POSTS",
  "HOW WE GOT WEIRD",
  "LET'S GET HIRED",
  "BEHIND THE WEIRD",
  "PULL UP A CHAIR",
  "TIME TO TALK",
  "DROP THE BEIGE",
  "ANAND PLOT",
  "WAKING THE DESK",
  "OPEN SEATS",
  "NO FAKE DESKS",
  "SAY IT WEIRD",
  "HIT SEND",
  "THE COORDINATES",
  "LIGHT THE DESK",
  "GO DARK",
  "STAY WEIRD",
  "BUILD THE BRAND",
  "SKIP THE BEIGE",
  "MAKE MISCHIEF",
  "NO BORING WAITS",
  "SOFTSOVE",
  "CARE@SOFTSOVE",
  "24*7 WEIRD",
  "THE INTEL",
  "ONE CLICK AWAY",
  "GREAT TO INCREDIBLE",
  "RING US",
  "DROP A LINE",
  "NOT A MONOLOGUE",
  "A PERSON",
  "CAUGHT YOU LOOKING",
  "TWO DOORS",
  "ZERO BEIGE",
  "THE STUDIO",
  "ONE OF US",
  "LIVE FROM THE API",
  "SNIFFING FOR MISCHIEF",
];

const HUD_STATUS = [
  "GETTING WEIRD",
  "WAKING UP",
  "SKIPPING BEIGE",
  "MAKING MISCHIEF",
  "LIGHTING THE DESK",
];

function fillCells() {
  return Array.from({ length: CELL_COUNT }, (_, index) => LINES[index % LINES.length]);
}

export function PageTransition() {
  const [cells] = useState(fillCells);
  const [status] = useState(HUD_STATUS[0]);

  return (
    <div id="tt-page-transition">
      <div className="tt-marp-loader" aria-hidden="true">
        <div className="tt-marp-grid">
          {Array.from({ length: LOADER_COLS }, (_, col) => (
            <div className="tt-marp-col" key={col}>
              {Array.from({ length: LOADER_ROWS }, (_, row) => {
                const line = cells?.[col * LOADER_ROWS + row];
                return (
                  <span className="tt-marp-cell" key={row}>
                    {line ? `[ ${line} ]` : "\u00A0"}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
        <div className="tt-marp-hud">
          <span className="tt-marp-hud-brand">[ SOFTSOVE ]</span>
          <span className="tt-marp-hud-status">
            [ {status} <em className="tt-marp-pct">00</em> ]
          </span>
        </div>
      </div>
    </div>
  );
}
