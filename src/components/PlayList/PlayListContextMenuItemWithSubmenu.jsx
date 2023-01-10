import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {PlayListContextMenu} from "./PlayListContextMenu";
import {useRef} from "react";
import {useSubmenuPosition} from "../../hooks/useContextSubmenuPosition";

export const PlayListContextMenuItemWithSubmenu = ({
                                                       subMenuItems,
                                                       children: label,
                                                       onMouseEnter: closePreviousSubmenuIfOpen
                                                   }) => {

    const menuItemRef = useRef(null)

    const {state, open, items} = useSubmenuPosition(menuItemRef, closePreviousSubmenuIfOpen, subMenuItems)

    const bgClass = state.isOpen ? 'bg-[#3e3e3e]' : 'hover:bg-[#3e3e3e]'

    return (
        <li ref={menuItemRef} className="relative" onMouseEnter={open}>
            <button
                className={`w-full p-3 text-left hover:text-white ${bgClass} cursor-default flex justify-between items-center`}>
                {label} <ChevronRightIcon className="h-4 w-4"/>
            </button>
            {state.isOpen && (<PlayListContextMenu
                    menuItems={items}
                    classes={`absolute ${state.positionClasses}`}
                />
            )}
        </li>
    )
}
