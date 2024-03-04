import Link from "next/link";
import Image from "next/image";
import { Typography, Box } from "@mui/material";

export default function Logo() {

    return (
        <Link href="/" >
            <Box sx={{display: "flex", alignItems: "flex-end", gap: "25px"}}>
                {/* <Image
                    src="/static/images/logow.png"
                    alt="Movie Faker Logo"
                    width={75}
                    height={75}
                    priority
                /> */}
                <Typography
                    sx={{
                        fontFamily: "Rubik Burned, system-ui",
                        fontSize: "2em",
                        fontWeight: "900"
                    }}
                >
                    Movie Faker
                </Typography>
            </Box>
        </Link>
    )
}