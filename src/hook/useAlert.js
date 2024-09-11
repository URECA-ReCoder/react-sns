import React, { useState } from "react";

export function useAlert() {
    const alertBack = () => {
        alert("이것은 다음 과제🦖");
    };
    return alertBack;
}