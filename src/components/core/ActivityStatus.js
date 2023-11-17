import React from "react";

function ActivityStatus({ children, }) {
    const bgColor = (_children) => {
        const lowercaseStatus = _children?.toLowerCase(); // Use optional chaining to handle undefined status
        switch (lowercaseStatus) {
            case "active":
                return "bg-green-3";
            case "deactive":
                return "bg-red-3";
            case "hold":
                return "bg-warning-3";
            default:
                return "";
        }
    };
    const textColor = (_children) => {
        const lowercaseStatus = _children?.toLowerCase(); // Use optional chaining to handle undefined status
        switch (lowercaseStatus) {
            case "active":
                return "text-green-2";
            case "deactive":
                return "text-red-2";
            case "hold":
                return "text-warning-2";
            default:
                return "";
        }
    };

    return (
        <p className={`inline-flex justify-center items-center ${textColor(children)} text-[13px] leading-[20px] font-semibold rounded-full ${bgColor(children)} py-1.5 px-4`}>
            {children}
        </p>

    );
};

export default ActivityStatus;
