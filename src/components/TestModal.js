import {Button} from "./ui/Button"
import Modal from "./ui/Modal"
import {useState} from "react"

const TestModal = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <aside>
            <Button clickHandler={() => setOpenModal(!openModal)}>
                Open Test modal
            </Button>
            <Modal opened={openModal} hide={() => setOpenModal(false)}>
                Test modal content
            </Modal>
        </aside>
    )
}

export default TestModal
