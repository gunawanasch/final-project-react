import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../store/product/action";

const ListProduct = () => {
    const { entities } = useSelector((state) => state.product);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const fetchProducts = async () => {
      dispatch(getProducts());
    };

    useEffect(() => {
        console.log("fetchProducts");
      fetchProducts();
    }, []);
    const goToDetail = (id) => {
      navigate(`/detail/${id}`);
    };

    return (
        <>
            <div className="background-color-content">
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-5">
                    { entities.map((element, index) => {
                        return (
                            <div key={element.id} className="w-full lg:max-w-full lg:flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="w-25 object-cover rounded-t-lg md:w-40 md:rounded-none md:rounded-l-lg" src={element.image} alt="" style={{ height: "9.3rem", width: "10rem" }} />
                                <div className="p-4 flex flex-col justify-between leading-normal" style={{ marginLeft: "160px" }}>
                                    <div className="mb-2">
                                        <div className="text-gray-900 font-bold text-l mb-1">{element.title}</div>
                                        <div className="text-blue-500 text-l mb-2">$ {element.price}</div>
                                        <button onClick={() => goToDetail(element.id)} value={element.id} type="button" className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Detail</button>         
                                    </div>
                                     
                                </div>
                            </div>
                        )
                    }) } 
                </div> 
            </div>
        </>    
    );

}

export default ListProduct