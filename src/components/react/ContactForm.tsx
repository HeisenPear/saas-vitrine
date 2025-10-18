import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
  budget: z.string().min(1, 'Veuillez sélectionner un budget'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulation d'envoi (à remplacer par EmailJS ou Formspree)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form data:', data);

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Nom complet */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
          Nom complet <span className="text-accent">*</span>
        </label>
        <input
          {...register('fullName')}
          type="text"
          id="fullName"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
          placeholder="Jean Dupont"
        />
        {errors.fullName && (
          <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
            <AlertCircle size={16} />
            <span>{errors.fullName.message}</span>
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
          Email <span className="text-accent">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
          placeholder="jean.dupont@email.fr"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
            <AlertCircle size={16} />
            <span>{errors.email.message}</span>
          </p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
          Téléphone
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
          placeholder="06 12 34 56 78"
        />
      </div>

      {/* Type de projet */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-semibold text-white mb-2">
          Type de projet <span className="text-accent">*</span>
        </label>
        <select
          {...register('projectType')}
          id="projectType"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
        >
          <option value="" className="bg-dark-800">Sélectionnez un type</option>
          <option value="site-vitrine" className="bg-dark-800">Site vitrine</option>
          <option value="seo" className="bg-dark-800">SEO Local</option>
          <option value="abonnement" className="bg-dark-800">Abonnement</option>
          <option value="autre" className="bg-dark-800">Autre</option>
        </select>
        {errors.projectType && (
          <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
            <AlertCircle size={16} />
            <span>{errors.projectType.message}</span>
          </p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
          Budget estimé <span className="text-accent">*</span>
        </label>
        <select
          {...register('budget')}
          id="budget"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
        >
          <option value="" className="bg-dark-800">Sélectionnez un budget</option>
          <option value="<2000" className="bg-dark-800">Moins de 2 000€</option>
          <option value="2000-5000" className="bg-dark-800">2 000€ - 5 000€</option>
          <option value=">5000" className="bg-dark-800">Plus de 5 000€</option>
        </select>
        {errors.budget && (
          <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
            <AlertCircle size={16} />
            <span>{errors.budget.message}</span>
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Décrivez votre projet en quelques mots..."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
            <AlertCircle size={16} />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      {/* RGPD Checkbox */}
      <div>
        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            {...register('consent')}
            type="checkbox"
            className="mt-1 w-5 h-5 rounded border-white/10 bg-white/5 text-accent focus:ring-accent focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            J'accepte que mes données soient utilisées pour me recontacter concernant ma demande.
            Conformément au RGPD, vous pouvez exercer vos droits à tout moment. <span className="text-accent">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
            <AlertCircle size={16} />
            <span>{errors.consent.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary inline-flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>Envoi en cours...</span>
          </>
        ) : (
          <>
            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            <span>Envoyer ma demande</span>
          </>
        )}
      </button>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 bg-accent/20 border border-accent rounded-lg flex items-center space-x-3"
          >
            <CheckCircle2 size={24} className="text-accent flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">Message envoyé avec succès !</p>
              <p className="text-sm text-gray-300">Nous vous répondrons sous 24h.</p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center space-x-3"
          >
            <AlertCircle size={24} className="text-red-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">Erreur lors de l'envoi</p>
              <p className="text-sm text-gray-300">Veuillez réessayer ou nous contacter par email.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
