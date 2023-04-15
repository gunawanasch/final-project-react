import { useParams } from "react-router-dom";

const Payment = () => {
  const { total } = useParams();
  
  return (
    <>
        <div className="p-5 background-color-content">
            <h1 className="text-xl font-semibold">Lakukan Pembayaran</h1>
            <h5 className="mt-10 text-xl font-semibold flex justify-center">Nomor rekening Bank Mandiri :</h5>
            <h5 className="mt-2 text-xl font-semibold flex justify-center">1122334455</h5>
            <h5 className="mt-2 text-xl font-semibold flex justify-center">a.n. PT. Edspert Widya Edu</h5>
            <h5 className="mt-10 text-xl font-semibold flex justify-center">Nominal yang harus dibayar :</h5>
            <h5 className="mt-2 text-xl font-semibold flex justify-center">$ {total}</h5>
            <h1 className="mt-10 text-xl font-semibold">Cara melakukan konfirmasi pembayaran:</h1>
            <ul className="mt-2 mb-10">
                <li><h1>1. Silakan chat melalui aplikasi WhatsApp ke nomor 089999999</h1></li>
                <li><h1>2. Upload bukti pembayaran.</h1></li>
                <li><h1>3. Tunggu hasil konfirmasi dari kami.</h1></li>
            </ul>
        </div>
    </>
  );
};

export default Payment;