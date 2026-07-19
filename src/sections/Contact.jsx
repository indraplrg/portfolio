import bgImg from "../assets/abstract_background.jpg";
import { useState } from "react"; // 1. Tambahkan state untuk handling loading & status
import {
  EnvelopeSimpleIcon,
  MailboxIcon,
  PaperPlaneTiltIcon,
  UserIcon,
} from "@phosphor-icons/react";
import Card from "../components/Card";
import Button from "../components/Button";

const Contact = () => {
  // State untuk melacak status pengiriman form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage("");

    const formData = new FormData(e.target);

    formData.append("access_key", "68a4f517-ecf1-48ad-a6b9-136aacb896bd");

    try {
      const response = await fetch("https://web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResultMessage("✅ Message sent successfully!");
        e.target.reset(); // Reset form jika berhasil
      } else {
        setResultMessage("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setResultMessage("❌ Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // 3. Bungkus elemen input ke dalam tag <form> untuk menghandle submit
    <form
      onSubmit={handleSubmit}
      className="font-bricolage-grotesque relative flex min-h-screen w-full flex-col gap-4 p-5"
      id="contact"
    >
      <div className="absolute inset-0 -z-10 opacity-35">
        <img
          src={bgImg}
          alt="background-image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h1 className="font-bebas-neue text-6xl">contact me</h1>

      {/* 4. PASTIKAN SETIAP INPUT MEMILIKI ATRIBUT 'name' DAN 'required' */}
      <Card classname="items-center has-focus:translate-x-1 has-focus:bg-[#e5e5e7] has-focus:translate-y-1px has-focus:shadow-none transition-all">
        <UserIcon size={25} className="text-gray-400" />
        <input
          type="text"
          name="name" // Ditambahkan
          placeholder="Your Name"
          required // Ditambahkan
          className="w-full p-1 focus:outline-2"
        />
      </Card>

      <Card classname="items-center has-focus:translate-x-1 has-focus:bg-[#e5e5e7] has-focus:translate-y-1px has-focus:shadow-none transition-all">
        <EnvelopeSimpleIcon size={25} className="text-gray-400" />
        <input
          type="email"
          name="email" // Ditambahkan
          placeholder="Email"
          required // Ditambahkan
          className="p-q w-full focus:outline-2"
        />
      </Card>

      <Card classname="has-focus:translate-x-1 has-focus:bg-[#e5e5e7] has-focus:translate-y-1px has-focus:shadow-none transition-all">
        <input
          type="text"
          name="subject" // Ditambahkan
          placeholder="Subject"
          required // Ditambahkan
          className="w-full p-1 focus:outline-2"
        />
      </Card>

      <Card classname="has-focus:translate-x-1 has-focus:bg-[#e5e5e7] has-focus:translate-y-1px has-focus:shadow-none transition-all ease-in-out">
        <div className="relative w-full">
          <MailboxIcon
            size={25}
            className="absolute top-1 left-1 focus:outline-2"
          />
          <textarea
            name="message" // Ditambahkan
            placeholder="Write a message"
            required // Ditambahkan
            className="h-48 w-full resize-none pt-1 pl-8 focus:outline-2"
          ></textarea>
        </div>
      </Card>

      {/* Tampilkan pesan sukses/gagal di bawah form */}
      {resultMessage && (
        <p className="mt-2 text-sm font-semibold">{resultMessage}</p>
      )}

      {/* 5. UBAH <Button> agar bertipe "submit" dan handle status loading */}
      <Button
        disabled={isSubmitting}
        classname="capitalize p-3 hover:bg-[#8bb422] transition-all mb-16 md:mb-0 ease-in-out bg-[#a1d12c] disabled:opacity-50"
      >
        <PaperPlaneTiltIcon size={25} />
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default Contact;
