"use client";
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";

const CookieConsentBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consentCookie = cookie.get("cookieConsent");

        if (!consentCookie) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        setShowBanner(false);
        cookie.set("cookieConsent", "accepted", { expires: 365 });
    };

    const handleReject = () => {
        setShowBanner(false);
        cookie.set("cookieConsent", "rejected", { expires: 365 });
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="flex flex-wrap lg:gap-5 justify-center items-center sticky bottom-0 z-20 bg-[#505050] text-white p-3 text-center">
            <p>This website uses cookies to improve your browsing experience.</p>
            <p>Please click Accept to continue.</p>
            <div>
                <button
                    className="font-bold py-2 px-8 border-2 border-slate-400 rounded-xl m-5 hover:bg-red-700 duration-200"
                    onClick={handleReject}
                >
                    Reject
                </button>
                <button
                    className="text-white font-bold py-2 px-8 bg-marcol-blue rounded-xl m-5"
                    onClick={handleAccept}
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieConsentBanner;
