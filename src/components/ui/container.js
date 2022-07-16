import React from "react";

 const Container = () => {
     return(
          <>
            <div class="flex min-h-screen flex-col justify-center bg-gray-50 py-6 sm:py-12">
                <div class="relative py-3 sm:mx-auto sm:max-w-xl">
                    <div class="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-green-200 to-blue-300 shadow-lg sm:-rotate-3 sm:skew-y-0 sm:rounded-3xl">
                    
                    <div class="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-green-300 to-[#B1FFF3] shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
                    
                    </div>

                    <div class="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
                        <div class="mx-auto max-w-md">
                            <div>
                                 {/* <img src="printec_logo_grey.svg" alt="Printecbot" /> */}
                                 
                            </div>
                            {/* <Controler />*/}
                        </div>
                    </div>

                </div>
            </div>
        </>
     )
}
export default Container