import HeadingText from "@/shared/HeadingText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Modern Facilities",
    description: "The best facilities to help you achieve your goals.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Tailored Courses",
    description: "Find the course which best suits you.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Certified Instructors",
    description: "All our instructors are qualified with years of experience.",
  },
];

const Benfits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeadingText>CHANGE YOUR LIFE</HeadingText>
          <p className="my-5 text-sm">
            Let our instructors improve strength, awareness and harmony in both
            the mind and body
          </p>
        </motion.div>
        {/* benefit boxes */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benfits;
