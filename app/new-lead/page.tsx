"use client";

import { useState } from "react";
// import Stepper from "@/components/Stepper";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

import { motion } from "framer-motion";

export default function NewLeadPage() {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [step, setStep] = useState(1);

  // Step form data
  const [form, setForm] = useState({
    companyName: "",
    website: "",
    city: "",
    country: "",
    employeeCount: "",
    industry: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    leadSource: "",
    notes: ""
  });

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);


  const handleSubmit = async () => {

    try {
      const res = await fetch("https://localhost:7147/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(await res.text());

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }

    catch (err) {
      console.error(err);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };



  return (
    <>

      <div className="page-center">
        <div className="lead-form-card max-w-4xl w-full mb-20 p-12 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200">


          <div className="stepper">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`step ${step >= s ? "active" : ""}`}>
                <div className="step-circle">{s}</div>
                Step {s}
              </div>
            ))}
          </div>


          {/* Animating the steps */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (

              <>
                <InputField label="Company Name" value={form.companyName}
                  onChange={(v) => setForm({ ...form, companyName: v })} required />

                <InputField label="Website" value={form.website}
                  onChange={(v) => setForm({ ...form, website: v })} />

                <InputField label="City" value={form.city}
                  onChange={(v) => setForm({ ...form, city: v })} />

                <InputField label="Country" value={form.country}
                  onChange={(v) => setForm({ ...form, country: v })} />

                <SelectField label="Employee Count" value={form.employeeCount}
                  onChange={(v) => setForm({ ...form, employeeCount: v })}
                  options={["10-50", "51-100", "101-250", "250+"]} />

                <SelectField label="Industry" value={form.industry}
                  onChange={(v) => setForm({ ...form, industry: v })}
                  options={["SaaS", "Fintech", "Healthcare", "E-commerce", "Other"]} />

                <div className="flex justify-center mt-6">
                  <Button label="Next" onClick={next} />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <InputField label="First Name" value={form.firstName}
                  onChange={(v) => setForm({ ...form, firstName: v })} />

                <InputField label="Last Name" value={form.lastName}
                  onChange={(v) => setForm({ ...form, lastName: v })} />

                <InputField label="Phone" value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })} />

                <InputField label="Email" value={form.email} type="email"
                  onChange={(v) => setForm({ ...form, email: v })} required />

                <div className="flex justify-center gap-6 mt-8">
                  <Button label="Back" onClick={prev} />
                  <Button label="Next" onClick={next} />
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <SelectField label="Lead Source" value={form.leadSource}
                  onChange={(v) => setForm({ ...form, leadSource: v })}
                  options={["Inbound", "Outbound", "Referral", "Event", "LinkedIn"]} />

                <TextArea label="Notes" value={form.notes}
                  onChange={(v) => setForm({ ...form, notes: v })} />

                <div className="flex justify-center gap-6 mt-8">
                  <Button label="Back" onClick={prev} />
                  <Button label="Submit" onClick={handleSubmit} />
                </div>
              </>
            )}

            {showSuccess && (
              <div className="toast toast-success">
                ✅ Lead saved successfully
              </div>
            )}

            {showError && (
              <div className="toast toast-error">
                ❌ Failed to connect to server
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
