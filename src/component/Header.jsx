import '../component/css/Background-img.css'
import PropTypes from 'prop-types';
// import '../component/All_js/Script'
const Header = ({ handleFreeCredite, accountBlance }) => {

    return (
        <div className="">
            <div className="">
                <nav className="flex justify-between items-center">
                    <img className='w-16 h-16 rounded-full' src="https://media.gettyimages.com/id/499741785/vector/soccer-champion-background.jpg?s=2048x2048&w=gi&k=20&c=0i4abFGCbYUw0M_ku56MCQF-i27-b3LG3Hl4jCfqQgY=" alt="" />
                    <div className="flex justify-between items-center gap-5">
                        <ul className="flex justify-between items-center gap-3">
                            <li>Home</li>
                            <li>Fixture</li>
                            <li>Teams</li>
                            <li>Schedules</li>
                        </ul>
                        <div className="flex justify-between items-center sm:gap-2 border p-2 rounded-lg">
                            <h2 className='font-bold'><span id='my_account_blance'>{accountBlance}</span> Coin</h2>
                            <img src="https://i.ibb.co.com/LggF918/dollar-1.png" alt="" />
                        </div>
                    </div>
                </nav>
            </div>
            {/* banner section*/}
            <div className="w-full banner my-5 rounded-xl flex flex-col gap-5 items-center p-10">
                <img className='w-72' src="https://i.ibb.co.com/MVHXjzf/banner-main.png" alt="" />
                <h1 className='text-2xl text-white font-bold text-center'>Assemble Your Ultimate Dream 11 Football Team</h1>
                <p className='text-gray-200'>Beyond Boundaries Beyond Limits</p>
                <button onClick={() => handleFreeCredite()} id='free_credit' className='border-yellow-300 border rounded-md p-1'><h3 className='bg-yellow-300 p-2 font-bold rounded-md text-lg'>Claim Free Credit </h3> </button>
            </div>
        </div>
    );
};



Header.propTypes = {
    handleFreeCredite: PropTypes.func,
    accountBlance: PropTypes.number
}
export default Header;