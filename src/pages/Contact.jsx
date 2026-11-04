import { useForm } from "react-hook-form";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = () => {};

  return (
    <main className="contact-page">
      <section className="contact-card" aria-labelledby="contact-title">
        <div className="contact-intro">
          <span className="contact-eyebrow">WE’RE HERE TO HELP</span>
          <h1 id="contact-title">Get in touch</h1>
          <p>
            Have a question about your order or our menu? Send us a message and
            our team will be happy to help.
          </p>
          <div className="contact-details">
            <p><i className="bi bi-telephone" aria-hidden="true" /> +91-789045628</p>
            <p><i className="bi bi-envelope" aria-hidden="true" /> contact@gmail.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="contact-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              placeholder="Enter your name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              {...register("name", {
                required: "Please enter your name.",
                minLength: { value: 2, message: "Name must be at least 2 characters." },
                maxLength: { value: 80, message: "Name must be 80 characters or less." },
              })}
            />
            {errors.name && <span className="contact-error" id="contact-name-error">{errors.name.message}</span>}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              {...register("email", {
                required: "Please enter your email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {errors.email && <span className="contact-error" id="contact-email-error">{errors.email.message}</span>}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              placeholder="What can we help with?"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "contact-subject-error" : undefined}
              {...register("subject", {
                required: "Please add a subject.",
                maxLength: { value: 120, message: "Subject must be 120 characters or less." },
              })}
            />
            {errors.subject && <span className="contact-error" id="contact-subject-error">{errors.subject.message}</span>}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows="5"
              placeholder="Tell us how we can help..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              {...register("message", {
                required: "Please enter a message.",
                minLength: { value: 10, message: "Message must be at least 10 characters." },
                maxLength: { value: 1000, message: "Message must be 1000 characters or less." },
              })}
            />
            {errors.message && <span className="contact-error" id="contact-message-error">{errors.message.message}</span>}
          </div>

          <button className="contact-submit" type="submit">Send message <span aria-hidden="true">→</span></button>
          {isSubmitSuccessful && (
            <p className="contact-success" role="status">
              Your details passed validation. Message delivery is not connected yet.
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default Contact;
