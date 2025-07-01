'use server';
import { z } from '@zod/mini';
import { Resend } from 'resend';
import { ContactEmailTemplate } from './email-template';

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const ContactSchema = z.object({
  name: z.string().check(),
  email: z.string().check(z.email()),
  phone: z.optional(z.string().check()),
  message: z.string().check(z.minLength(5)),
  to: z.string().check(z.email()),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export async function sendContactEmail(data: ContactFormValues) {
  const parsed = ContactSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data.' };
  }
  try {
    const res = await resend.emails.send({
      from: 'Contact Form <noreply@tuumagency.com>',
      to: [data.to],
      subject: `New Contact Form Submission from ${data.name}`,
      react: ContactEmailTemplate({ ...data }),
    });
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
}
