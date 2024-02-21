import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto del modal
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);
// Componente proveedor del contexto del modal
export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(prevState => !prevState);

    return (
        <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};
