import { HeadMenu, SingInMenu, MobileMenu } from "./MiniMenu.styled"
import user from "../../../img/user.png"

export const MiniMenu=({account, switchModal})=>{
    return(
        <MobileMenu>
                <HeadMenu>
                    <li><a href="/#">Who we are</a></li>
                    <li><a href="/#">Contacts</a></li>
                    <li><a href="/#">Menu</a></li>
                </HeadMenu>
                <SingInMenu onClick={switchModal}>
                    <div></div>
                    {account?<span>{account.name}</span>:<button type="button">Sing up</button>}
                </SingInMenu>
        </MobileMenu>
    )
}