"use client";

import { useActionState } from "react";
import { addCustomer } from "./actions";

export function NewCustomerForm() {
  const [state, action, pending] = useActionState(addCustomer, {
    message: "", name: "", balance: "",
  });

  return (
    <form action={action} className="mt-8 flex flex-wrap items-start gap-4">
      <input name="name" defaultValue={state.name} placeholder="Name" required
        className="border px-4 py-2 rounded-md" />
      <input name="balance" inputMode="decimal" defaultValue={state.balance}
        placeholder="Amount owed" required className="border px-4 py-2 rounded-md" />
      <button disabled={pending} className="bg-neutral-900 px-4 py-2 text-white disabled:opacity-50 rounded-md">
        {pending ? "Adding" : "Add customer"}
      </button>
      {state.message && <p className="w-full text-red-700">{state.message}</p>}
    </form>
  );
}