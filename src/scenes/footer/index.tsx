import Logo from "@/assets/Logo.svg";
import Github from "@/assets/github.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="h-8 w-8" alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <a href="https://github.com/jchapps" className="flex gap-2">
            © 2023 YoYo Yoga - Joshua Chappelow
            <img
              className="cursor-pointer transition hover:-translate-y-0.5"
              src={Github}
              alt="github icon"
            />
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Careers</p>
          <p className="my-5">Teachers</p>
          <p>Yoga</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">yoyoyoga@yoyoyoga@mail.com</p>
          <p>(123)456-789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
