"use client";

import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { ArrowUpRight } from "lucide-react";
import { Photo, SectionLabel } from "../../data/site";

const galleryItems = [
  {
    category: "Pool & Exterior",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    alt: "Private villa pool",
  },
  {
    category: "Bedrooms",
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    alt: "Villa bedroom",
  },
  {
    category: "Kitchen & Dining",
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    alt: "Villa kitchen",
  },
  {
    category: "Living Area",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    alt: "Villa living area",
  },
  {
    category: "Pool & Exterior",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    alt: "Villa exterior and garden",
  },
  {
    category: "Details",
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    alt: "Interior detail",
  },
  {
    category: "Bedrooms",
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41fae6a2?auto=format&fit=crop&w=1200&q=85",
    alt: "Bedroom interior",
  },
  {
    category: "Kitchen & Dining",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    alt: "Villa dining space",
  },
  {
    category: "Details",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    alt: "Villa interior detail",
  },
];

const categories = [
  "All Photos",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
] as string[];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState(1);
  const [lightboxToggler, setLightboxToggler] = useState(false);

  const filteredItems =
    activeCategory === "All Photos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  const visibleItems = filteredItems.slice(0, 5);
  const hasMorePhotos = filteredItems.length > 5;

  const openLightbox = (index: number) => {
    setLightboxSlide(index + 1);
    setLightboxOpen(true);
    setLightboxToggler((prev) => !prev);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <section id="gallery" className="gallery section wrap">
      <div className="galleryHead">
        <div>
          <SectionLabel>PHOTO COLLECTION</SectionLabel>
          <h2>
            Moments at
            <br />
            <em>Wana Jiwa.</em>
          </h2>
        </div>
        <a href="#ota" className="textLink">
          Plan your stay <ArrowUpRight size={15} />
        </a>
      </div>

      <div
        className="galleryFilters"
        role="tablist"
        aria-label="Filter villa photos"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            className={`galleryFilter ${activeCategory === category ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(category);
              closeLightbox();
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="galleryGrid galleryGridFiltered">
        {visibleItems.map((item, index) => {
          const isShowAllTile = hasMorePhotos && index === 4;
          return (
            <button
              type="button"
              className={`galleryTile ${index === 0 && activeCategory === "All Photos" ? "galleryLarge" : ""} ${isShowAllTile ? "galleryShowAll" : ""}`}
              key={`${item.src}-${index}`}
              onClick={() => openLightbox(index)}
              aria-label={
                isShowAllTile
                  ? `Show all ${filteredItems.length} photos in ${activeCategory}`
                  : `View photo: ${item.alt}`
              }
            >
              <Photo
                src={item.src}
                alt={item.alt}
                className="galleryTilePhoto"
              />
              {index < 4 && (
                <span className="galleryTileLabel">{item.category}</span>
              )}
              {isShowAllTile && (
                <span
                  className="galleryShowAllOverlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    background: "rgba(24, 20, 17, 0.48)",
                    color: "#fff",
                    textAlign: "center",
                    padding: "1rem",
                  }}
                >
                  <span
                    className="galleryShowAllCount"
                    style={{ fontSize: "0.8rem", opacity: 0.9 }}
                  >
                    Explore more photos{" "}
                    <ArrowUpRight
                      size={14}
                      style={{ display: "inline", verticalAlign: "middle" }}
                    />
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p className="imageNote">
        Images shown are temporary visual placeholders and will be replaced with
        Wana Jiwa&apos;s actual photography.
      </p>

      {lightboxOpen && (
        <FsLightbox
          key={activeCategory}
          toggler={lightboxToggler}
          sources={filteredItems.map((item) => item.src)}
          slide={lightboxSlide}
        />
      )}
    </section>
  );
}
