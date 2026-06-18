"use client";

import { footprintBrands, type FootprintBrand } from "@/data/content";
import { useEffect, useRef } from "react";

const MAP_IMG = "/Voith_Nepal.png";

type Props = { open: boolean; onClose: () => void };

export default function NepalDialog({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const handler = () => onClose();
    d.addEventListener("close", handler);
    return () => d.removeEventListener("close", handler);
  }, [onClose]);

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) onClose();
  }

  const automotive = footprintBrands.filter((b) => b.category === "automotive");
  const others = footprintBrands.filter((b) => b.category === "others");

  return (
    <dialog
      ref={dialogRef}
      className="nepal-dialog"
      onClick={handleBackdropClick}
      aria-label="VOITH footprint across Nepal"
    >
      <div className="nd-inner">
        <button
          type="button"
          className="nd-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <aside className="nd-side">
          <h2 className="nd-title">Our Footprint</h2>
          <p className="nd-sub">
            VOITH brands and operations mapped across Nepal — from the Kathmandu
            valley to the Far-Western Terai.
          </p>

          <BrandTable
            label="Automotive Division"
            brands={automotive}
            kind="automotive"
          />
          <BrandTable label="Others" brands={others} kind="others" />
        </aside>

        <div className="nd-map-col">
          <div className="nd-map-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MAP_IMG}
              alt="VOITH footprint across Nepal"
              className="nd-map-img"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
}

function BrandTable({
  label,
  brands,
  kind,
}: {
  label: string;
  brands: FootprintBrand[];
  kind: "automotive" | "others";
}) {
  return (
    <div className="nd-table">
      <p className="nd-table-label">{label}</p>
      <div className={`nd-table-head nd-table-row nd-table-row--${kind}`}>
        <span>Brand</span>
        {kind === "automotive" ? (
          <>
            <span>Sales</span>
            <span>Service</span>
            <span>Others</span>
          </>
        ) : (
          <span>Notes</span>
        )}
      </div>
      {brands.map((b) => (
        <div
          key={b.brand}
          className={`nd-table-row nd-table-row--${kind} nd-table-row--data`}
        >
          <span className="nd-brand-cell">
            <span
              className="nd-brand-dot"
              style={{ background: b.color }}
              aria-hidden="true"
            />
            <span className="nd-brand-name">{b.brand}</span>
          </span>
          {kind === "automotive" ? (
            <>
              <span>{b.sales ?? "—"}</span>
              <span>{b.service ?? "—"}</span>
              <span className="nd-cell-others">{b.others ?? 0}</span>
            </>
          ) : (
            <span className="nd-cell-notes">{b.notes ?? ""}</span>
          )}
        </div>
      ))}
    </div>
  );
}
