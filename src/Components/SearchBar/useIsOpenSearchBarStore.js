import React from 'react'
import create from 'zustand'

const useIsOpenSearchBarStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isopen) => set(() => ({isOpen : isopen}))
}))

export default useIsOpenSearchBarStore;