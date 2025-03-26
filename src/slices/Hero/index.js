import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import styles from "@/app/styles/home/Hero.module.css";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @type {import("react").FC<HeroProps>}
 */

const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.heroSection}
    >

      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading1: ({ children }) => (
            <h1 className={styles.header}>{children}</h1>
          ),
        }}
      />

      <PrismicRichText
        field={slice.primary.body}
        components={{
          paragraph: ({ children }) => (
            <p className={styles.description}>{children}</p>
          ),
        }}
      />

      <PrismicNextLink field={slice.primary.button_link} className={styles.button}>
        {slice.primary.buttontext} </PrismicNextLink>


      <div className={styles.videoContainer}>

        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/assets/background_video.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>
    </section>
  );
};

export default Hero;
