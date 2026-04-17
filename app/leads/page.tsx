"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Lead = {
  id: string;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    fetch("https://localhost:7147/api/contacts")
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch((err) => console.error("Error fetching leads:", err));
  }, []);

  const deleteLead = async (id: string) => {
    try {
      await fetch(`https://localhost:7147/api/contacts/${id}`, {
        method: "DELETE",
      });

      setLeads((prev) => prev.filter((x) => x.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="min-h-screen  py-12 px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          Leads Dashboard
        </h1>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-4 font-semibold text-sm">Company</th>
                <th className="p-4 font-semibold text-sm">Contact</th>
                <th className="p-4 font-semibold text-sm">Email</th>
                <th className="p-4 font-semibold text-sm">Phone</th>
                <th className="p-4 font-semibold text-sm text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b hover:bg-indigo-50 transition-all"
                >
                  <td className="p-4">{lead.companyName}</td>
                  <td className="p-4">
                    {lead.firstName} {lead.lastName}
                  </td>
                  <td className="p-4">{lead.email}</td>
                  <td className="p-4">{lead.phone}</td>

                  <td className="p-4 flex items-center justify-center gap-3">
                    <Link
                      href={`/leads/${lead.id}`}
                      className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      View
                    </Link>

                    <Link
                      href={`/leads/edit/${lead.id}`}
                      className="px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}