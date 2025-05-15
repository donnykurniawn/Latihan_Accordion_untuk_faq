import "./styles.css";
import Accordion from "./components/Accordion";

export default function App() {
  const faqs = [
    {
      question: "Apakah kamu ingin jadi orang sukses ?",
      answer:
        "Ya, tentu saja dengan sukses membuat saya bisa menguasai ruang dan waktu saya sendiri.",
    },
    {
      question: "Berapa lama target kamu sukses?",
      answer:
        "secepat mungkin, realistis ya 5 tahun ke depan asal selalu belajar.",
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian.",
    },
  ];

  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}
