import {TheSidebar} from "./TheSidebar/TheSidebar";
import {TheHeader} from "./TheHeader/TheHeader";
import {TheMain} from "./TheMain";
import {TheRegistration} from "./TheRegistration/TheRegistration";
import {TheSidebarOverlay} from "./TheSidebarOverlay";
import {useEffect, useRef} from "react";
import {BaseToast} from "./Base/BaseToast";
import {BasePopover} from "./Base/BasePopover";


function App() {
    const contentWrapperRef = useRef(null)
    const popoverRef = useRef(null)
    const toastRef = useRef(null)
    let isScrollingEnabled = true

    function handleScrolling(event) {
        if (isScrollingEnabled) return;

        event.preventDefault()
        event.stopPropagation()
    }

    function toggleScrolling(isEnabled) {
        isScrollingEnabled = isEnabled
    }

    function showToast(message) {
        toastRef.current.show(message)
    }

    function showPopover(title, description, target) {
        popoverRef.current.show(title, description, target)
    }

    useEffect(() => {
        const contentWrapper = contentWrapperRef.current

        contentWrapper.addEventListener('wheel', handleScrolling)

        return () => contentWrapper.removeEventListener('wheel', handleScrolling)
    })

    return (
        <>
            <div className="flex grow overflow-auto">
                <TheSidebar showPopover={showPopover}/>
                <TheSidebarOverlay/>
                <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
                    <TheHeader/>
                    <TheMain showToast={showToast} toggleScrolling={toggleScrolling}/>
                </div>
            </div>
            <TheRegistration/>
            <BaseToast ref={toastRef}/>
            <BasePopover ref={popoverRef}/>
        </>
    );
}

export default App;
