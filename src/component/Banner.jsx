import PropTypes from 'prop-types';
const Banner = ({ handleFreeCredite }) => {
    return (
        <div>
            <div className="w-full banner my-5 rounded-xl flex flex-col gap-5 items-center p-10">
                <img className='w-72' src="https://i.ibb.co.com/MVHXjzf/banner-main.png" alt="" />
                <h1 className='text-2xl text-white font-bold text-center'>Assemble Your Ultimate Dream 11 Football Team</h1>
                <p className='text-gray-200'>Beyond Boundaries Beyond Limits</p>
                <button onClick={() => handleFreeCredite()} id='free_credit' className='border-yellow-300 border rounded-md p-1'><h3 className='bg-yellow-300 p-2 font-bold rounded-md text-lg'>Claim Free Credit </h3> </button>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleFreeCredite: PropTypes.func
}
export default Banner;