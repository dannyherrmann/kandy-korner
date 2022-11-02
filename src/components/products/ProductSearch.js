export const ProductSearch = ({ setterFunction }) => {
    return (
        <div>
            <label>What candy are you looking for?</label><br></br>
            <input
                onChange={
                    (event) => {
                        setterFunction(event.target.value)
                    }
                }
                type="text" placeholder="type product name here" />
        </div>
    )
}