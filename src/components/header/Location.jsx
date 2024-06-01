import { MapPin } from "lucide-react";
import React from "react";
import CustomButton from "../CustomButton";

export function Location() {
  return (
    <CustomButton className={"button"}>
      <MapPin size={16} />
      <span className="text-base">São Paulo, SP</span>
    </CustomButton>
  );
}
