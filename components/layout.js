import styles from "../styles/layout.module.css"
import Header from "./header"
import Title from "./title"
import Footer from "./footer"
import {Box, Divider} from "@mui/material"

export default function Layout({title, subtitle, children }) {
    return (
        <Box className={styles.page_layout}>
            <Header />
            <Title title={title} subtitle={subtitle}/>
            <main>{children}</main>
            <Footer />
        </Box>
    )
}