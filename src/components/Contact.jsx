import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('oltCW2r0Grsghsx7c');
  }, []);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'giannicamp2018@gmail.com',
      link: 'mailto:giannicamp2018@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gianni-campione-7013a7385',
      link: 'https://www.linkedin.com/in/gianni-campione-7013a7385/',
      color: 'text-blue-400'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/giannicamp2018-maker',
      link: 'https://github.com/giannicamp2018-maker',
      color: 'text-blue-400'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // EmailJS configuration
      // Replace these with your EmailJS credentials from https://www.emailjs.com/
      const serviceId = 'service_dgteu8r';
      const templateId = 'template_k6ldoyt'; // Replace with your template ID
      const publicKey = 'oltCW2r0Grsghsx7c'; // Replace with your public key
      
      // Check if EmailJS is properly configured
      if (templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        // Fallback to mailto link if EmailJS is not configured
        const mailtoLink = `mailto:giannicamp2018@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.firstName} ${formData.lastName} (${formData.email})\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        setSubmitStatus({ 
          type: 'success', 
          message: 'Opening your email client... (EmailJS not configured yet)' 
        });
      } else {
        // Send email to you (the portfolio owner)
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'giannicamp2018@gmail.com'
        };
        
        console.log('Sending email with params:', templateParams);
        
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );
        
        console.log('EmailJS response:', response);

        // OPTIONAL: Send auto-reply confirmation to the sender
        // Uncomment the code below and create a second EmailJS template for auto-reply
        /*
        const autoReplyTemplateId = 'YOUR_AUTO_REPLY_TEMPLATE_ID';
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            to_name: `${formData.firstName} ${formData.lastName}`,
            to_email: formData.email,
            reply_subject: formData.subject
          },
          publicKey
        );
        */

        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
      }
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitStatus({ type: '', message: '' });
      }, 2000);
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or email directly at giannicamp2018@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 10,
                      backgroundColor: 'rgba(59, 130, 246, 0.1)'
                    }}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-800/70 transition-all duration-300 group"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`p-3 bg-gray-700 rounded-lg ${contact.color} group-hover:bg-gray-600 transition-all duration-300`}
                    >
                      <contact.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <h4 className="text-white font-semibold">Location</h4>
              </div>
              <p className="text-gray-300">Brick Township, NJ</p>
              <p className="text-gray-400 text-sm mt-1">Available for remote work</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300 text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
                    style={{ color: '#ffffff', backgroundColor: '#4b5563' }}
                    placeholder="Your first name"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300 text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
                    style={{ color: '#ffffff', backgroundColor: '#4b5563' }}
                    placeholder="Your last name"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-gray-300 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
                  style={{ color: '#ffffff', backgroundColor: '#4b5563' }}
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-gray-300 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
                  style={{ color: '#ffffff', backgroundColor: '#4b5563' }}
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-gray-300 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none"
                  style={{ color: '#ffffff', backgroundColor: '#4b5563' }}
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              {submitStatus.message && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
