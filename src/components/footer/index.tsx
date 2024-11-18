import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0">
      <div>
        <Link href="/">
          <h2 className="items-center flex text-xl font-semibold">
            <img width={68} src="logo-p.png" alt="logo" />
            <p className="">It ain&apos;t cheap</p>
          </h2>
        </Link>
      </div>
      <div>
        <ul className="flex gap-3">
          <li className="w-auto">
            <Link className="hover:opacity-50" href="/">
              Home
            </Link>
          </li>
          <li className="w-auto">
            <Link className="hover:opacity-50" href="/aboutUs">
              About Us
            </Link>
          </li>

          <li className="w-auto">
            <Link className="hover:opacity-50" href="">
              Contact&Services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
