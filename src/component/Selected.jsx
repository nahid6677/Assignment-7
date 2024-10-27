import PropTypes from 'prop-types';
const Selected = ({ plyearr, removePlayre }) => {
    return (
        <div>
            <div className="flex justify-between w-full border p-3 rounded-xl my-2">
                <div className="flex gap-3 items-center">
                    <img className="w-12 h-12 rounded-full" src={plyearr.img} alt="" />
                    <div className="">
                        <h2 className="test-xl font-bold">{plyearr.name}</h2>
                        <p className="text-base font-bold">{plyearr.price}</p>
                    </div>
                </div>
                <button onClick={() => removePlayre(plyearr)} className='mr-2'><img src="https://i.ibb.co.com/P6zfpD8/Vector-1.png" alt="" /></button>
            </div>
        </div>
    );
};
Selected.propTypes = {
    plyearr: PropTypes.object.isRequired,
    removePlayre: PropTypes.func
}
export default Selected;