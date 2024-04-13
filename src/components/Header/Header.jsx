import { useState } from "react"
import { HeadMenu, HeadSection, Logo, SingInMenu } from "./Header.styled"
import { Modal } from "./Modal"

export const Header=()=>{
    const [shown, modalOnOff]=useState(false)
    const onSubBtnClick=()=>{
        modalOnOff(!shown)
        console.log(shown)
    }
    return(
        <HeadSection>
                <Logo href="/#" type="button"></Logo>
                <HeadMenu>
                    <li><a href="/#">Who we are</a></li>
                    <li><a href="/#">Contacts</a></li>
                    <li><a href="/#">Menu</a></li>
                </HeadMenu>
                <SingInMenu>
                    <button type="button" onClick={onSubBtnClick}>Sing up</button>
                    <div></div>
                </SingInMenu>
                {shown&&<Modal/>}
        </HeadSection>
    )
}