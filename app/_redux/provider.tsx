"use client"
import React, { ReactNode } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

interface Props {
    children: ReactNode
}

export function ReduxProvider ({ children }: Props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}