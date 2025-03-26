import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";

const iconMap = {
    linkedin: <FaLinkedin />,
    youtube: <FaYoutube />,
    instagram: <FaInstagram />,
    email: <FaEnvelope />,
};

export default async function Navbar() {

    const client = createClient();

    const settings = await client.getSingle("settings");


    return (
        <header>
            <nav>
                <Link href="/">

                    <PrismicNextImage field={settings.data.og_image} alt="NiQu" />

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
                <ul>
                    {
                        settings.data.socials.map(({ iconname, link }) => (
                            <li key={iconname}>
                                <PrismicNextLink field={link}> {iconMap[iconname.toLowerCase()]}</PrismicNextLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}