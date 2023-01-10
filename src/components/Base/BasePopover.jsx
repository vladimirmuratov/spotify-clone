import {BaseButton} from "./BaseButton";
import {forwardRef, useEffect, useRef, useState, useImperativeHandle} from "react";

export const BasePopover = forwardRef((_, ref) => {
    const [classes, setClasses] = useState('opacity-0 translate-x-1 pointer-events-none')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const nodeRef = useRef(null)

    useEffect(() => {

        function handleClickAway({target}) {
            if (!nodeRef.current.contains(target)) hide()
        }

        document.addEventListener('mousedown', handleClickAway)

        return () => document.removeEventListener('mousedown', handleClickAway)
    })

    useImperativeHandle(ref, () => ({show}))

    function show(title, description, target) {
        setClasses('opacity-1')
        setTitle(title)
        setDescription(description)
        moveTo(target)
    }

    function hide() {
        setClasses('opacity-0 translate-x-1 pointer-events-none')
    }

    function moveTo(target) {
        const {top, right, height} = target.getBoundingClientRect()
        nodeRef.current.style.top = `${top - (height / 3) * 2}px`
        nodeRef.current.style.left = `${right + 30}px`
    }

    return (
        <div
            ref={nodeRef}
            className={`fixed z-30 bg-[#0e72ea] text-white tracking-wide rounded-lg shadow-3xl p-4 w-[330px] select-none transition duration-300 ${classes}`}
        >
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-xs">{description}</p>
            <div className="mt-6 text-right">
                <BaseButton onClick={hide}>Not now</BaseButton>
                <BaseButton primary>Log in</BaseButton>
            </div>
            <div
                className="w-20 h-20 absolute -top-4 -left-20 flex justify-end items-center overflow-hidden pointer-events-none">
                <div className="w-3 h-3 bg-[#0e72ea] shadow-3xl translate-x-1/2 rotate-45 pointer-events-auto"/>
            </div>
        </div>
    )
})
