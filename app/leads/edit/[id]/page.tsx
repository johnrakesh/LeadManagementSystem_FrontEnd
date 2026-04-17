
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";


// type EditLeadProps = {
//   params: {
//     id: string;
//   };
// };

type Lead = {
    id: string;
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    website?: string;
    city?: string;
    country?: string;
    employeeCount?: string;
    industry?: string;
    leadSource?: string;
    notes?: string;
};


export default function EditLead() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [lead, setLead] = useState<Lead | null>(null);
    const [loading, setLoading] = useState(true);

   


useEffect(() => {
    if (!id) return;

    fetch(`https://localhost:7147/api/contacts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch lead");
        return res.json();
      })
      .then((data) => {
        setLead(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [id]);

  const updateLead = async () => {
    const res = await fetch(`https://localhost:7147/api/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (res.ok) {
      router.push("/leads");
    } else {
      alert("Failed to update lead");
    }
  };

  if (loading) return <p className="p-8 text-center">Loading lead...</p>;
  if (!lead) return <p className="p-8 text-center">Lead not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-16 flex justify-center px-4">

      {/* Centered Form Container */}
      <div className="w-full max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold mb-10 text-gray-800">
          Edit Lead
        </h1>

        {/* FORM FIELDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Company Name</label>
            <input className="border p-3 rounded-lg"
              value={lead.companyName}
              onChange={(e) => setLead({ ...lead, companyName: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Website</label>
            <input className="border p-3 rounded-lg"
              value={lead.website || ""}
              onChange={(e) => setLead({ ...lead, website: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">City</label>
            <input className="border p-3 rounded-lg"
              value={lead.city || ""}
              onChange={(e) => setLead({ ...lead, city: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Country</label>
            <input className="border p-3 rounded-lg"
              value={lead.country || ""}
              onChange={(e) => setLead({ ...lead, country: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Employee Count</label>
            <input className="border p-3 rounded-lg"
              value={lead.employeeCount || ""}
              onChange={(e) => setLead({ ...lead, employeeCount: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Industry</label>
            <input className="border p-3 rounded-lg"
              value={lead.industry || ""}
              onChange={(e) => setLead({ ...lead, industry: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">First Name</label>
            <input className="border p-3 rounded-lg"
              value={lead.firstName || ""}
              onChange={(e) => setLead({ ...lead, firstName: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Last Name</label>
            <input className="border p-3 rounded-lg"
              value={lead.lastName || ""}
              onChange={(e) => setLead({ ...lead, lastName: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Phone</label>
            <input className="border p-3 rounded-lg"
              value={lead.phone || ""}
              onChange={(e) => setLead({ ...lead, phone: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Email</label>
            <input className="border p-3 rounded-lg"
              value={lead.email || ""}
              onChange={(e) => setLead({ ...lead, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Lead Source</label>
            <input className="border p-3 rounded-lg"
              value={lead.leadSource || ""}
              onChange={(e) => setLead({ ...lead, leadSource: e.target.value })}
            />
          </div>
        </div>

        {/* Notes Field */}
        <div className="flex flex-col gap-2 mt-8">
          <label className="font-semibold text-gray-700">Notes</label>
          <textarea
            className="border p-3 rounded-lg h-32"
            value={lead.notes || ""}
            onChange={(e) => setLead({ ...lead, notes: e.target.value })}
          />
        </div>

        {/* Save Button */}
        <button
          onClick={updateLead}
          className="mt-10 bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition"
        >
          Save Changes
        </button>

      </div>
    </div>
  );
}
