import { useTranslations } from 'next-intl';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, AtSign } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'uk' ? 'Контакти' : 'Contact',
    description:
      locale === 'uk'
        ? 'Зв\'яжіться з Інною Андрусенко для запитів щодо виступів та співпраці'
        : 'Contact Inna Andrusenko for performance inquiries and collaborations',
  };
}

export default function ContactPage() {
  const t = useTranslations('contact');

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
      color: 'hover:text-pink-600',
    },
    {
      name: 'Threads',
      icon: AtSign,
      href: process.env.NEXT_PUBLIC_THREADS_URL || '#',
      color: 'hover:text-gray-900',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: process.env.NEXT_PUBLIC_YOUTUBE_URL || '#',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <div className="bg-white">
      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="heading-3 mb-8">{t('form.submit')}</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-3 mb-8">Contact Information</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                      <Mail className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <a
                        href="mailto:contact@inna-andrusenko.com"
                        className="text-gray-600 hover:text-primary-600"
                      >
                        contact@inna-andrusenko.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                      <Phone className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Phone</h3>
                      <a href="tel:+380" className="text-gray-600 hover:text-primary-600">
                        +380 (XX) XXX-XX-XX
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                      <MapPin className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Location</h3>
                      <p className="text-gray-600">Kyiv, Ukraine</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="mb-4 font-semibold">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition ${social.color}`}
                        aria-label={social.name}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CTA Box */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="mb-2 text-lg font-semibold">Booking Inquiries</h3>
                <p className="text-gray-600">
                  For concert bookings, collaborations, and professional inquiries, please fill
                  out the form or contact directly via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
