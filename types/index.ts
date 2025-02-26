import { MouseEventHandler } from "react";
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleclick?: MouseEventHandler<HTMLButtonElement>; // ✅ Now optional
    btnType?: "button" | "submit";
}
export interface SearchManufacturerProps {
    manufacturer: string;
        setManufacturer: (manufacturer: string) => void;
    }