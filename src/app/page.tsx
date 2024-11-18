import Image from "next/image";
import WhatsAppButton from "@/components/whatsAppButton";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="m-3">
      <div>
        <div className="text items-center">
          <div className="w-[100%]  ">
            <img src="https://static-id.zacdn.com/cms/24W43-HBS01/2024_HERO_W43_GIFSET_06.gif" />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-center font-bold text-3xl capitalize">Kaos</p>
        <div className=" p-8 grid grid-cols-4 gap-6 text-semibold">
          <div className="text-center">
            <img className="w-full" src="bajup1.jpg" alt="kaos 1" />
            <p>Kaos 1 </p>
          </div>
          <div className="text-center">
            <img className="w-full" src="bajup1.jpg" alt="kaos 1" />
            <p>Kaos 1 </p>
          </div>
          <div className="text-center">
            <img className="w-full" src="bajup1.jpg" alt="kaos 1" />
            <p>Kaos 1 </p>
          </div>
          <div className="text-center">
            <img className="w-full" src="bajup1.jpg" alt="kaos 1" />
            <p>Kaos 1 </p>
          </div>
          <div className="text-center">
            <img className="w-full" src="bajup1.jpg" alt="kaos 1" />
            <p>Kaos 1 </p>
          </div>
          <div className="text-center">
            <img className="w-full" src="bajup1.jpg" alt="kaos 1" />
            <p>Kaos 1 </p>
          </div>
          <div className="text-center">
            <img className="w-full" src="bajup1.jpg" alt="kaos 1" />
            <p>Kaos 1 </p>
          </div>
          <div className="text-center">
            <img className="w-full" src="bajup1.jpg" alt="kaos 1" />
            <p>Kaos 1 </p>
          </div>
        </div>
      </div>
      <WhatsAppButton></WhatsAppButton>
      <div>
        <Footer />
      </div>
    </div>
  );
}
