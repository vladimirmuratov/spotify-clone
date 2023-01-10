import {PlayList} from "./PlayList/PlayList";
import {BaseBlockTitle} from "./Base/BaseBlockTitle";
import {BaseBlock} from "./Base/BaseBlock";

const playlists = [
    {
        classes: '',
        coverUrl: 'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster',
        title: 'Playlist title 1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        classes: 'hidden sm:block',
        coverUrl: 'https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster',
        title: 'Playlist title 2',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        classes: 'hidden lg:block',
        coverUrl: 'https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster',
        title: 'Playlist title 3',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        classes: 'hidden xl:block',
        coverUrl: 'https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster',
        title: 'Playlist title 4',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        classes: 'hidden 2xl:block',
        coverUrl: 'https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster',
        title: 'Playlist title 5',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        classes: 'hidden 3xl:block',
        coverUrl: 'https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster',
        title: 'Playlist title 6',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        classes: 'hidden 4xl:block',
        coverUrl: 'https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster',
        title: 'Playlist title 7',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        classes: 'hidden 5xl:block',
        coverUrl: 'https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster',
        title: 'Playlist title 8',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        classes: 'hidden 6xl:block',
        coverUrl: 'https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster',
        title: 'Playlist title 9',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
]

export const TheMain = ({toggleScrolling, showToast}) => {
    return (
        <main className="text-white relative">
            <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
            <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
                <div>
                    <BaseBlockTitle title="Lorem ipsum dolor sit"/>
                    <BaseBlock>
                        {playlists.map(playlist => (
                            <PlayList
                                key={playlist.title}
                                {...playlist}
                                showToast={showToast}
                                toggleScrolling={toggleScrolling}
                            />
                        ))}
                    </BaseBlock>
                </div>
                <div>
                    <BaseBlockTitle title="Lorem ipsum dolor" description="Lorem ipsum dolor sit amet."/>
                    <BaseBlock>
                        {playlists.map(playlist => (
                            <PlayList
                                key={playlist.title}
                                {...playlist}
                                showToast={showToast}
                                toggleScrolling={toggleScrolling}
                            />
                        ))}
                    </BaseBlock>
                </div>
                <div>
                    <BaseBlockTitle title="Lorem ipsum" description="Lorem ipsum dolor sit."/>
                    <BaseBlock>
                        {playlists.map(playlist => (
                            <PlayList
                                key={playlist.title}
                                {...playlist}
                                showToast={showToast}
                                toggleScrolling={toggleScrolling}
                            />
                        ))}
                    </BaseBlock>
                </div>
            </div>
        </main>
    )
}
