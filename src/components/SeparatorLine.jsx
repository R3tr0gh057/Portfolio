import React from "react";

export const Separator = ({children})=> {

    return (
        <>
            <div class="flex items-center w-[70%]">
                <span class="text-white font-bold">{children}</span>
                <div class="flex-grow h-px bg-gray-500 ml-4"></div>
            </div>
        </>
    );
};