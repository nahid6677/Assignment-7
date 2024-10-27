import PropTypes from 'prop-types';
const Main = ({ plyear, handleSelect }) => {
    return (
        <div>
            <div className="p-3 rounded-xl flex flex-col justify-center items-center gap-2 w-full border">
                <div className="">
                    <img className='w-full h-72 rounded-xl' src={plyear.img} alt={plyear.name} />
                </div>
                <div className="w-full border-b pt-2">
                    <div className="flex gap-3 items-center">
                        <img className='w-9 h-9 rounded-full' src={plyear.img} alt="" />
                        <h2 className='text-xl font-bold text-black'>{plyear.name}</h2>
                    </div>
                    <div className="flex justify-between items-center w-full py-3">
                        <div className="flex gap-2 items-center">
                            <img src="https://i.ibb.co.com/khzh58b/Vector.png" alt="" />
                            <p className='font-bold'>{plyear.player_country_name}</p>
                        </div>

                        <div className="h-full flex items-end ">
                            <button className='border py-1 px-2 rounded'>All-Rounred</button>
                        </div>
                    </div>
                </div>
                <div className="py-3 w-full flex flex-col ">
                    <h2 className='text-xl  font-bold'>Rating</h2>
                    <div className="flex w-full justify-between items-center">
                        <p className='font-bold'>Price: ${plyear.price}</p>
                        <button onClick={() => handleSelect(plyear)} className='border font-bold hover:text-white p-2 rounded-md hover:bg-slate-500'>Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Main.propTypes = {
    plyear: PropTypes.object.isRequired,
    handleSelect: PropTypes.func
}

export default Main; 