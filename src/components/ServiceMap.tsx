import React, { useEffect, useRef } from 'react';

// ─── DESTINATION DATA ────────────────────────────────────────────────────────
const INDORE_HUB = {
  lat: 22.7196,
  lng: 75.8577,
  label: 'INDORE HUB',
  sublabel: 'DS Travels Headquarters',
  isHub: true,
};

const DESTINATIONS = [
  { lat: 23.1765, lng: 75.7885, label: 'Ujjain',       sublabel: 'Jyotirlinga Pilgrimage · 55 km' },
  { lat: 22.2426, lng: 76.1510, label: 'Omkareshwar',  sublabel: 'Sacred Island Temple · 80 km' },
  { lat: 22.1751, lng: 75.5833, label: 'Maheshwar',    sublabel: 'Holkar Heritage Ghat · 90 km' },
  { lat: 22.3525, lng: 75.2930, label: 'Mandav',       sublabel: 'City in Madhya Pradesh · 100 km' },
];

// ─── MARKER ICON FACTORY (pure CSS, no image assets) ─────────────────────────
// We inject a <style> once and create DivIcon HTML strings.
const CSS_INJECTED = { done: false };

function injectMarkerCSS() {
  if (CSS_INJECTED.done || typeof document === 'undefined') return;
  CSS_INJECTED.done = true;
  const style = document.createElement('style');
  style.textContent = `
    .ds-hub-marker {
      position: relative;
      width: 36px;
      height: 36px;
    }
    .ds-hub-marker .ring-outer {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: rgba(199,155,75,0.22);
      animation: ds-hub-pulse 2.4s ease-in-out infinite;
    }
    .ds-hub-marker .ring-inner {
      position: absolute;
      inset: 5px;
      border-radius: 50%;
      background: #C79B4B;
      border: 2.5px solid #fff;
      box-shadow: 0 2px 8px rgba(199,155,75,0.5);
    }
    .ds-hub-marker .dot-center {
      position: absolute;
      inset: 13px;
      border-radius: 50%;
      background: #fff;
    }
    @keyframes ds-hub-pulse {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50%       { transform: scale(1.55); opacity: 0.25; }
    }
    .ds-dest-marker {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: rgba(199,155,75,0.20);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ds-dest-marker .inner {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #C79B4B;
      border: 2px solid #fff;
      box-shadow: 0 1px 5px rgba(199,155,75,0.45);
    }
    /* Override Leaflet default popup / tooltip styles */
    .ds-popup .leaflet-popup-content-wrapper {
      background: rgba(255,253,248,0.97);
      border: 1px solid rgba(23,32,51,0.12);
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(23,32,51,0.10);
      padding: 0;
    }
    .ds-popup .leaflet-popup-tip {
      background: rgba(255,253,248,0.97);
    }
    .ds-popup .leaflet-popup-content {
      margin: 10px 14px;
    }
    .ds-popup-hub-title {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #C79B4B;
    }
    .ds-popup-hub-sub {
      font-size: 10px;
      color: #68738A;
      margin-top: 1px;
    }
    .ds-popup-dest-title {
      font-size: 11px;
      font-weight: 700;
      color: #172033;
    }
    .ds-popup-dest-sub {
      font-size: 10px;
      color: #68738A;
      margin-top: 1px;
    }
    /* Hide Leaflet attribution for cleaner look (but keep legally: set position) */
    .leaflet-control-attribution {
      font-size: 9px !important;
      opacity: 0.5;
    }
  `;
  document.head.appendChild(style);
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export const ServiceMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<ReturnType<typeof import('leaflet').map> | null>(null);

  useEffect(() => {
    let cancelled = false;

    // Dynamically import Leaflet (keeps initial bundle lean)
    import('leaflet').then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return;

      injectMarkerCSS();

      // ── Leaflet icon path fix (Vite asset hashing strips default images) ──
      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      // ── Leaflet CSS ──
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // ── Create map ──
      const map = L.map(containerRef.current, {
        center:       [INDORE_HUB.lat, INDORE_HUB.lng],
        zoom:         9,
        zoomControl:  false,
        scrollWheelZoom: false,     // prevents hijacking page scroll
        attributionControl: true,
      });
      mapRef.current = map as unknown as ReturnType<typeof import('leaflet').map>;

      // Add zoom control in bottom-right (compact)
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // ── Tile layer: Standard OpenStreetMap — free, no API key, official OSM tiles ──
      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
          subdomains: 'abc',
          maxZoom: 19,
        }
      ).addTo(map);

      // ── DS Travels custom icon factory ──
      const hubIcon = L.divIcon({
        className: '',
        html: `<div class="ds-hub-marker"><div class="ring-outer"></div><div class="ring-inner"></div><div class="dot-center"></div></div>`,
        iconSize:   [36, 36],
        iconAnchor: [18, 18],
        popupAnchor:[0, -22],
      });

      const destIcon = L.divIcon({
        className: '',
        html: `<div class="ds-dest-marker"><div class="inner"></div></div>`,
        iconSize:   [22, 22],
        iconAnchor: [11, 11],
        popupAnchor:[0, -14],
      });

      // ── Hub marker (Indore) ──
      L.marker([INDORE_HUB.lat, INDORE_HUB.lng], { icon: hubIcon, title: 'DS Travels — Indore Headquarters' })
        .addTo(map)
        .bindPopup(
          `<div class="ds-popup-hub-title">${INDORE_HUB.label}</div>
           <div class="ds-popup-hub-sub">${INDORE_HUB.sublabel}</div>`,
          { className: 'ds-popup', maxWidth: 200 }
        );

      // ── Service connection polylines ──
      const lineStyle = { color: '#C79B4B', weight: 1.8, opacity: 0.55, dashArray: '6 7' };

      // ── Destination markers + lines ──
      DESTINATIONS.forEach((dest) => {
        L.polyline(
          [[INDORE_HUB.lat, INDORE_HUB.lng], [dest.lat, dest.lng]],
          lineStyle
        ).addTo(map);

        L.marker([dest.lat, dest.lng], { icon: destIcon, title: dest.label })
          .addTo(map)
          .bindPopup(
            `<div class="ds-popup-dest-title">${dest.label}</div>
             <div class="ds-popup-dest-sub">${dest.sublabel}</div>`,
            { className: 'ds-popup', maxWidth: 200 }
          );
      });

      // ── Fit all markers with padding ──
      const allPoints: [number, number][] = [
        [INDORE_HUB.lat, INDORE_HUB.lng],
        ...DESTINATIONS.map((d) => [d.lat, d.lng] as [number, number]),
      ];
      map.fitBounds(L.latLngBounds(allPoints), { padding: [32, 32] });
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        (mapRef.current as unknown as { remove: () => void }).remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      role="application"
      aria-label="DS Travels service area map showing Indore headquarters and destinations across Madhya Pradesh"
    />
  );
};
