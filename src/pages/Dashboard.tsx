/**
 * Página principal do Dashboard
 * Exibe visão geral financeira e widgets principais
 */
function Dashboard() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-6 bg-gray-50">
      <div className="max-w-[1400px] lg:max-w-[1600px] mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
          Dashboard
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-600 mb-4">
            Conteúdo do dashboard será implementado nos próximos prompts.
          </p>
          <div className="text-sm text-gray-500">
            <p>✅ Sidebar implementada (visível apenas em ≥1280px)</p>
            <p>✅ Navegação funcionando</p>
            <p>✅ Layout responsivo configurado</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
