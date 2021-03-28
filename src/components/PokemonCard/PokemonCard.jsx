import './PokemonCard.css';

function PokemonCard(props) {

    return (
        <div className="pokemonCard">
            <div className="grid grid-col-2 gap-2" >
                <div className="flex items-center rounded-xl justify-center py-20 item-height bg-green-200 bg-opacity-50 mx-20 my-4 shadow-md  border-2 border-green-400">
                    <div className="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded-r-full  md:flex-row">
                        <div className="md-mt-28 md:-my-16 md:-ml-32 "  >
                            <img
                                className="w-auto h-48"
                                src={props.image}
                                alt={props.alt}
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col items-center md:items-start">
                                <h2 className="text-xl font-medium">{props.name}</h2>
                                <p className="text-base font-medium  text-gray-400">{props.type}</p>
                                <button className="btn">Details</button>
                            </div>
                            <div className="flex items-center justify-center space-x-3 md:justify-start">

                            </div>
                        </div>
                    </div>



                    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="roundedPolygon">
                                <path
                                    d="M79 6.237604307034a32 32 0 0 1 32 0l52.870489570875 30.524791385932a32 32 0 0 1 16 27.712812921102l0 61.049582771864a32 32 0 0 1 -16 27.712812921102l-52.870489570875 30.524791385932a32 32 0 0 1 -32 0l-52.870489570875 -30.524791385932a32 32 0 0 1 -16 -27.712812921102l0 -61.049582771864a32 32 0 0 1 16 -27.712812921102"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>






        </div>

    )
}

export default PokemonCard;