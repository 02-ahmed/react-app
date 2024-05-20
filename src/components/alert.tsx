import React from "react";
import { ReactNode } from "react";


interface Props{
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({children, onClose}:Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button className="btn-close" aria-label="close" data-bs-dismiss="alert" type="button" onClick={onClose}></button>
    </div>
    
  );
}

export default Alert