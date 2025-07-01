"use client";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendContactEmail } from "./actions";
import { z } from "@zod/mini";

const ContactSchema = z.object({
  name: z.string().check(
  ),
  email: z.string().check(z.email()),
  phone: z.optional(z.string()),
  message: z.string().check(z.minLength(5)),
  to: z.string().check(z.email()),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export function ContactForm({ to }: { to: string }) {
  const [form, setForm] = useState<ContactFormValues>({ name: "", email: "", phone: "", message: "", to });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const parsed = ContactSchema.safeParse(form);
    if (!parsed.success) {
      setError("Please fill all required fields correctly.");
      return;
    }
    startTransition(async () => {
      const res = await sendContactEmail({ ...form, to });
      if (res.success) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "", to });
      } else setError(res.error || "An error occurred.");
    });
  }

  return (
    <form className="space-y-4 bg-white" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">Nom et Prénom</Label>
        <Input id="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Téléphone (optionnel)</Label>
        <Input id="phone" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Comment puis-je vous aider ?</Label>
        <Textarea id="message" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required className="min-h-[100px]" />
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? "Envoi..." : "Envoyer"}
      </Button>
      {success && <div className="text-green-600">Message envoyé avec succès !</div>}
      {error && <div className="text-red-600">{error}</div>}
    </form>
  );
} 