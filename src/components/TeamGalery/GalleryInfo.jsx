
export function GalleryInfo({name, index, task, photo}){
    return (
        <li>
            <img src={photo} alt="" />
            <h2>{name}</h2>
            <p>{task}</p>
        </li>
    )
}