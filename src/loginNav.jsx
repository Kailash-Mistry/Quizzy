export function LoginNav() {

    return (
        <>
            <div class="box-border border-b-black border-b-2 drop-shadow-xl fixed top-0 z-20 w-full px-2 py-4 admin-signup bg-fuchsia-950">
                <div class="signup-header-view">
                    <div class="hidden md:flex justify-between max-w-screen-xl mx-auto my-0">
                        <div class="h-7"><a href="/"><img class="h-full xs:ml-10"
                            src="https://cf.quizizz.com/img/quizizz_logos/white-brandmark-600x164.png"
                            alt="Quizizz"></img></a></div>
                        <div class="flex items-center justify-center btn-tray-right align-center">
                            <div
                                class="h-8 px-4 py-1 mr-3 text-sm transition-transform scale-100 rounded bg-red-950 text-white xs:mr-6 hover:scale-110">
                                <a href="/join" class="" target="_blank"><span>Join a game</span></a>
                            </div>
                            <div
                                class="h-8 px-4 py-1 text-sm transition-transform scale-100 rounded bg-fuchsia-900 text-white hover:scale-110">
                                <a href="/signup?source=top_nav_login_button&amp;ctaSource=top_nav_login_button&amp;ref=header_tab&amp;webflow_referrer=webflow&amp;lng=en"
                                    class="">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}