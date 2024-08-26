import {useNavigate, useParams} from 'react-router-dom';
import counterStore from "../../stores/counterStore.ts";

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const count = counterStore((state) => state.count)
    const increment = counterStore(state => state.increment)

    return <>
        <h1>Product {id}</h1>
        {count}
        <button onClick={() => increment()}>Add</button>
        <button onClick={() => navigate('/about/careers')}>Ir a para o /about/careers</button>
    </>
}

export default Product