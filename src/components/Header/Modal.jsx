import { Backdrop, FieldsItem, ModalBody, ModalBtn, ModalInfo, ModalTitle } from "./Modal.styled"

export const Modal = ({ closeModal, regis}) => {
    const close=(e)=>{
        e.target===e.currentTarget&&closeModal()
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
    }
    return(
        <Backdrop onClick={close}>
            <ModalBody onSubmit={singUp}>
                <ModalTitle>Sing up</ModalTitle>
                    <ModalInfo>
                        <FieldsItem>
                            <label>Username
                                <input type="text" name="name" placeholder="Username"/>
                            </label>
                        </FieldsItem>
                        <FieldsItem class="fields-item">
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
                <ModalBtn type="submit">Sing up</ModalBtn>
                <p>Already have an account? idc</p>
            </ModalBody>
        </Backdrop>        
    )
}