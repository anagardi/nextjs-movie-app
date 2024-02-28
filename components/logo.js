import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function Logo() {

    return (
        <Link href="/">
            {/* <Image
                src="/images/logo.png"
                alt="Movie Faker Logo"
                width={100}
                height={100}
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
        </Link>
    )
}