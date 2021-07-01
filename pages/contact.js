import data from "../content/contact.json"

import Banner from "../src/components/ui/Banner"
import Container from "../src/components/ui/Container"
import Layout from "../src/components/layout/Layout"
import Address from "../src/components/widgets/Address"
import FormInput from "../src/components/ui/FormInput"
import FormTextarea from "../src/components/ui/FormTextarea"
import Title from "../src/components/ui/Title"
import {Button} from "../src/components/ui/Button"
import {useEffect, useState} from "react"

const Contact = () => {
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        const queryString = typeof window !== "undefined" && window.location.search || ""
        const urlParams = new URLSearchParams(queryString)
        setSuccess( urlParams.has('success') )
    }, [])

    return (
        <Layout mainCss={"bg-light"} seo={data.seo}>
            <Banner title={data.title} />
            <Container css={"py-24 flex flex-col space-y-16 md:space-y-0 md:flex-row md:space-x-8 lg:space-x-16"}>
                <Address
                    css={"flex-shrink-0 text-left space-y-4"}
                    titleCss={"text-3xl md:text-2xl max-w-xs text-primary font-medium"}
                />
                <div className={"w-full p-8 bg-white shadow-large space-y-8 lg:p-12"}>
                    <Title color={"primary"}>{data.form.title}</Title>
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        action={"/?success=1"}
                        className={"grid grid-cols-1 lg:grid-cols-2 gap-4"}
                    >
                        {data.form.fields.map((el,i) => {
                            const Component = el.type === 'textarea' ? FormTextarea : FormInput
                            return (
                                <Component key={i} {...el} css={el.fullsize ? "lg:col-span-2" : null} />
                            )
                        })}
                        <footer className={"lg:col-span-2 flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between"}>
                            <Button size={0} theme={"secondary"} type={"submit"}>
                                <span className={"py-2"}>{data.form.btnLabel}</span>
                            </Button>
                            {success && (
                                <div className={"flex items-center justify-center md:pl-4"}>
                                    <p
                                        className={"flex items-center space-x-3 font-medium shadow-large text-white px-4 py-2 transform ease-in duration-150 transition-all hover:-translate-y-px"}
                                        style={{ backgroundColor: "#34D399" }}
                                    >
                                        <svg className={"w-5 fill-current"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"/></svg>
                                        <span>Votre message a bien été envoyé !</span>
                                    </p>
                                </div>
                            )}
                        </footer>
                        <input type="hidden" name="form-name" value="contact" />
                    </form>
                </div>
            </Container>
        </Layout>
    )
}

export default Contact
