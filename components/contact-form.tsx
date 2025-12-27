"use client"

import { useState } from "react"
import { TIMING, EASING } from "@/lib/constants"

interface FormState {
  status: "idle" | "loading" | "success" | "error"
  message?: string
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: "loading" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("failed to send message")
      }

      setFormState({
        status: "success",
        message: "message sent successfully. i'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setFormState({
        status: "error",
        message: "something went wrong. please try again or email directly.",
      })
    }
  }

  const inputClasses = `
    w-full bg-transparent border-b border-border/60
    py-3 text-sm font-light lowercase
    placeholder:text-muted-foreground/50 placeholder:lowercase
    focus:outline-none focus:border-foreground
    transition-colors
  `

  const transitionStyle = { transition: `all ${TIMING.medium}ms ${EASING}` }

  if (formState.status === "success") {
    return (
      <div className="py-8">
        <p className="text-sm font-light lowercase text-primary">{formState.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="text-caption lowercase text-muted-foreground opacity-muted mb-2 block font-light">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClasses}
          style={transitionStyle}
          placeholder="your name"
          disabled={formState.status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-caption lowercase text-muted-foreground opacity-muted mb-2 block font-light">
          email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClasses}
          style={transitionStyle}
          placeholder="your@email.com"
          disabled={formState.status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-caption lowercase text-muted-foreground opacity-muted mb-2 block font-light">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClasses} resize-none`}
          style={transitionStyle}
          placeholder="tell me about your project..."
          disabled={formState.status === "loading"}
        />
      </div>

      {formState.status === "error" && (
        <p className="text-sm font-light lowercase text-red-600">{formState.message}</p>
      )}

      <button
        type="submit"
        disabled={formState.status === "loading"}
        className="inline-flex items-center gap-4 text-label lowercase hover:text-primary transition-colors duration-300 font-light group disabled:opacity-50"
      >
        {formState.status === "loading" ? "sending..." : "send message"}
        <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
      </button>
    </form>
  )
}
