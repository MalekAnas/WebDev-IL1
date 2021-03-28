

function Header(props) {
    return (
        <div className="Header">
            <div className="row bg-green-500 ">
                <div className="grid grid-cols-4 gap-1">
                    <div className="col-start-2 col-span-4 my-5">
                        <div>
                            <img alt="" src="./pokemon.png"></img>
                        </div>

                        {props.loading ? <h2>Loading...</h2> : (
                            <h2>Data loaded</h2>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;