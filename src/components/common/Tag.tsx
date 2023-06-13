type TagProp = {
    tagName: string;
};

export default function Tag({ tagName }: TagProp) {
    return (
        <div className={`border-2 w-fit rounded-full text-sm text-white flex-none`}>
            <div className="mx-2 text-center">
                {tagName}
            </div>
        </div>
    )
}