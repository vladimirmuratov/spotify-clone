import {SidebarFooterListItem} from "./SidebarFooterListItem";

export const TheSidebarFooterList = () => (
    <ul>
        {['Cookies', 'Privacy'].map(label => (
            <SidebarFooterListItem key={label}>
                {label}
            </SidebarFooterListItem>
        ))}
    </ul>
)
