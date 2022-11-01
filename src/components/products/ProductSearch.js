export const ProductSearch = ({ setterFunction }) => {
    return (
        <div>
            <label>What candy are you looking for?</label>
            <input
                onChange={
                    (event) => {
                        setterFunction(event.target.value)
                    }
                }
                type="text" placeholder="search products" />
        </div>
    )
}