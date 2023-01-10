import {PlayListContextMenuItem} from "./PlayListContextMenuItem";
import {forwardRef, useRef} from "react";
import {PlayListContextMenuItemWithSubmenu} from "./PlayListContextMenuItemWithSubmenu";

export const PlayListContextMenu = forwardRef(({classes, menuItems}, ref) => {
    let closePreviousSubmenu = useRef(null)

    function closePreviousSubmenuIfOpen(closeSubmenu = null) {

        if (closePreviousSubmenu.current) closePreviousSubmenu.current()

        closePreviousSubmenu.current = closeSubmenu
    }

    return (
        <ul className={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-3xl cursor-default whitespace-nowrap z-10 ${classes}`} ref={ref}>
            {menuItems.map(({label, action, subMenuItems, classes: menuItemClasses}) => {

                if (subMenuItems) {
                    return (
                        <PlayListContextMenuItemWithSubmenu
                            key={label}
                            subMenuItems={subMenuItems}
                            onMouseEnter={closePreviousSubmenuIfOpen}
                        >
                            {label}
                        </PlayListContextMenuItemWithSubmenu>
                    )
                }

                return (
                    <PlayListContextMenuItem
                        key={label}
                        onClick={action}
                        onMouseEnter={closePreviousSubmenuIfOpen}
                        classes={menuItemClasses}
                    >
                        {label}
                    </PlayListContextMenuItem>
                )
            })}
        </ul>
    )
})
