import {useEffect, useRef, useState} from "react";
import {usePosition} from "./useContextMenuPosition";

export function useContextMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)
    const move = usePosition(ref, isOpen)

    useEffect(() => {

        if (!isOpen) return;

        function handleClickAway(event) {

            if (!ref.current.contains(event.target)) close()
        }

        function handleEsc(event) {

            if (event.code === 'Escape') close()
        }

        document.addEventListener('mousedown', handleClickAway)
        document.addEventListener('keydown', handleEsc)

        return () => {
            document.removeEventListener('mousedown', handleClickAway)
            document.removeEventListener('keydown', handleEsc)
        }
    })

    function open(event) {
        event.preventDefault()

        move(event.clientX, event.clientY)

        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return {
        open,
        close,
        isOpen,
        ref
    }
}
