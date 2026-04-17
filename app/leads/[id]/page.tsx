"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function LeadDetails() {
  const params = useParams();
  const id = params.id as string;

  const [lead, setLead] = useState<any>(null);
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

  if (loading) return <p className="p-8 text-center">Loading lead...</p>;
  if (!lead) return <p className="p-8 text-center">Lead not found.</p>;

  return (
    <div className="min-h-screen  py-14 px-4 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* ---------- HEADER CARD ---------- */}
        <div className="rounded-2xl shadow-xl bg-gradient-to-r from-indigo-600 to-blue-600 p-10 text-white relative overflow-hidden">

          {/* Soft background pattern */}
          <div className="absolute inset-0 opacity-20 blur-2xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_70%)]"></div>

          <div className="relative flex items-center gap-6">
            
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-bold shadow-lg border border-white/30">
              {lead.firstName?.charAt(0)}
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-1">
                {lead.firstName} {lead.lastName}
              </h1>
              <p className="text-lg opacity-90">{lead.email}</p>
            </div>
          </div>
        </div>

        {/* ---------- DETAILS CARD ---------- */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-10 space-y-8">

          {/* Section: Company Info */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Company Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <Detail label="Company Name" value={lead.companyName} />
              <Detail label="Website" value={lead.website || "—"} />
              <Detail label="City" value={lead.city || "—"} />
              <Detail label="Country" value={lead.country || "—"} />
              <Detail label="Industry" value={lead.industry || "—"} />
              <Detail label="Employee Count" value={lead.employeeCount || "—"} />
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Section: Contact Info */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <Detail label="Contact Name" value={`${lead.firstName} ${lead.lastName}`} />
              <Detail label="Email" value={lead.email} />
              <Detail label="Phone" value={lead.phone || "—"} />
              <Detail label="Lead Source" value={lead.leadSource || "—"} />
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Notes */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Notes</h2>
            <p className="bg-gray-50 border border-gray-200 p-5 rounded-xl text-gray-700 whitespace-pre-wrap">
              {lead.notes || "No notes available."}
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

/* ---------- SMALL DETAIL COMPONENT ---------- */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className="text-base mt-1">{value}</p>
    </div>
  );
}