using ProEventos.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProEventos.Application.Contratos
{
    public interface IRedeSocialService
    {
        Task<RedeSocialDto[]> SaveByEvento(int eventoId, RedeSocialDto[] models);
        Task<bool> DeleteByEvento(int eventoId, int redeSocilId);

        Task<RedeSocialDto[]> SaveByPalestrante(int palestranteId, RedeSocialDto[] models);
        Task<bool> DeleteByPalestrante(int palestranteId, int redeSocilId);

        Task<RedeSocialDto[]> GetAllByEventoIdAsync(int eventoId);
        Task<RedeSocialDto[]> GetAllByPalestranteIdAsync(int palestranteId);

        Task<RedeSocialDto> GetRedeSocialEventoIdsAsync(int eventoId, int redeSocialId);
        Task<RedeSocialDto> GetRedeSocialPalestranteIdsAsync(int palestranteId, int redeSocialId);


    }
}
