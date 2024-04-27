import {team} from "../../team"
import { GalleryInfo } from "./GalleryInfo"

export function Gallery(){
    return(
        <div>
            <h2>Наша команда</h2>
            <ul>
            {team.map(({name, index, task, photo})=>{
                return <GalleryInfo>
                    key={name}
                    name={name}
                    index={index}
                    task={task}
                    photo={photo}
                </GalleryInfo>
            })}
            </ul>
        </div>
    )
}