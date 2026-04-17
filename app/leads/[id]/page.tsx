type LeadDetailsProps = {
  params: {
    id: string;
  };
};

async function getLead(id: string) {
  const res = await fetch(`https://localhost:7147/api/contacts/${id}`, {
    cache: "no-store", // optional but recommended for fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lead");
  }

  return res.json();
}

export default async function LeadDetails({
  params,
}: LeadDetailsProps) {
  const lead = await getLead(params.id);

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6">
        {lead.companyName}
      </h1>

      <p><strong>Contact:</strong> {lead.firstName} {lead.lastName}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Phone:</strong> {lead.phone}</p>
      <p><strong>City:</strong> {lead.city}</p>
      <p><strong>Country:</strong> {lead.country}</p>
      <p><strong>Notes:</strong> {lead.notes}</p>
    </div>
  );
}