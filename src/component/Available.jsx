import PropTypes from 'prop-types';
const Available = ({ select, handleSelectedBtn, handleAvailable }) => {
    const handleBTNSelect = () => {
        document.getElementById('AvailableBTN').classList.remove('bg-yellow-300');
        document.getElementById('SelectedBId').classList.add('bg-yellow-300');

    }
    const handleBtnAvailable = () => {
        document.getElementById('AvailableBTN').classList.add('bg-yellow-300');
        document.getElementById('SelectedBId').classList.remove('bg-yellow-300');
    }
    return (
        <div className="">
            <div className="sm:flex justify-between items-center pb-6 ">
                <h1 id='availSelect' className="text-center sm:text-start text-2xl text-black font-bold">Available Plyers <span id='availableSelect' className='hidden'>({select}/6)</span></h1>
                <div className="flex w-64 rounded-lg border overflow-hidden mx-auto sm:mx-0 mt-3 sm:mt-0">
                    <button id='AvailableBTN' onClick={() => handleAvailable(handleBtnAvailable())} className="p-2 w-32 bg-yellow-300 font-bold">Available</button>
                    <button id='SelectedBId' onClick={() => handleSelectedBtn(handleBTNSelect())} className="p-2 w-32 font-bold">Selected ({select})</button>
                </div>
            </div>
        </div>
    );
};

Available.propTypes = {
    select: PropTypes.number.isRequired,
    handleSelectedBtn: PropTypes.func.isRequired,
    handleAvailable: PropTypes.func.isRequired
}
export default Available;