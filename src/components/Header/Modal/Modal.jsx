import { Backdrop, FieldsItem, ModalBody, ModalBtn, ModalInfo, ModalTitle } from "./Modal.styled"

export const Modal = ({ closeModal, regis, check}) => {    
    const closeOnEsc=(e)=>{
        if(e.code==='Escape'){
            closeModal()
            window.removeEventListener('keydown', closeOnEsc)
        }
    }
    window.addEventListener('keydown', closeOnEsc)
    const close=(e)=>{
        e.target===e.currentTarget&&closeModal()
        window.removeEventListener('keydown', closeOnEsc)
    }

    const singUp = (e) => {
        e.preventDefault()
        const form = e.currentTarget.elements
        if(form.name.value&&form.mail.value&&form.password.value){
            const accInfo = {
                name:form.name.value,
                mail:form.mail.value,
                pass:form.password.value
            }
            regis(accInfo)
            localStorage.setItem("accInfo", JSON.stringify(accInfo))
            closeModal()
        }
        else{
            const logOut=()=>{
                regis(null)
                localStorage.removeItem("accInfo")
                closeModal()
            }
            check()?confirm("Log out")&&logOut():alert('You have to fill all fields')
        }
    }
    return(
        <Backdrop onClick={close}>
            <ModalBody onSubmit={singUp}>
                <ModalTitle>{check()?'Change account':'Sing up'}</ModalTitle>
                    <ModalInfo>
                        <FieldsItem>
                            <label>Username
                                <input type="text" name="name" placeholder="Username"/>
                            </label>
                        </FieldsItem>
                        <FieldsItem>
                            <label>E-Mail
                                <input type="text" name="mail" placeholder="E-Mail"/>
                            </label>
                        </FieldsItem>
                        <FieldsItem>
                            <label>Password
                                <input type="text" name="password" placeholder="Password"/> 
                            </label>
                        </FieldsItem>
                    </ModalInfo>
                <ModalBtn type="submit">{check()?'Change':'Sing up'}</ModalBtn>
                {check()||<p>Already have an account? idc</p>}
            </ModalBody>
        </Backdrop>        
    )
}