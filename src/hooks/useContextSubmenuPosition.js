import {useEffect, useRef, useState} from "react";

export function useSubmenuPosition(ref, closePreviousIfOpen, items) {
    const [state, setState] = useState({
        isOpen: false,
        positionClasses: 'top-0 left-full'
    })
    const closeMenuTimer = useRef(null)

    function getPositionXClass() {
        const menuItem = ref.current
        const menuWidth = menuItem.offsetWidth
        const windowWidth = window.innerWidth
        const menuItemRightCoordinateX = menuItem.getBoundingClientRect().right
        const shouldMoveLeft = menuWidth > windowWidth - menuItemRightCoordinateX

        return shouldMoveLeft ? 'right-full' : 'left-full'
    }

    function getPositionYClass() {
        const menuItem = ref.current
        const menuHeight = menuItem.offsetHeight * items.length
        const windowHeight = window.innerHeight
        const menuItemBottomCoordinateY = menuItem.getBoundingClientRect().bottom
        const shouldMoveUp = menuHeight > windowHeight - menuItemBottomCoordinateY

        return shouldMoveUp ? 'bottom-0' : 'top-0'
    }

    function getPositionClasses() {
        return `${getPositionYClass()} ${getPositionXClass()}`
    }

    function open() {

        closePreviousIfOpen(startCloseMenuTimer)

        setState({
            isOpen: true,
            positionClasses: getPositionClasses()
        })
    }

    function closeMenu() {
        setState({
            isOpen: false,
            positionClasses: ''
        })
    }

    function startCloseMenuTimer() {
        closeMenuTimer.current = setTimeout(() => {
            closeMenu()
        }, 100)
    }

    function stopCloseMenuTimer() {
        clearTimeout(closeMenuTimer.current)
    }

    useEffect(() => stopCloseMenuTimer)

    return {
        state,
        open,
        items
    }
}
