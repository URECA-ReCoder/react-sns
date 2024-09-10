import React, { useState } from "react";

export function useButtonevent() {
    const handleBack = () => {
        alert("이것은 다음 과제🦖");
    };
    return handleBack;
}