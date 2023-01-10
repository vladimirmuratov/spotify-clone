export const BaseBlock = ({children}) => (
    <div
        className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5"
    >
        {children}
    </div>
)
