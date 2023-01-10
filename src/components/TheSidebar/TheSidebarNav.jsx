import {HomeIcon, MagnifyingGlassIcon, ViewColumnsIcon, PlusCircleIcon, HeartIcon} from '@heroicons/react/24/outline'
import {SidebarNavItem} from "./SidebarNavItem";

export const TheSidebarNav = ({showPopover}) => {
    const activeNavItemClasses = 'flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded'
    const navItemClasses = 'flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300'

    const navItems = [
        {
            label: 'Home',
            icon: <HomeIcon className="h-6 w-6"/>,
            classes: activeNavItemClasses
        },
        {
            label: 'Search',
            icon: <MagnifyingGlassIcon className="h-6 w-6"/>,
            classes: navItemClasses
        },
        {
            label: 'Your Library',
            icon: <ViewColumnsIcon className="h-6 w-6"/>,
            classes: `${navItemClasses} mb-6`,
            action: (target) => {
                showPopover('Enjoy Your Library', 'Login in to see saved songs, podcasts, artists and playlists in Your Library.', target)
            }
        },
        {
            label: 'Create Playlist',
            icon: <PlusCircleIcon className="h-6 w-6"/>,
            classes: navItemClasses,
            action: (target) => {
                showPopover('Create a playlist', 'Login in to create and share playlists.', target)
            }
        },
        {
            label: 'Liked Songs',
            icon: <HeartIcon className="h-6 w-6"/>,
            classes: navItemClasses,
            action: (target) => {
                showPopover('Enjoy your Liked songs.', 'Login in to see all the songs you\'ve liked in one easy playlist.', target)
            }
        },
    ]

    return (
        <nav>
            {navItems.map(({icon,label, classes, action}) => (
                <SidebarNavItem key={label} classes={classes} icon={icon} onClick={action} >
                    {label}
                </SidebarNavItem>
            ))}
        </nav>
    )
}
