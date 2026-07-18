// src/app/contactanos/page.tsx
export default function ContactanosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
          Contáctanos
        </h1>
        <p className="text-lg text-slate-600">
          Estamos aquí para ayudarte. Déjanos un mensaje o comunícate directamente con nosotros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">Datos de Contacto</h2>
          <p className="text-slate-600">
            ¿Tienes alguna consulta técnica sobre nuestros servicios de calibración o mantenimiento?
          </p>
          <div className="space-y-4">
            <p className="text-slate-700">
              <strong className="text-slate-900">Ubicación:</strong> Lima, Perú
            </p>
            <p className="text-slate-700">
              <strong className="text-slate-900">Correo:</strong> contacto@tuempresa.com
            </p>
          </div>
        </div>

        {/* Formulario simple */}
        <form className="space-y-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="correo@ejemplo.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
            <textarea 
              rows={4}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="¿En qué te podemos ayudar?"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}