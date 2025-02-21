import { Dispatch, SetStateAction } from "react";

interface CloseIconProps {
    fill: string;
    setFill: Dispatch<SetStateAction<string>>;
}

const CloseIcon = ({ fill, setFill }: CloseIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setFill("hsl(26, 100%, 55%)")} onMouseLeave={() => setFill("white")} width="14px" height="15px"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill={fill ? fill : "white"} fill-rule="evenodd"/></svg>
    )
}

export default CloseIcon;