using ProEventos.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProEventos.Persistence.Contratos
{
    public interface ILotePersist
    {

        /// <summary>
        /// Método get que retornará uma lista de lotes por eventoId
        /// </summary>
        /// <param name="eventoId">Código chave da tabela Evento</param>
        /// <returns>Array de lotes</returns>
        Task<Lote[]> GetLotesByEventoIdAsync(int eventoId);


        /// <summary>
        /// Método get que retornará apenas um lote
        /// </summary>
        /// <param name="eventoId"></param>
        /// <param name="id">Código chave da tabela lote</param>
        /// <returns>Apenas 1 lote</returns>
        Task<Lote> GetLoteByIdsAsync(int eventoId, int id);
    }
}
