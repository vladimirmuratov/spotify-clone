import {useEffect, useLayoutEffect, useState} from "react";
import {PlayListContextMenu} from "./PlayListContextMenu";
import {PlayListCover} from "./PlayListCover";
import {PlayListButtonPlay} from "./PlayListButtonPlay";
import {PlayListTitle} from "./PlayListTitle";
import {PlayListDescription} from "./PlayListDescription";
import {useContextMenu} from "../../hooks/useContextMenu";

export const PlayList = ({coverUrl, title, description, classes, toggleScrolling, showToast}) => {
    const [menuItems, setMenuItems] = useState(generateMenuItems)
    const {open: openMenu, close: closeMenu, isOpen: isMenuOpen, ref: menuRef} = useContextMenu()

    const bgClasses = isMenuOpen
        ? 'bg-[#272727]'
        : 'bg-[#181818] hover:bg-[#272727]'

    function generateMenuItems(isAlternate = false) {

        return [
            {
                label: 'Add to Your Library',
                action: () => {
                    closeMenu()
                    document.querySelector('nav a:nth-child(4)').click()
                }
            },
            {
                label: 'Share',
                subMenuItems: [
                    {
                        label: isAlternate ? 'Copy Spotify URI' : 'Copy link to playlist',
                        classes: 'min-w-[150px]',
                        action: () => {
                            navigator.clipboard.writeText(title).then(() => {
                                closeMenu()
                                showToast('Link copied to clipboard')
                            })
                        }
                    },
                    {label: 'Embed playlist'},
                ],
            },
            {label: 'About recommendations'},
            {label: 'Open in Desktop app'},
        ]
    }



    useLayoutEffect(() => toggleScrolling(!isMenuOpen))

    useEffect(() => {

        if (!isMenuOpen) return;

        function handleAltKeydown(event) {
            if (event.key === 'Alt') setMenuItems(generateMenuItems(true))
        }

        function handleAltKeyup(event) {
            if (event.key === 'Alt') setMenuItems(generateMenuItems())
        }

        document.addEventListener('keydown', handleAltKeydown)
        document.addEventListener('keyup', handleAltKeyup)

        return () => {
            document.removeEventListener('keydown', handleAltKeydown)
            document.removeEventListener('keyup', handleAltKeyup)
        }
    })

    return (
        <a
            href="/"
            onClick={(event) => event.preventDefault()}
            className={`relative p-4 rounded-md duration-200 group ${classes} ${bgClasses}`}
            onContextMenu={openMenu}
        >
            <div className="relative">
                <PlayListCover url={coverUrl}/>
                <PlayListButtonPlay/>
            </div>
            <PlayListTitle title={title}/>
            <PlayListDescription description={description}/>
            {isMenuOpen &&
                (<PlayListContextMenu
                    ref={menuRef}
                    menuItems={menuItems}
                    classes="fixed divide-y divide-[#3e3e3e]"
                />)
            }
        </a>
    )
}
