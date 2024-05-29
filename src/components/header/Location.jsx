import { MapPin } from "lucide-react";
import React from "react";

export function Location() {
  return (
    <button className="location">
      <MapPin size={16} />
      <span className="text-base">São Paulo, SP</span>
    </button>
  );
}
