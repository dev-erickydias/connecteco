import { MapPin } from "lucide-react";
import React from "react";

export function Location() {
  return (
    <button className="flex items-center gap-1 bg-eucalyptus-500 rounded-lg text-squeeze-100 p-1">
      <MapPin size={16} />
      <span className="text-base">São Paulo, SP</span>
    </button>
  );
}
