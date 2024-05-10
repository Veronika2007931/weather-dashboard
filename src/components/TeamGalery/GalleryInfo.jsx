import { Image, Text } from "./Gallery.styled"



export function GalleryInfo({name, index, task, photo}){
    return (
        <li>
            <Image src={photo} alt="" />
            <h2>{name}</h2>
            <Text>{task}</Text>
           
        </li>
    )
}