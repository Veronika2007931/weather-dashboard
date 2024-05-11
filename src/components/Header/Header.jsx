import { useEffect, useState } from "react"
import { HeadMenu, HeadSection, Logo, MiniMenuBtn, SingInMenu } from "./Header.styled"
import { Modal } from "./Modal/Modal"
import { MiniMenu } from "./MiniMenu/MiniMenu"

export const Header=()=>{
    const [showModal, shown]=useState(false)
    const [account, newAcc]=useState(null)
    const [showMini, switchMini]=useState(false)
    const switchModal=()=>{
        shown(!showModal)
    }
    const check=(func)=>{
        const info = JSON.parse(localStorage.getItem('accInfo'))
        return info?info.name&&info.mail&&info.pass?true:false:false
    }
    useEffect(()=>{
        const info = JSON.parse(localStorage.getItem('accInfo'))
        check()&&newAcc(info)
    },[])

        const Menu=()=>{
            return( 
                <>    
                    
                </>  )}

    return(
        <>
            <HeadSection>
                <Logo href="/#" type="button"></Logo>
                <HeadMenu>
                    <li><a href="/#">Who we are</a></li>
                    <li><a href="/#">Contacts</a></li>
                    <li><a href="/#">Menu</a></li>
                </HeadMenu>
                <SingInMenu onClick={switchModal}>
                    {account?<span>{account.name}</span>:<button type="button">Sing up</button>}
                    <div></div>
                </SingInMenu>
                <MiniMenuBtn type="button"  onClick={()=>{switchMini(!showMini)}}>menu</MiniMenuBtn>  
            </HeadSection>
            {showModal&&<Modal closeModal={switchModal} regis={newAcc} check={check}/>}
            {showMini&&<MiniMenu account={account} switchModal={switchModal}/>}
        </>
    )
}