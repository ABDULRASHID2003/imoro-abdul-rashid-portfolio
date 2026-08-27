export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!data.subject.trim()) {
    errors.subject = 'Please enter a subject.'
  }

  if (!data.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Your message should be at least 10 characters.'
  }

  return errors
}

/**
 * Contact form submission handler.
 *
 * No email service or backend is configured yet, so this intentionally does
 * NOT claim the message was sent. To connect a service later (EmailJS,
 * Formspree, a serverless function, etc.), implement the request here and
 * return `{ ok: true }` on success.
 */
export async function submitContactForm(
  _data: ContactFormData,
): Promise<{ ok: boolean }> {
  // TODO: connect an email service or backend endpoint here.
  return { ok: false }
}

/** Builds a prefilled mailto link as an honest fallback. */
export function buildMailtoLink(data: ContactFormData, to: string): string {
  const subject = encodeURIComponent(data.subject || 'Portfolio contact')
  const body = encodeURIComponent(
    `Hi Imoro,\n\n${data.message}\n\n— ${data.name}${data.email ? ` (${data.email})` : ''}`,
  )
  return `mailto:${to}?subject=${subject}&body=${body}`
}
