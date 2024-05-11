import {team} from "../../team"
import { GalleryInfo } from "./GalleryInfo"
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import {Ullist} from "./Gallery.styled"

export function Gallery(){
    return(
        <div>
            <h2>Наша команда</h2>
            <MdArrowBackIosNew />
            <Ullist>
            {team.map(({name, index, task, photo})=>{
                return <GalleryInfo 
                key={name}
                name={name}
                index={index}
                task={task}
                photo={photo}
                />
                  
               
            })}
            </Ullist>
            <MdArrowForwardIos />
        </div>
    )
}