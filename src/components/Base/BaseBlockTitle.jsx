export const BaseBlockTitle = ({title, description = ''}) => (
    <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
        <div>
            <h2 className="text-2xl font-semibold hover:underline capitalize">
                <a href="/">{title}</a>
            </h2>
            <p className="text-sm text-[#b3b3b3]">{description}</p>
        </div>
        <a href="/" className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6">
            See all
        </a>
    </div>
)
