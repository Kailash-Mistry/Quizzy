export function LoginSec() {

    return (
        <>  
            <div className="flex ">
                <div className="top-10 left-10 absolute"></div>
                <div className="md:mt-20 flex justify-center h-screen w-screen items-center relative rounded-md">
                    <div className="mt-10 bg-white rounded-l-lg h-full md:h-144 w-full md:w-128">
                        <div className="flex justify-between px-4 bg-white items-center mt-4 h-15 md:hidden">
                            <a className=""><img className="h-6 mt-5"
                                src="https://cf.quizizz.com/img/quizizz_logos/q-logo-icon.png"
                                alt="quizizz brand logo"></img></a>
                        </div>
                        <section className="p-4 md:p-10" f>
                            <section className="flex flex-col ">
                                <section >
                                    <h1 className="text-lg md:text-xl text-dark-2 font-semibold"
                                        data-testid="auth-modal-welcome-title">Log in to Quizizz</h1>
                                </section>
                                <section >
                                    <section className="flex flex-col space-y-3 mt-4"><button
                                        role="button"
                                        className="text-sm md:text-base rounded w-full flex justify-between items-center py-2 px-4 shadow-sm border border-slate-200 hover:shadow-md"
                                    ><span
                                        className="flex items-center space-x-4 md:justify-start"><img
                                            src="https://cf.quizizz.com/img/logos/google-logo-1.png" alt="google"
                                            className="w-4 h-4 object-contain"
                                        ></img><span
                                            className="text-base font-semibold btn-label">Continue with
                                                Google</span></span><i
                                                    className="far fa-arrow-right text-dark-5 font-normal hover:text-lilac"></i></button><button
                                                        role="button"
                                                        className="text-sm md:text-base rounded w-full flex justify-between items-center py-2 px-4 shadow-sm border border-slate-200 hover:shadow-md"
                                                    ><span
                                                        className="flex items-center space-x-4 md:justify-start"><img
                                                            src="https://cf.quizizz.com/image/icon%20(1).png" alt="phone"
                                                            className="w-4 h-4 object-contain"
                                                            ></img><span
                                                                className="text-base font-semibold btn-label">Continue with
                                                    Phone</span></span><i
                                                        className="far fa-arrow-right text-dark-5 font-normal hover:text-lilac"></i></button><button
                                                            role="button"
                                                            className="text-sm md:text-base rounded w-full flex justify-between items-center py-2 px-4 shadow-sm border border-slate-200 hover:shadow-md"
                                                        ><span
                                                            className="flex items-center space-x-4 md:justify-start"><img
                                                                src="https://cf.quizizz.com/image/envelope-regular.png" alt="email"
                                                                className="w-4 h-4 object-contain"
                                                            ></img><span
                                                                className="text-base font-semibold btn-label">Continue with
                                                    Email</span></span><i
                                                        className="far fa-arrow-right text-dark-5 font-normal hover:text-lilac"></i></button>
                                    </section>
                                    <span className="mt-4 text-dark-4 text-sm flex justify-center">or
                                        continue
                                        with</span>
                                    <section className="flex flex-row justify-center mt-4 gap-4">
                                        <div className="flex flex-col items-center"><button
                                            role="button"
                                            className="w-10 h-10 flex items-center justify-center shadow-md rounded-sm cursor-pointer bg-[#3D6AD6]"
                                            ><img
                                                className="object-contain w-6 h-6"
                                                src="https://cf.quizizz.com/image/Facebook.png"></img></button><span
                                                    className="text-dark-2 text-[10px] mt-1">Facebook</span>
                                        </div>
                                        <div className="flex flex-col items-center"><button
                                            role="button"
                                            className="w-10 h-10 flex items-center justify-center shadow-md rounded-sm bg-inherit cursor-pointer"><img
                                                className="object-contain w-6 h-6"
                                                src="https://cf.quizizz.com/img/logos/ms-logo.png"></img></button><span
                                                    className="text-dark-2 text-[10px] mt-1">Microsoft</span>
                                        </div>
                                        <div className="flex flex-col items-center"><button
                                            role="button"
                                            className="w-10 h-10 flex items-center justify-center shadow-md bg-[#222222] rounded-sm cursor-pointer"><img
                                                className="object-contain w-6 h-6"
                                                src="https://cf.quizizz.com/image/Apple.png"></img></button><span
                                                    className="text-dark-2 text-[10px] mt-1">Apple</span></div>
                                        <div className="flex flex-col items-center"><button
                                            role="button"
                                            className="w-10 h-10 flex bg-[#8854C0] items-center justify-center shadow-md rounded-sm cursor-pointer"><img
                                                className="object-contain w-6 h-6"
                                                src="https://cf.quizizz.com/image/shield-halved.png"></img></button><span
                                                    className="text-dark-2 text-[10px] mt-1">Others</span></div>
                                    </section>
                                </section>
                            </section>

                            <section className="mt-44">
                                <section role="nudge"
                                    className="bg-light-2 text-black py-4 flex items-center justify-center space-x-1 text-xs rounded-b-lg">
                                    <span className="xs-hidden">Don't have an
                                        account?</span><button
                                            className="bg-violet-300 rounded px-3 py-1 text-purple-700 text-xs font-semibold ml-2"
                                            type="button" >Sign up</button>
                                </section>
                            </section>
                        </section>
                    </div>
                    <div className="hidden md:flex mt-10 bg-classroom w-75 h-144 rounded-r-lg items-end">
                        <div className="w-full h-32 bottom-0 bg-slate-800 flex items-center backdrop-blur-xl p-4 rounded-br-lg">
                            <div className="flex flex-col">
                                <div className="justify-start pb-2 text-sm font-semibold text-white" >
                                    Teachers love us &nbsp;😍
                                </div>
                                <div className="justify-start pt-0 text-sm font-semibold text-slate-300"
                                >Join over 200 million educators and learners
                                    on Quizizz
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}