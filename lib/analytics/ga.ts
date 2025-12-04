const DEFAULT_GA_MEASUREMENT_ID = "G-H699TZ29QW";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? DEFAULT_GA_MEASUREMENT_ID;

const hasMeasurementId = (): boolean => GA_MEASUREMENT_ID.length > 0;

const isBrowser = (): boolean => typeof window !== "undefined";

type TrackEventParams = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  params?: Record<string, unknown>;
};

type TrackButtonClickParams = {
  name: string;
  location?: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const pushToGtag = (...args: unknown[]) => {
  if (!isBrowser() || typeof window.gtag !== "function") {
    return;
  }

  window.gtag(...args);
};

export const pageview = (url: string) => {
  if (!hasMeasurementId()) {
    return;
  }

  pushToGtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const trackEvent = ({ action, category, label, value, params }: TrackEventParams) => {
  if (!hasMeasurementId() || !action) {
    return;
  }

  pushToGtag("event", action, {
    ...(category ? { event_category: category } : {}),
    ...(label ? { event_label: label } : {}),
    ...(typeof value === "number" ? { value } : {}),
    ...params,
  });
};

export const trackButtonClick = ({
  name,
  location,
  label,
  value,
  metadata,
}: TrackButtonClickParams) => {
  if (!name) {
    return;
  }

  trackEvent({
    action: "button_click",
    category: "engagement",
    label: label ?? name,
    value,
    params: {
      button_name: name,
      ...(location ? { location } : {}),
      ...metadata,
    },
  });
};

export const isAnalyticsEnabled = (): boolean => isBrowser() && hasMeasurementId() && typeof window.gtag === "function";

export { GA_MEASUREMENT_ID };
