import React from 'react';
import CountUp from 'react-countup';

const Blogs = () => {
    return (
        <div className='mx-auto py-14'>
            <div>
                <h1 className='text-center text-2xl font-bold'>We Provide Best Law Services</h1>
                <p className='text-center py-4'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
            <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                <div className="stats shadow w-48 bg-cyan-50 mx-auto">
                    <div className="stat">
                        <div className="flex justify-center">
                            <img src="https://i.ibb.co.com/FLJ6fdYZ/success-doctor.png" alt="" className="w-12 h-12" />
                        </div>
                        {/* <hi> <CountUp start={20} end={15} duration={15}/
                        >+   */}
                        <div className="stat-value ">
                            <CountUp end={199} duration={10}/> +
                        </div>
                        {/* </hi> */}
                       
                        <div className="stat-desc">Total Lawyer</div>
                    </div>
                </div>
                <div className="stats shadow w-48 bg-cyan-50 mx-auto">
                    <div className="stat">
                        <div className="flex justify-center">
                            <img src="https://i.ibb.co.com/1txMF54p/success-review.png" alt="" className="w-12 h-12" />
                        </div>
                        <div className="stat-value">467+</div>
                        <div className="stat-desc">Total Reviews</div>
                    </div>
                </div>
                <div className="stats shadow w-48 bg-cyan-50 mx-auto">
                    <div className="stat">
                        <div className="flex justify-center">
                            <img src="https://i.ibb.co.com/bj9GcpXB/success-patients.png" alt="" className="w-12 h-12" />
                        </div>
                        <div className="stat-value">190+</div>
                        <div className="stat-desc">Cases Initiated</div>
                    </div>
                </div>
                <div className="stats shadow w-48 bg-cyan-50 mx-auto">
                    <div className="stat">
                        <div className="flex justify-center">
                            <img src="https://i.ibb.co.com/cn5WnRV/success-staffs.png" alt="" className="w-12 h-12" />
                        </div>
                        <div className="stat-value">300+</div>
                        <div className="stat-desc">Total Stuffs</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;