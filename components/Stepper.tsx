import React from "react";

export default function Stepper({ step }: { step: number }) {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex space-x-8">
        {[1,2,3].map((s) => (
          <div key={s} className="flex flex-col items-center">
            <div
              className={`
                w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold shadow-md
                ${step === s 
                  ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg" 
                  : step > s 
                    ? "bg-green-500 text-white" 
                    : "bg-slate-300 text-slate-600"}
              `}
            >
              {s}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}