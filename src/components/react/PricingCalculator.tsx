import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';

export default function PricingCalculator() {
  const [pages, setPages] = useState(5);
  const [hasBlog, setHasBlog] = useState(false);
  const [hasEcommerce, setHasEcommerce] = useState(false);
  const [hasSeo, setHasSeo] = useState(true);
  const [total, setTotal] = useState(1800);

  useEffect(() => {
    let price = 1800; // Prix de base

    // Pages supplémentaires (au-delà de 5)
    if (pages > 5) {
      price += (pages - 5) * 100;
    }

    // Blog intégré
    if (hasBlog) {
      price += 300;
    }

    // E-commerce (non disponible pour l'instant)
    if (hasEcommerce) {
      price += 0; // Sera activé plus tard
    }

    // Options SEO avancées
    if (hasSeo) {
      price += 200;
    }

    setTotal(price);
  }, [pages, hasBlog, hasEcommerce, hasSeo]);

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent rounded-xl flex items-center justify-center">
          <Calculator size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold text-white">
            Calculateur de Prix
          </h3>
          <p className="text-sm text-gray-400">
            Personnalisez votre projet et estimez le coût
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Nombre de pages */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="text-white font-semibold">Nombre de pages</label>
            <span className="text-accent font-bold text-xl">{pages}</span>
          </div>
          <input
            type="range"
            min="3"
            max="15"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>3 pages</span>
            <span>15 pages</span>
          </div>
          {pages > 5 && (
            <p className="text-sm text-gray-400 mt-2">
              +{(pages - 5) * 100}€ pour {pages - 5} page{pages - 5 > 1 ? 's' : ''} supplémentaire{pages - 5 > 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Blog intégré */}
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
          <div>
            <label className="text-white font-semibold block mb-1">Blog intégré</label>
            <p className="text-sm text-gray-400">
              Système de blog pour améliorer votre SEO
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {hasBlog && <span className="text-accent font-semibold">+300€</span>}
            <button
              onClick={() => setHasBlog(!hasBlog)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                hasBlog ? 'bg-accent' : 'bg-white/20'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  hasBlog ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* E-commerce */}
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg opacity-50 cursor-not-allowed">
          <div>
            <label className="text-white font-semibold block mb-1">E-commerce</label>
            <p className="text-sm text-gray-400">
              Non disponible actuellement
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-gray-500 text-sm">Bientôt</span>
            <button
              disabled
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 cursor-not-allowed"
            >
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
            </button>
          </div>
        </div>

        {/* Options SEO avancées */}
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
          <div>
            <label className="text-white font-semibold block mb-1">Options SEO avancées</label>
            <p className="text-sm text-gray-400">
              Audit complet + optimisation poussée
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {hasSeo && <span className="text-accent font-semibold">+200€</span>}
            <button
              onClick={() => setHasSeo(!hasSeo)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                hasSeo ? 'bg-accent' : 'bg-white/20'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  hasSeo ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg text-gray-400">Total estimé</span>
          <motion.div
            key={total}
            initial={{ scale: 1.2, color: '#10b981' }}
            animate={{ scale: 1, color: '#ffffff' }}
            className="text-4xl font-bold text-gradient"
          >
            {total}€
          </motion.div>
        </div>

        <p className="text-sm text-gray-400 mb-6 text-center">
          Ce prix est indicatif. Un devis précis sera établi après étude de votre projet.
        </p>

        <a
          href="/contact"
          className="btn-primary w-full inline-flex items-center justify-center space-x-2 group"
        >
          <span>Demander un devis personnalisé</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
