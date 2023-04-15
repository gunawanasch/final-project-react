import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
    const navigate = useNavigate();
    const { entities } = useSelector((state) => state.cart);
    const countTotalPrice = (data) => {
      const result = data.reduce((prev, curr) => {
        return prev + parseInt(curr.price, 10);
      }, 0);
      return result;
    };

    return (
        <>
            <div className="p-5 background-color-content">
                <h1 className="text-xl font-semibold">Daftar Pesanan</h1>
                <div className="mt-10 ml-20 mr-20 relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-sm text-gray-50 uppercase bg-blue-500">
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                        </tr>
                        </thead>
                        <tbody>
                        {entities.map((item, index) => {
                            return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>$ {item.price}</td>
                            </tr>
                            );
                        })}
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Total Pembayaran</th>
                            <th>$ {countTotalPrice(entities)}</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                
                { countTotalPrice(entities) > 0 &&
                    <> 
                        <p className="mt-10">
                            Selesaikan proses pemesanan dengan menekan tombol "Bayar".
                        </p>
                        <button onClick={() => navigate(`/payment/${countTotalPrice(entities)}`)} type="button" className="mt-10 mb-10 focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-900">Bayar</button> 
                    </>
                }     
            </div>
        </>
    );
  };
  
  export default Cart;