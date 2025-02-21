import { useState } from "react";

interface NextIconProps {
    stroke?: string;
}

const NextIcon = ({ stroke }: NextIconProps) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path d="m2 1 8 8-8 8" stroke={stroke ? stroke : "#1D2026"} stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
    )
}

export default NextIcon;