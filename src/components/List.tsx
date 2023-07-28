import { addProduct, deleteProduct, fetchProducts, } from "@/actions/product";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
const List = () => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state: any) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div>
            
            <button
                className="border bg-blue-500 p-2"
                onClick={() => dispatch(addProduct())}
            >
                Add Product
            </button>

            <button className="border bg-blue-500 p-2" onClick={() => dispatch(deleteProduct())}>
                Delete Product
            </button>
            {products?.map((item: any) =>{
                return(
                    <div key={item.id}>
                         <p>{item.name}</p>
                         <p>Sản Phẩm : {item.id}</p>
                         <p>{item.price}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default List;
