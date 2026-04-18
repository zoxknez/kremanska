"use client";

import { useEffect, useState } from "react";

type NetworkInformationLike = {
  effectiveType?: string;
  saveData?: boolean;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformationLike;
  mozConnection?: NetworkInformationLike;
  webkitConnection?: NetworkInformationLike;
};

function getConnection() {
  if (typeof navigator === "undefined") {
    return undefined;
  }

  const nav = navigator as NavigatorWithConnection;
  return nav.connection ?? nav.mozConnection ?? nav.webkitConnection;
}

function shouldPreferLightMedia() {
  if (typeof window === "undefined") {
    return false;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const compactViewport =
    window.matchMedia("(max-width: 820px)").matches ||
    window.matchMedia("(max-height: 820px) and (pointer: coarse)").matches;
  const connection = getConnection();
  const constrainedConnection =
    connection?.saveData === true ||
    ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "");

  return reducedMotion || compactViewport || constrainedConnection;
}

export function usePreferLightMedia() {
  const [preferLightMedia, setPreferLightMedia] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactWidthQuery = window.matchMedia("(max-width: 820px)");
    const compactHeightQuery = window.matchMedia(
      "(max-height: 820px) and (pointer: coarse)"
    );
    const connection = getConnection();

    const syncPreference = () => {
      setPreferLightMedia(shouldPreferLightMedia());
    };

    syncPreference();

    reducedMotionQuery.addEventListener("change", syncPreference);
    compactWidthQuery.addEventListener("change", syncPreference);
    compactHeightQuery.addEventListener("change", syncPreference);
    connection?.addEventListener?.("change", syncPreference);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncPreference);
      compactWidthQuery.removeEventListener("change", syncPreference);
      compactHeightQuery.removeEventListener("change", syncPreference);
      connection?.removeEventListener?.("change", syncPreference);
    };
  }, []);

  return preferLightMedia;
}
