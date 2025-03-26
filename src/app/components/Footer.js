import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";



export default async function Footer() {

    const client = createClient();

    const settings = await client.getSingle("settings");


    return (
        <footer>
            <Link href="/">
                <PrismicNextImage field={settings.data.og_image} alt="NiQu" />
            </Link>
            <ul>
                {settings.data.navigation.map(({ label, link }) => (
                    <li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                    </li>
                ))}
            </ul>
            <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} NiQu </p>
      </div>
        </footer>
    );
}