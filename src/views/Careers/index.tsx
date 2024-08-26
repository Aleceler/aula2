import counterStore from "../../stores/counterStore.ts";

const Careers = () => {
    const counter = counterStore(state => state.count)

    return <>
        <h1>Careers</h1>
        <p>Contador: {counter}</p>

    </>
}

export default Careers