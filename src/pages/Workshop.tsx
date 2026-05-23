import { Calendar, Clock, Code, Cpu, MapPin, ShieldCheck } from "lucide-react";
import Button from "../components/ui/Button";
import CardSpeaker from "../components/ui/SpeakerCard";
import Collapse from "../components/ui/Collapse";

const PelaksanaanCard = ({ title, date, time, location, icon: Icon }: any) => (
  <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 border-l-8 border-l-red-900 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="bg-red-900 p-3 rounded-lg text-white">
      <Icon size={32} />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 flex items-center gap-2">
        <Calendar size={14} /> {date}
      </p>
      <p className="text-sm text-gray-600 flex items-center gap-2">
        <Clock size={14} /> {time}
      </p>
      <p className="text-sm text-gray-600 flex items-center gap-2">
        <MapPin size={14} /> {location}
      </p>
    </div>
  </div>
);

export default function Workshop() {
  const pembicara = [
    {
      nama: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      nama: "M. Dandi Purwanto",
      role: "Artifical Intelligence, Software Engineer, PT Mayer Kernel Supernova",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      nama: "Danang Avan M",
      role: "Cyber Security, Security Analyst, Founder | Contributor TegalSec ",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];

  const pelaksanaanList = [
    {
      title: "Mobile Development",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
      icon: Code,
    },
    {
      title: "Artificial Intelligence",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.2",
      icon: Cpu,
    },
    {
      title: "Cyber Security",
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
      icon: ShieldCheck,
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Kapan dan di mana Infovest akan diselenggarakan?",
      description:
        "Invofest akan diselenggarakan pada tanggal 28-29 September 2025 di Universitas Harkat Negeri, Tegal.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Infovest?",
      description:
        "Invofest terbuka untuk umum, terutama bagi pelajar dan mahasiswa yang tertarik dengan dunia teknologi.",
    },
    {
      title: "Apa saja kegiatan yang akan ada di Infovest?",
      description:
        "Infovest akan menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.",
    },
    {
      title: "Bagaimana cara mendaftar untuk Infovest?",
      description:
        "Untuk mendaftar Infovest, silakan kunjungi situs web resmi kami dan ikuti petunjuk pendaftaran yang tersedia.",
    },
    {
      title: "Apakah ada biaya pendaftaran untuk Infovest?",
      description:
        "Untuk informasi lebih lanjut mengenai biaya pendaftaran Infovest, silakan kunjungi situs web resmi kami.",
    },
  ];

  return (
    <div>
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center"
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-red-800 text-5xl font-bold">IT Workshop</h1>
          <h2 className="text-4xl text-red-900 font-semibold italic">
            “AI for a Sustainable Future: The Role of Z Generation in the
            Digital Era”
          </h2>

          <p className="text-xl">
            IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan
            AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan
            dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif
            menjadi solusi lingkungan yang nyata dan terukur di era digital.
          </p>

          <div className="flex gap-3">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>

        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
            alt=""
          />
        </div>
      </section>

      <section className="px-6 lg:px-12 max-w-5xl mx-auto text-center border-t border-gray-100 pt-16 mt-6 relative z-10">
        <h2 className="text-red-900 text-4xl text-center mb-12 font-bold">
          Tentang IT WORKSHOP
        </h2>
        <div className="text-gray-800 text-lg md:text-xl leading-relaxed space-y-6 max-w-4xl mx-auto">
          <p>
            Workshop “AI for a Sustainable Future: The Role of Z Generation in
            the Digital Era” ini didesain khusus untuk Generasi Z, para digital
            natives yang berada di persimpangan antara inovasi teknologi dan
            tantangan keberlanjutan global. Peserta akan diajak untuk menyelami
            bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi
            canggih, tetapi juga alat yang ampuh untuk menciptakan solusi nyata
            bagi isu-isu lingkungan. Melalui sesi inspiratif, pengenalan konsep,
            dan praktik langsung (hands-on), workshop ini bertujuan
            memberdayakan Gen Z untuk menjadi agen perubahan di era digital,
            menggunakan keahlian mereka untuk masa depan bumi yang lebih baik.
          </p>
        </div>
      </section>

       <section id="pembicara" className="py-50">
        <h2 className="text-red-900 text-4xl text-center mb-12 font-bold">
          Temui Pembicara Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
          {pembicara.map((item, index) => (
            <CardSpeaker
              key={index}
              nama={item.nama}
              role={item.role}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-12 max-w-6xl mx-auto">
        <h2 className="text-red-900 text-4xl text-center mb-12 font-bold">
          Pelaksanaan IT Workshop
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pelaksanaanList.map((item, index) => (
            <PelaksanaanCard key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16 lg:py-40 px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-900 font-bold mb-4 text-[15px] uppercase tracking-widest">
              FAQ
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-slate-800 mb-6 leading-tight">
              Punya Pertanyaan? Lihat <br />
              <span className="text-red-900">Disini</span>
            </h2>
            <p className="text-slate-500 text-[15px] md:text-[16px] max-w-xl mx-auto leading-relaxed">
              Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat
              melihat daftar pertanyaan di bawah ini.
            </p>
          </div>
        </div>
        <div />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}