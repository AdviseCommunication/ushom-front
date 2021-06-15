import Youtube from "./Youtube"

const Media = (props) => {
    const url = props.media || props.link

    if( url?.includes('youtube.com') ) {
        return <Youtube link={url} />
    }

    if( url?.includes('.mp3') || url?.includes('.wav') ) {
        return (
            <figure className={"flex flex-col"}>
                {props?.alt && <figcaption className={"font-bold mb-2"}>{props.alt}</figcaption>}
                <audio controls src={url}/>
            </figure>
        )
    }

    if( url?.includes('https://') && !url?.includes('.jpg') && !url?.includes('.png') && !url?.includes('.gif') ) {
        return (
            <iframe className={"w-full"} src={url} />
        )
    }

    if( url?.includes('.jpg') || url?.includes('.png') || url?.includes('.gif') ) {
        return (
            <picture className={"flex flex-col"}>
                <img loading={"lazy"} alt={props?.alt} src={url} />
            </picture>
        )
    }

    return null
}

export default Media
