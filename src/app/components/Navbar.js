import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";



export default async function Navbar() {

    const client = createClient();

    const settings = await client.getSingle("settings");


    return (
        <header>
            <nav>
                <Link href="/">

                    <PrismicNextImage field={settings.data.og_image} alt = "NiQu"/>

                </Link>
                <ul>
                    {
                        settings.data.navigation.map(({ label, link }) => (
                            <li key={label}>
                                <PrismicNextLink field={link}>{label}</PrismicNextLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}