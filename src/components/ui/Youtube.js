const Youtube = ({link, full=false}) => {
    if( !link.includes('youtube.com') )
        return <div></div>

    const url = link.replace(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '$1')

    return (
        <div className={["relative", (full ? "h-full w-full" : "pb-9/16")].join(' ')}>
            <iframe className="absolute object-center h-full inset-0 w-full"
                    width="320"
                    height="280"
                    src={`//www.youtube.com/embed/${url}`}
                    frameBorder="0"
                    allowFullScreen
            />
        </div>
    )
}

export default Youtube
