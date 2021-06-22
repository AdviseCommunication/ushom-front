const PostDate = (props) => {
    const postDate = props.data ? new Date(props.data) : new Date()
    const options = { year: 'numeric', month: 'long', day: '2-digit' }
    const formattedDate = postDate.toLocaleDateString('fr-FR', options)

    return (
        <p className={"font-bold text-lg pb-2"}>
            <time>{formattedDate}</time>
        </p>
    )
}

export default PostDate
