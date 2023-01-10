import {useRef} from "react";

export const SidebarNavItem = ({classes, icon, onClick, children: label}) => {
    const labelRef = useRef(null)

    function handleClick(event) {

        if(!onClick) return

        event.preventDefault()
        onClick(labelRef.current)

    }

    return (
        <a href="/" className={classes} onClick={handleClick}>
            {icon}
            <span ref={labelRef} className="ml-4 text-sm font-semibold">{label}</span>
        </a>
    )
}
