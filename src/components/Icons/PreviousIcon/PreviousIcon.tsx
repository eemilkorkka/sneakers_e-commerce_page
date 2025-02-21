interface PreviousIconProps {
    stroke?: string;
}

const PreviousIcon = ({ stroke }: PreviousIconProps) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path d="M11 1 3 9l8 8" stroke={stroke ? stroke : "#1D2026"} stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
    )
}

export default PreviousIcon;