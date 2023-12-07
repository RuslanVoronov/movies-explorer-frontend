import React from "react";
import './InfoTooltip.css'

export function InfoTooltip({ isOpen, onClose, text }) {
    return (
        <section className={`${isOpen ? 'info-tooltip info-tooltip_opened' : 'info-tooltip'}`}>
            <div className="info-tooltip__content">
                <button onClick={onClose} className="info-tooltip__close-button" type="button"></button>
                <h2 className="info-tooltip__title">{text}</h2>
            </div>
        </section>
    )
};

export default InfoTooltip;