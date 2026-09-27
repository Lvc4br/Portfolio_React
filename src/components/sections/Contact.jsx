import { useState } from "react";

const MAX_CHARS = 280;

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [message, setMessage] = useState('');

    return <section id="contact" className="section contact">
        <div className="container">
            <div className="section-head">
                <span className="eyebrow">08 / Contact</span>
                <div>
                    <h2 className="section-title">Let's build something.</h2>
                    <p className="section-copy">For projects, collaborations or just a conversation about 3D and code.</p>
                </div>
            </div>
            <form className="contact__form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                action="#" method="POST">
                <label>Name
                    <input required name="name" placeholder="Your name" />
                </label>
                <label>Email
                    <input required type="email" name="email" placeholder="you@example.com" />
                </label>
                <label>Message
                    <textarea
                        required
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        maxLength={MAX_CHARS}
                        rows={3}
                    />
                    <span className="char-count">
                        {message.length} / {MAX_CHARS}
                    </span>
                </label>
                <button className="button button--solid" type="submit">
                    {sent ? "Message ready ✓" : "Send message →"}
                </button>
            </form>
        </div>
    </section>
}