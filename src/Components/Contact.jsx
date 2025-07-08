import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_u72glvs', 
        'template_j85anrj',
        form.current,
        'VxnoELqc5kcAQXQCN'
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-20 text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#017534] mb-8">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Have a project or want to collaborate? Let’s get in touch.
        </p>

        {sent ? (
          <div className="text-center text-green-600 font-semibold text-xl">
            ✅ Message sent! I'll get back to you soon.
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#017534] transition"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#017534] transition"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#017534] transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-[#017534] text-white rounded-full hover:bg-[#015f2d] transition shadow"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
