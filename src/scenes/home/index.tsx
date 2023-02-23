import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/TitleText.png";
import HomePageSubtitle from "@/assets/SubTitle.png"
import HomePageGraphic from "@/assets/HomePageGraphic.svg";
import PartnerRedBull from "@/assets/PartnerRedBull.png";
import PartnerForbes from "@/assets/PartnerForbes.png";
import PartnerFortune from "@/assets/PartnerFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* image and header */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* main header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="z-10 mt-32 md:basis-3/5"
        >
          {/* sub heading */}
          <div className="md:-mt-12">
            <div className="relative">
              <div className="text-7xl font-bold">
                <h1>YOYO YOGA</h1>
              </div>
              <div className="text-2xl font-medium">
                <h2>Stretch and Relax</h2>
              </div>
            </div>
            <p className="mt-8 text-sm">
              Yoga classes that will expand your mind and muscles, established in 2010. Shoulders
              tense from programming? Sign up to our group sessions now!
            </p>
          </div>
          {/* actions */}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Sign up!
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </motion.div>
        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="graphic" className="w-72 h-96 mt-3" />
        </div>
      </motion.div>
      {/* partners */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 flex justify-center">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={PartnerRedBull} alt="Redbull" />
              <img src={PartnerFortune} alt="Redbull" />
              <img src={PartnerForbes} alt="Redbull" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default home;
